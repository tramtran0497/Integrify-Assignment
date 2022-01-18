import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardHeader } from '@mui/material'
import LocationCityIcon from '@mui/icons-material/LocationCity'

function BreweryCard({item}) {
    return (
        <Card elevation={3} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
            <CardHeader
                title={item.name}
                sx={{ textAlign: 'center', py: 0, mt: 2,}}
            />
            <CardContent sx={{p:0.5, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography sx={{display: 'flex', alignItems: 'center', p: 0.5}} color="text.secondary">
                    <LocationCityIcon sx={{m: 1, color: '#000814'}}/> {item.city} City
                </Typography>
                <Typography sx={{}} color="text.secondary" >
                    Type: {item.brewery_type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" sx={{mb: 2, py: 1}}>
                    <Link to={`/${item.id}`} style={{color: 'white',textDecoration: 'none'}}>View Brewery</Link>
                </Button>
            </CardActions>
        </Card> 
    )
}

export default BreweryCard
