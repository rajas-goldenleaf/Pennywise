import { fetchDmartPincodeSuggestions } from "@/services/Dmart/service";
import withCors from "@/utils/withCors";
import { NextRequest, NextResponse } from "next/server";

type Payload = {
    pincode: string
}
export const POST = withCors(async (req: NextRequest, res: NextResponse) => {
    const data: Payload = await req.json();
    // make request to the dmart storeID
    const pincodeSuggestions = await fetchDmartPincodeSuggestions(data.pincode);

    if (JSON.parse(pincodeSuggestions).status != 200) {
        return NextResponse.json({
            data: {
                "unavailableTitle": pincodeSuggestions.data?.unavailableTitle,
                "unavailableMsg": pincodeSuggestions.data?.unavailableMsg,
                "suggestedPincode": pincodeSuggestions.data?.suggestedPincode,
            }
        }, { status: 404 })
    }


    return NextResponse.json(JSON.parse(pincodeSuggestions).data, { status: 200 })

});

export const GET = async (req: NextRequest, res: NextResponse) => {
    return NextResponse.json({ msg: "hello there working" }, { status: 200 })
}
