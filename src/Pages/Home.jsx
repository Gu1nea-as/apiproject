import React, { useState } from 'react'
import SearchForm from '../Components/SearchForm'
import Entries from '../Components/Entries'

const Home = () => {
    return (
        <div>
            <SearchForm />
            <Entries />
        </div>
    )
}

export default Home
