const express = require('express')
const router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')
const {getReviews, postReview, updateReview, deleteReview} = require('../controllers/reviewController')

//ensureAuth --> put back as second arg below for auth on route
router.get('/:isbn', getReviews)

router.post('/', ensureAuth, postReview)

router.put('/:id', updateReview)

router.delete('/:id', deleteReview)

module.exports = router