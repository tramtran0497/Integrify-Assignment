import React, { useState } from 'react'
import { Container } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField';

function Search({onSearch}) {
    const [searchText, setSearchText] = useState("")

    function handleChange(e){
        e.preventDefault()
        setSearchText(e.target.value)
        onSearch(searchText)
    }

    function handleEnter(e){
        if(e.charCode === 13){
            handleChange(e)
        }
    }

    return (
        <Container sx={{height: '20%', my: 10, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <TextField
                sx={{width: '80%'}}  
                variant="outlined"
                placeholder="Please type text here..."
                value={searchText} 
                onChange={handleChange}
                onKeyPress={handleEnter}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='start'>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}/>  
                
        </Container>
    )
}

export default Search
