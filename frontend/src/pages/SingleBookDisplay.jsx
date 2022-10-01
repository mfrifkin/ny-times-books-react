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

  const getUserStatus = async () => {
    const response = await axios.get('http://localhost:5000/auth/isloggedin')
    console.log(response.data)
    setUserIsLoggedIn(response.data.status)
    setUserId(response.data.id)

  }

  const deleteReview = async (reviewId) => {
    const response = await axios.delete(API_URL + reviewId)
    console.log(response.data)
    setReviews(reviews.filter((review) => (review._id !== response.data.id)))
  }

  const handleDeleteClick = (reviewId) => {
    console.log(`deleting review ${reviewId}`)
    deleteReview(reviewId)
  }

  const handleEditClick = (reviewId) => {
    console.log(`editing review ${reviewId}`)
    
  }
  const handleUpdateReview = (reviewId) => {
    console.log(`updating review ${reviewId}`)
   
  }
  
  useEffect(() => {
    getReviews(location.state.isbn)
    getUserStatus()
  }, [])

  const handleClick = (review) => {
    console.log(typeof (location.state.isbn))
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
            // <div className='review' key={index}>
            //   <img className='user-image' src={review.user.image} referrerPolicy="no-referrer"></img>
            //   <div className='name-and-review'>
            //     <div className='userName'>{review.user.displayName}</div>
            //     <div className='reviewText'>{review.text}</div>
            //   </div>
            //   {/* {userId == review.user._id && */}
            //     <div className="edit-delete-btns-container">
            //       <FontAwesomeIcon
            //         icon={faTrashCan}
            //         className='delete-button'
            //         onClick={() => handleDeleteClick(review._id)}
            //       />
            //       <FontAwesomeIcon
            //         icon={faEdit}
            //         className='edit-button'
            //         onClick={() => handleEditClick(review._id)}
            //       />
            //     </div>
            //   {/* } */}
            // </div>
            <Review handleDeleteClick={handleDeleteClick} review={review} handleUpdateReview={handleUpdateReview}/>

          ))}
        </div>
      </div>
    </div>

  )
}

export default SingleBookDisplay