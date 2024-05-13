// utils/withCors.ts
// HOF (higer order function)
// import { NextRequest, NextResponse } from 'next';
// import Cors from "cors"

// const whitelist = ['http://example.com']
// const cors = Cors({
//     methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],
//     origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
//         if (origin && whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// })

// function runMiddleware(req: NextRequest, res: NextResponse, fn: (req: NextRequest, res: NextResponse, next: (result: unknown) => void) => void) {
//     return new Promise((resolve, reject) => {
//         fn(req, res, (result) => {
//             if (result instanceof Error) {
//                 return reject(result)
//             }

//             return resolve(result)
//         })
//     })
// }

// export default function withCors(handler: (req: NextRequest, res: NextResponse) => Promise<void>) {
//     return async (req: NextRequest, res: NextResponse) => {
//         await runMiddleware(req, res, cors)
//         return handler(req, res)
//     }
// }



import { NextRequest, NextResponse } from 'next/server';
import Cors from "cors"

const whitelist = ["http://localhost:3001/"]
const cors = Cors({
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],
    origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
        console.log(origin)
        if (origin && whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
})

function runMiddleware(req: NextRequest, res: NextResponse, fn: (req: NextRequest, res: NextResponse, next: (result: unknown) => void) => void) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }
            return resolve(result)
        })
    })
}

export default function withCors(handler: (req: NextRequest, res: NextResponse) => Promise<NextResponse>) {
    return async (req: NextRequest, res: NextResponse) => {
        await runMiddleware(req, res, cors)
        return handler(req, res)
    }
}


