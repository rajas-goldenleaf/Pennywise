import React, { useCallback, useState, ChangeEvent, FormEvent } from 'react'
import useProductSearch from './useProductSearch';

export default function useSearch() {
    const [searchText, setSearchText] = useState<string>();
    const [submittedText, setSubmittedText] = useState<string>();

    //* this func changes the value of search result
    const changeSearchText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }, [])

    //TODO: this func handles the search api call and append the data to results array, this method encapsulate the storeId access process init
    const submitHandler = useCallback((e?: FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        if (!searchText) {
            return;
        }
        setSubmittedText(searchText);
    }, [searchText])

    // const { data, error, isLoading } = useSWR(submittedText ? `/api/product/search/${submittedText}?storeId=${"10680"}` : null, fetcher)
    const { data, error, isLoading } = useProductSearch(submittedText, "10680")

    return { searchText, changeSearchText, submitHandler, searchResults: data, error, isLoading }
}
