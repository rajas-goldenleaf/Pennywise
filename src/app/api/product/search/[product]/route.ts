import { getSearchResponseFromDmart } from "@/services/Dmart/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { product: string } }) {
    const queryParams = request.nextUrl.searchParams;
    const storeId = queryParams.get("storeId")
    if (!storeId) {
        return NextResponse.json({ error: "please enter valid storeId" }, { status: 401 })
    }
    const dmartSearchResponse = await getSearchResponseFromDmart(storeId, params.product)
    if (JSON.parse(dmartSearchResponse).status != 200) {
        return NextResponse.json({
            msg: "product could not be found, try searching other product"
        }, { status: 404 })
    }
    return NextResponse.json({ data: JSON.parse(dmartSearchResponse).data }, { status: 200 })

}