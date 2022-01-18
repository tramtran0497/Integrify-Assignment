import React, { useState } from 'react'

function Search({onSearch}) {
    const [value, setValue] = useState("")

    function handleChange(e){
        e.preventDefault();
        setValue(e.target.value)
        onSearch(value)
    }
    
    return (
        <div>
            <input type={"text"} value={value} placeholder='Searching...' onChange={handleChange}/>
        </div>
    )
}

export default Search
