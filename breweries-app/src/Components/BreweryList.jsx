import React from 'react';
import BreweryCard from './BreweryCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


function BreweryList({breweries}) {
    return (
        <Container sx={{}}>
            <Grid container justifyContent="center" spacing={3} alignItems="stretch">
                {breweries.map(brewery => (
                    <Grid item key={brewery.id} xs={8} md={6} lg={4}>
                        <BreweryCard item={brewery}/>
                    </Grid> 
                ))}
            </Grid>
        </Container>
    )
}

export default BreweryList
