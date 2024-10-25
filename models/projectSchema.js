const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    projectMembers: {
        type: String,
        required: true,
    },
    memberRollno: {
        type: String,
        required: true
    },
    imagesPath: {
        type: Array,
    },
    problemStatement: {
        type: String,
    },
    benefits: {
        type: String,
        required: true
    },
}, { timestamps: true });


const ProjectSchema = mongoose.model("ProjectSchema", projectSchema);
module.exports = {
    ProjectSchema,
}
