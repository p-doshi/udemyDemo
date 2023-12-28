import React from 'react'
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css'

const SearchBar = () => {
    return (
        <>
            <div className='search-bar'>
                <input className='search-box' type='text' placeholder='Search for anything' />
                <FaSearch className='search-icon' />
            </div>
        </>
    )
}

export default SearchBar
