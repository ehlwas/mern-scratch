const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sampleSchema = new Schema({
    sampleOne: {
        type: String,
        trim: true,
        required: true
    },
    sampleTwo: {
        type: Number,
        required: true
    },
    // Array Relationship
    sampleThree: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sample',
    }],
    // One Relationship
    sampleFour: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sample',
    }
}, { timestamps: true })

module.exports = mongoose.model('Sample', sampleSchema)