const asyncHandler = require('express-async-handler')

// @desc    Get reviews
// @route   GET /api/reviews
// @access  Public
const getReviews = asyncHandler(async(req,res)=>{
    res.status(200).json({message:'get review'})
})

// @desc    post review
// @route   POST /api/reviews
// @access  Private
const postReview = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')

    }
    res.status(200).json({message:'post review'})
})

// @desc    Update review
// @route   PUT /api/reviews
// @access  Private
const updateReview = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`update review ${req.params.id}`})
})

// @desc    delete reviews
// @route   DELETE /api/reviews
// @access  Private
const deleteReview = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`delete review ${req.params.id}`})
})


module.exports = {
    getReviews,
    postReview,
    updateReview,
    deleteReview
}