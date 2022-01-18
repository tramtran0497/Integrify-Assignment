import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function BreweryDetail({breweries}) {
    const [brewery, setBrewery] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    function handleGoBack (){
        navigate("/")
    }

    useEffect(()=>{
        const foundBrewery = breweries.find(brewery => brewery.id === id)
        if(foundBrewery){
            setBrewery(foundBrewery)
        }
    },[])

    return (
        <div>
            <div>
                <h1>{brewery.name}</h1>
                <button onClick={handleGoBack}>Go Back</button>
            </div>
        </div>
    )
}

export default BreweryDetail
