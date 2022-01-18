import React from 'react'
import Card from './Card'

function BreweryList({breweries}) {
    return (
        <div>
            {breweries.map(brewery => <Card key={brewery.id} item={brewery}/>)}
        </div>
    )
}

export default BreweryList
