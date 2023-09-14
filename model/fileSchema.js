const mongoose = require('mongoose');

// Creating a schema for uploaded files
const fileSchema = new mongoose.schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    name:{
        type: String,
        required:[true,"Uploaded file must have a name"]
    },
});

//Creating a model from that Schema
const File = mongoose.model("File", fileSchema);

module.exports = File;