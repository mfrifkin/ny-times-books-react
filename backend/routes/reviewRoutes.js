const express = require('express')
const router = express.Router()
const {getReviews, postReview, updateReview, deleteReview} = require('../controllers/reviewController')

router.get('/', getReviews)

router.post('/', postReview)

router.put('/:id', updateReview)

router.delete('/:id', deleteReview)

module.exports = router