import React, { useState } from 'react'
import { Container } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField';


function Search({onSearch}) {
    const [value, setValue] = useState("")

    function handleChange(e){
        e.preventDefault()
        setValue(e.target.value)
        onSearch(value)
    }
    
    return (
        <Container sx={{height: '20%', my: 10, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <TextField
                sx={{width: '80%'}}  
                variant="outlined"
                placeholder="Please type text here..."
                value={value} 
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}/>   
        </Container>
    )
}

export default Search
