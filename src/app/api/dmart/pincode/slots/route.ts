import { fetchDmartSlots } from "@/services/Dmart/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const queryParams = request.nextUrl.searchParams;
    const pincode = queryParams.get("pincode")
    const storeId = queryParams.get("storeId")

    if (!pincode || !storeId) {
        return NextResponse.json({ error: "please enter valid details" }, { status: 401 })
    }

    const response = await fetchDmartSlots(pincode, storeId)
    if (JSON.parse(response).status != 200) {
        return NextResponse.json({
            data: "Something went wrong, Please try again"
        }, { status: 410 })
    }
    return NextResponse.json({ data: JSON.parse(response).data }, { status: 200 });
}