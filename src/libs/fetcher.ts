import axios, { AxiosError, AxiosResponse } from "axios";
import { FetchError } from "./FetchError";

const fetcher = (url: string) => axios.get(url).then((res: AxiosResponse) => res.data)
// { data: res.data, status: res.status }
// .catch((err: AxiosError) => ({ data: err.response?.data, status: err.response?.status }));

//! ERROR FETCH WITH CUSTOM ERROR CLASS
// const fetcher = (url: string) => {
//     axios.get(url)
//         .then(res => res.data)
//         .catch(err => {
//             throw new FetchError("An error occured while fetching the data", err.response.status, err.response.data)
//         })
// }


export default fetcher;