import React from 'react'
import { useEntryContext } from '../util/context'

const Entries = () => {
    const {entries, loading} = useEntryContext()
    
    return (
        <div classname="entries-container">
            {entries.map((entry) => {

                const { title, airing, episodes, image_url, mal_id, rated, synopsis, url, type } = entry
                return(
                    <div className="entry" id={mal_id}>
                        <h2>{title}</h2>
                        <p className={airing ? "ongoing" : "finished"}>{airing ? "ongoing" : "finished"}</p>
                        <p className="episodes">{episodes}</p>
                        <a href={url}><img src={image_url} alt=""  /></a>
                        <p className="rating">{rated}</p>
                        <p className="description">{synopsis}</p>
                        <p className="type">{type}</p>
                    </div>
                )
            })}
            
        </div>
    )
}

export default Entries
