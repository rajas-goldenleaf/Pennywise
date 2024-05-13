import fetcher from "@/libs/fetcher";
import useSWR from "swr";

export default function useProductSearch(searchText: string | undefined, storeId: string) {
    const { data, error, isLoading } = useSWR(searchText ? `/api/product/search/${searchText}?storeId=${storeId}` : null, fetcher)
    if (error) {
        error.data = error.response.data
        error.status = error.response.status
    }
    return { data, error, isLoading }
}