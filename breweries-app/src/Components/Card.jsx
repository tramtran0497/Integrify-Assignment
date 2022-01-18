import React from 'react'
import {Link} from 'react-router-dom'

function Card({item}) {
    return (
        <div>
            <h1>{item.name}</h1>
            <button><Link to={`/${item.id}`}>View</Link></button>
        </div>
    )
}

export default Card
