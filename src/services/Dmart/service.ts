import axios from "axios";
import { PincodeDetailsRequestBody } from "./type";

const axiosDmart = axios.create({
    baseURL: process.env.dmartURL
})

async function fetchDmartPincodeSuggestions(pincode: string) {
    try {
        console.log(pincode)
        const dmart_payload = {
            "searchText": pincode,
            "sessionToken": process.env.dmartSessionToken,
            "currentLocationPincode": "",
            "currentLat": "",
            "currentLng": ""
        }
        const dmartResposne = await axiosDmart.post(`/pincodes/suggestions/`, dmart_payload)
        return JSON.stringify({ data: dmartResposne.data, status: dmartResposne.status });
    } catch (err: any) {
        return err.response;
    }
}

async function fetchDmartPincodeDetails(pincodeDetails: PincodeDetailsRequestBody) {
    try {
        const dmartResposne = await axiosDmart.post(`/pincodes/details`, pincodeDetails)
        return JSON.stringify({ data: dmartResposne.data, status: dmartResposne.status });
    } catch (err: any) {
        return err.response;
    }

}

async function fetchDmartSlots(pincode: string, storeId: string) {
    try {
        const dmartResposne = await axiosDmart.get(`/pincodes/earliestslot/${pincode}?storeId=${storeId}`)
        return JSON.stringify({ data: dmartResposne.data, status: dmartResposne.status });
    } catch (err: any) {
        return err.response;
    }
}
async function getSearchResponseFromDmart(storeId: string, searchTerm: string) {
    try {
        const dmartSearchResponse = await axiosDmart.get(`/search/${searchTerm}?storeId=${storeId}`)
        return JSON.stringify({ data: dmartSearchResponse.data, status: dmartSearchResponse.status })
    } catch (err: any) {
        return err.response;
    }
}

export { fetchDmartPincodeSuggestions, fetchDmartPincodeDetails, fetchDmartSlots, getSearchResponseFromDmart }
/**
 * 
        // console.log(storeId, searchTerm)
        // return JSON.stringify({ msg: "working" })
 */