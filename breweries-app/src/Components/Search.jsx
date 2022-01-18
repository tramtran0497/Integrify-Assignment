import React, {useState } from 'react'
import { Container } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField';

function Search({onSearch, handleEmptyValue}) {
    const [value, setValue] = useState("")

    function handleChange(e){
        e.preventDefault()
        setValue(e.target.value)
        onSearch(value)
    }

    function handleEnter(e){
        if(e.charCode === 13){
            handleChange(e)
        }
    }

    handleEmptyValue(value)
    return (
        <Container sx={{height: '20%', my: 10, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <TextField
                sx={{width: '80%'}}  
                variant="outlined"
                placeholder="Please type text here..."
                value={value} 
                onChange={handleChange}
                onKeyPress={handleEnter}
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
