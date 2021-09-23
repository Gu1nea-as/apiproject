import React, { useState, useEffect } from 'react'
const API_ENDPOINT = `https://api.jikan.moe/v3/search/`

export const useFetch = (searchQuery) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState({ show: false, msg: "" })
    const [entries, setEntries] = useState([])
    const fetchEntries = async (url) => {
        setLoading(true)
        
        try{
            
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            
            if(data.request_cached){
                setEntries(data.results)
                console.log(entries)
                setError({show: false, msg: ""})
            }else{
                setError({show: true, msg: "error"})
            }
            setLoading(false)
        }catch(error){
            console.error(error)
        }
        
    }
    useEffect(() => {
        console.log(`${API_ENDPOINT}${searchQuery}`)
        fetchEntries(`${API_ENDPOINT}${searchQuery}`)
    }, [searchQuery])

    return{loading, error, entries}
}

export const categoryFetch = (catSelect) => {
    
}
