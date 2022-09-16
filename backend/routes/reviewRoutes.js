const express = require('express')
const router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')
const {getReviews, postReview, updateReview, deleteReview} = require('../controllers/reviewController')

router.get('/', ensureAuth, getReviews)

router.post('/', postReview)

router.put('/:id', updateReview)

router.delete('/:id', deleteReview)

module.exports = router