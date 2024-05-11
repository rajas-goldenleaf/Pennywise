import React, { useCallback, useState } from 'react'

export default function useSearch() {
    const [searchText, setSearchText] = useState<String>();
    const [searchResults, setSearchResults] = useState([]);

    //* this func chages the value of search result
    const changeSearchText = useCallback((text: string) => {
        setSearchText(text)
    }, [])

    //TODO: this func hanldes the search api call and append the data to results array
    const submitHandler = useCallback(() => {
    }, [])


    return { searchText, changeSearchText, submitHandler }
}
