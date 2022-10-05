import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import '../styles/SingleBookDisplay.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ReviewForm from '../components/ReviewForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faEdit } from '@fortawesome/free-regular-svg-icons'
import Review from '../components/Review'

const SingleBookDisplay = () => {
  const [reviews, setReviews] = useState([])
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)
  const [userId, setUserId] = useState('')
  const location = useLocation()
  const API_URL = '/api/reviews/'

  const postReview = async (text, isbn) => {
    const response = await axios.post(API_URL, { text, isbn })
    setReviews([...reviews, response.data])
  }

  const getReviews = async (isbn) => {
    const response = await axios.get(API_URL + isbn)
    setReviews(response.data)
  }

  const getUserStatus = async () => {
    const response = await axios.get('/auth/isloggedin')
    setUserIsLoggedIn(response.data.status)
    setUserId(response.data.id)
  }

  const deleteReview = async (reviewId) => {
    const response = await axios.delete(API_URL + reviewId)
    setReviews(reviews.filter((review) => (review._id !== response.data.id)))
  }

  const handleDeleteClick = (reviewId) => {
    deleteReview(reviewId)
  }

  const handleUpdateReview = async (reviewId, text) => {
    console.log(`updating review ${reviewId}`)
    const response = await axios.put(API_URL + reviewId, { text })

    setReviews(reviews.map((review) => {
      if (review._id == reviewId) {
        return response.data
      }
      else {
        return review
      }
    }))

  }

  useEffect(() => {
    getReviews(location.state.isbn)
    getUserStatus()
  }, [])

  const handleClick = (review) => {
    postReview(review, location.state.isbn)
  }

  return (

    <div className='singleBookPage'>
      <Title title='User Reviews' />
      <Navbar />
      <div className="picture-reviews-container">
        <img style={{ width: '300px', height: 'auto' }} src={location.state.coverImageURL}></img>
        <div className="reviews-container">
          {userIsLoggedIn ? <ReviewForm postReview={handleClick} /> :
            <div className='user-message'>
              Hello! You are on the user review page for "{location.state.title.toLowerCase()}", if you'd like to write a
              review for this book, login{'\u00A0'}
              <a href="/auth/google" style={{ textDecoration: 'underline' }}>here</a>
            </div>}
          {reviews.map((review, index) => (
            <Review handleDeleteClick={handleDeleteClick} review={review} handleUpdateReview={handleUpdateReview} userId={userId} />
          ))}
        </div>
      </div>
    </div>

  )
}

export default SingleBookDisplay