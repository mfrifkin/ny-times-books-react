import React from 'react'
import { useParams } from 'react-router-dom'
const SingleGenreDisplay = () => {

    const {genre} = useParams();
    return (
        <div>{genre}</div>
    )
}

export default SingleGenreDisplay