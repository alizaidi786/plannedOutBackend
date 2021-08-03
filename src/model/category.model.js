const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({

    name: Schema.Types.String,

    featuredImage: Schema.Types.String,
    featuredImageKey: Schema.Types.String,
    thumbnailImage : Schema.Types.String,

    communicatedcount:[{
        children: {type: Schema.Types.ObjectId, ref: 'childrens'},
        parentId:{type:Schema.Types.ObjectId,ref:'parents'},
        count: Schema.Types.Number,
        createdAt: Schema.Types.Date,
        updatedAt: Schema.Types.Date
    }],
    communicatedtotalcount:{type:Schema.Types.Number,default:0},

    likes: [{
        rating: {
            type: Schema.Types.Number,
            default: 0
        },
        feedback: {
            type: Schema.Types.String,
            default: ""
        },
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        },
        childId: {
            type: Schema.Types.ObjectId,
            ref: 'childrens'
        },
        entityId: {
            type: Schema.Types.ObjectId,
            ref: 'entities'
        },
        intentId: {
            type: Schema.Types.ObjectId,
            ref: 'intents'
        },
    }],

    imageSize: Schema.Types.String,

    likecount: {type: Schema.Types.Number, default: 0},

    disLikes: [{
        rating: {
            type: Schema.Types.Number,
            default: 0
        },
        feedback: {
            type: Schema.Types.String,
            default: ""
        },
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        },
        childId: {
            type: Schema.Types.ObjectId,
            ref: 'childrens'
        },
        entityId: {
            type: Schema.Types.ObjectId,
            ref: 'entities'
        },
        intentId: {
            type: Schema.Types.ObjectId,
            ref: 'intents'
        },
    }],

    clicks: [{
        clickTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        },
        childId: {
            type: Schema.Types.ObjectId,
            ref: 'childrens'
        },
        entityId: {
            type: Schema.Types.ObjectId,
            ref: 'entities'
        },
        intentId: {
            type: Schema.Types.ObjectId,
            ref: 'intents'
        },
    }],

    description: Schema.Types.String,
    type: {
        type: Schema.Types.String,
        enum: ['verticalCarousel', 'horizontalCarousel', 'stackCarousel', 'shortDescriptionWithStackCarousel', 'imageWithTitle', 'questionAndAnswer']
    },
    mandatoryThings: [{
        type: Schema.Types.String,
        enum: ['title', 'shortDesc', 'longDesc', 'image', 'audio', 'qna']
    }],
    isDeleted: {
        type: Schema.Types.Boolean,
        default: false
    },
    isDisplay: {
        type: Schema.Types.Boolean,
        default: true
    },
    deletedDate: Schema.Types.Date,
    deletedBy: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    isUpdated: {
        type: Schema.Types.Boolean,
        default: false
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    createdDate: Schema.Types.Date,
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
}, {timestamps: true});


let CategoryModel = mongoose.model('categories', CategorySchema);

module.exports = CategoryModel;