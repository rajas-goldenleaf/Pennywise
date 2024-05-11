import { fetchDmartPincodeSuggestions } from "@/services/Dmart/service";
import { NextRequest, NextResponse } from "next/server";

type Payload = {
    pincode: string
}
export async function POST(request: NextRequest) {
    const data: Payload = await request.json();
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

}
