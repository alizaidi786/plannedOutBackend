const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChildSchema = new Schema({
    childName: Schema.Types.String,
    childBirthDate: Schema.Types.Date,

    profileParameters: [{
        paramId: {
            type: Schema.Types.ObjectId,
            ref: 'child_parameters'
        },
        value: Schema.Types.Mixed
    }],

    conversationId: {
        type: Schema.Types.String,
        default:  null
    },

    parentId: {
        type: Schema.Types.ObjectId,
        ref: 'parents'
    },

    relationWithParent: {
        type: Schema.Types.String
    },

    isDeleted: {
        type: Schema.Types.Boolean,
        default: false
    },
    deletedDate: Schema.Types.Date,
    deletedBy: {
        type: Schema.Types.ObjectId,
        ref: 'parents'
    },

    favouriteMessages:[Schema.Types.String],

    favouriteContent:[{
            type: Schema.Types.ObjectId,
            ref: 'contents'
        }],

    isUpdated: {
        type: Schema.Types.Boolean,
        default: false
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'parents'
    },

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'parents'
    },
}, {timestamps: true});


let ChildModel = mongoose.model('childrens', ChildSchema);

module.exports = ChildModel;

