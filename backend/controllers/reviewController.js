const asyncHandler = require('express-async-handler')
const Review = require('../models/reviewModel')

// @desc    Get reviews
// @route   GET /api/reviews
// @access  Public
const getReviews = asyncHandler(async(req,res)=>{
    const reviews = await Review.find();
    res.status(200).json(reviews)
})

// @desc    post review
// @route   POST /api/reviews
// @access  Private
const postReview = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')

    }

    const review = await Review.create({
        text: req.body.text,
      })
    res.status(200).json(review)
})

// @desc    Update review
// @route   PUT /api/reviews
// @access  Private
const updateReview = asyncHandler(async(req,res)=>{
    //find current review
    const review = await Review.findById(req.params.id)

    if (!review) {
      res.status(400)
      throw new Error('Review not found')
    }
    
    //update current review with new text
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    //send new review back to client
    res.status(200).json(updatedReview)
})

// @desc    delete reviews
// @route   DELETE /api/reviews
// @access  Private
const deleteReview = asyncHandler(async(req,res)=>{

    //find current review
    const review = await Review.findById(req.params.id)

    if (!review) {
      res.status(400)
      throw new Error('Review not found')
    }
    
    await review.remove()

    res.status(200).json({ id: req.params.id })
})


module.exports = {
    getReviews,
    postReview,
    updateReview,
    deleteReview
}