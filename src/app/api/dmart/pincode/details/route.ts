import { fetchDmartPincodeDetails } from "@/services/Dmart/service";
import { PincodeDetailsRequestBody } from "@/services/Dmart/type";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const data: any = await request.json();
    const pincodeDetails = await fetchDmartPincodeDetails(data);
    if (JSON.parse(pincodeDetails).status != 200) {
        console.log("here is some error occuring")
        return NextResponse.json({ msg: "something went wrong" }, { status: 401 })
    }
    return NextResponse.json(JSON.parse(pincodeDetails).data, { status: 200 })
}

