import React, { useState, useEffect, useContext } from 'react'
import { useFetch } from './useFetch'

const EntryContext = React.createContext()

export const EntryProvider = ({children}) => {
    const [query, setQuery] = useState('naruto')
    const [mediaType, setMediaType] = useState('anime?')
    const { entries, error, loading } = useFetch(`${mediaType}q=${query}`)

    return <EntryContext.Provider value={{query, setQuery, mediaType, setMediaType, loading, entries, error}}>
        {children}
    </EntryContext.Provider>
    
}
export const useEntryContext = () => {
    return useContext(EntryContext)
}