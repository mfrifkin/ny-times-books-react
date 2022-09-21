import { useLocation } from 'react-router-dom'
import '../styles/SingleBookDisplay.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ReviewForm from '../components/ReviewForm'
const SingleBookDisplay = () => {
  const [reviews, setReviews] = useState([])

  const location = useLocation()
  const API_URL = 'http://localhost:5000/api/reviews/'

  const postReview = async (text, isbn) => {
    const response = await axios.post(API_URL, { text, isbn })
    console.log(response.data)
    setReviews([...reviews, response.data])
  }

  const getReviews = async (isbn) => {
    const response = await axios.get(API_URL + isbn)
    console.log(response.data)
    setReviews(response.data)
  }

  useEffect(() => {
    getReviews(location.state.isbn)

  }, [])

  const handleClick = (review) => {
    console.log(typeof (location.state.isbn))
    postReview(review, location.state.isbn)
  }

  return (

    <div className=''>
      <img style={{ width: '300px', height: 'auto' }} src={location.state.coverImageURL}></img>
      <ReviewForm postReview={handleClick} />
      {reviews.map((review, index) => (
        <div className='review' key={index}>
          <img className='user-image' src={review.user.image} referrerPolicy="no-referrer"></img>
          <div className='name-and-review'>
            <div>{review.user.displayName}</div>
            <div>{review.text}</div>
          </div>
        </div>

      ))}
    </div>

  )
}

export default SingleBookDisplay