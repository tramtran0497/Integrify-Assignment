import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardHeader } from '@mui/material'
import Button from '@mui/material/Button'

function BreweryDetail({breweries}) {
    const [brewery, setBrewery] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
  
    function handleGoBack (){
        navigate("/")
    }

    useEffect(()=>{
        const cloneBreweries = [...breweries]
        const foundBrewery = cloneBreweries.find(brewery => brewery.id === id)
        if(foundBrewery){
            setBrewery(foundBrewery)
        }
    },[breweries])

    return (
        <div style={{display: 'flex', justifyContent: 'center', width: '100vw', height: '100vh', alignItems: 'center',}}>
            <Card elevation={3} sx={{display: 'flex', flexDirection: "column", width: '55%', height:'50%',}}>
                <CardHeader
                    title={brewery.name}
                    sx={{textAlign: 'center'}}
                />
                <CardContent sx={{pl:5}}>
                    <Typography sx={{fontSize: '1.15rem'}} color="text.secondary" >
                        <span style={{fontWeight: 'bold'}}>Type:</span> {brewery.brewery_type}
                    </Typography>
                    <Typography sx={{fontSize: '1.15rem'}} color="text.secondary" >
                        <span style={{fontWeight: 'bold'}}>Address:</span> {brewery.street}
                    </Typography>
                    <Typography sx={{fontSize: '1.15rem'}} color="text.secondary">
                        <span style={{fontWeight: 'bold'}}>City:</span> {brewery.city}  
                    </Typography>
                    <Typography sx={{fontSize: '1.15rem'}} color="text.secondary">
                        <span style={{fontWeight: 'bold'}}>State:</span> {brewery.state} 
                    </Typography>
                    <Typography sx={{fontSize: '1.15rem'}} color="text.secondary" >
                        <span style={{fontWeight: 'bold'}}>Country:</span>{brewery.country}
                    </Typography>
                    <Typography sx={{fontSize: '1.15rem'}} color="text.secondary" >
                        <span style={{fontWeight: 'bold'}}>Postal Code:</span> {brewery.postal_code}
                    </Typography>    
                </CardContent>
                <CardActions>
                    <Button variant="contained" sx={{ml: 'calc(50% - 99px/2)'}} onClick={handleGoBack} >
                        Go Back
                    </Button>
                </CardActions>
            </Card>
        </div>
         
    )
}

export default BreweryDetail
