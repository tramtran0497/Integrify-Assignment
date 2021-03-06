import React, {useState} from 'react';
import BreweryCard from './BreweryCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Search from './Search';
import { useEffect } from 'react';

function BreweryList({breweries}) {
    const [displayBre, setDisplayBre] = useState([])
    
    useEffect(()=>{
        setDisplayBre(breweries)
    },[breweries])
  
    function handleSearching(text){
        if(text === "") {
            setDisplayBre(breweries)
            return
        }

        const cloneBreweries = [...breweries]
        const searchList = cloneBreweries.filter(brewery => {
          for(const property in brewery ){
            if(brewery[property] && brewery[property].toLowerCase().includes(text.toLowerCase().toString())){
              return true;
            }
          } 

          return false;
        })
        
        setDisplayBre(searchList) 
    }
    
    return (
        <div>
            <Search onSearch={handleSearching} />
            <Container sx={{}}>
                <Grid container justifyContent="center" spacing={3} alignItems="stretch">
                    {displayBre.map(brewery => (
                        <Grid item key={brewery.id} xs={8} md={6} lg={4}>
                            <BreweryCard item={brewery}/>
                        </Grid> 
                    ))}
                </Grid>
            </Container>
        </div>
       
    )
}

export default BreweryList
