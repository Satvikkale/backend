const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    image2: {
        type: String,
        default: ''
    },
    image3: {
        type: String,
        default: ''
    },
    status: {
        type: Boolean,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    facilities: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    }
});

roomSchema.methods.updateStatus = function(newStatus) {
    this.status = newStatus;
    return this.save();
};

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
