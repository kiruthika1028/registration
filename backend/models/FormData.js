const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    age: Number,
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    }
});

const FormDataModel = mongoose.model('trial-room', FormDataSchema);

module.exports = FormDataModel;

