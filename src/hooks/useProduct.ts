import useSWR from "swr"
import fetcher from "@/libs/fetcher"

const useProduct = () => {
    const { data, error, isLoading } = useSWR('/api/product', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })
    if (error) {
        error.data = error.response.data
        error.status = error.response.status
    }
    return {
        data,
        error,
        isLoading,
    }
}

export default useProduct;
