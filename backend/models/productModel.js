import mongoose from 'mongoose'

// const reviewSchema = mongoose.Schema({
//     name: { type: String, required: true },
//     rating: { type: Number, required: true },
//     comment: { type: String, required: true },
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: 'User',
//     },
// }, {
//     timestamps: true,
// })

const matchSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    city: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    TeamA: {
        type: String,
        required: true,
    },
    TeamB: {
        type: String,
        required: true,
    },
    // description: {
    //     type: String,
    //     required: true,
    // },
    // reviews: [reviewSchema],
    // rating: {
    //     type: Number,
    //     required: true,
    //     default: 0,
    // },
    // numReviews: {
    //     type: Number,
    //     required: true,
    //     default: 0,
    // },
    // price: {
    //     type: Number,
    //     required: true,
    //     default: 0,
    // },
    // countInStock: {
    //     type: Number,
    //     required: true,
    //     default: 0,
    // },
}, {
    timestamps: true,
})

const Match = mongoose.model('Match', matchSchema)

export default Match