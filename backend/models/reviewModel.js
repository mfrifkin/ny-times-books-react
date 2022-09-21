const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema(
    {   
        text: {
            type: String,
            required: [true, 'Please add a text value'],
        },
        isbn: {
            type: String,
            required: [true, 'Please add an isbn, with love, your db'],
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            default: Date.now,
          },

    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Review', reviewSchema)