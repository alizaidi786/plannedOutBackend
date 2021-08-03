const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentSchema = new Schema({
    title: Schema.Types.String,
    shortDescription: Schema.Types.String,
    longDescription: Schema.Types.String,

    imageURL: Schema.Types.String,
    imageKey: Schema.Types.String,
    audioURL: Schema.Types.String,
    videoURL: Schema.Types.String,
    urlCode : Schema.Types.String,
    hashTags: [Schema.Types.String],
    pinterestURL: Schema.Types.String,
    productURL : Schema.Types.String,
    audioKey: Schema.Types.String,
    audioSize : Schema.Types.String,
    audioLength : Schema.Types.String,
    metaTitle : Schema.Types.String,
    metaDescription: Schema.Types.String,
    focusKeyword: Schema.Types.String,
    listenCount : {type:Schema.Types.Number, default : 0},
    shareCount : {type:Schema.Types.Number, default : 0},
    
    
    question: Schema.Types.String,
    answer: Schema.Types.String,

    contentCategory: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    },
    entityCategory: [{
        type: Schema.Types.ObjectId,
        ref: 'entity_categories'
    }],
    entityType: [{
        type: Schema.Types.ObjectId,
        ref: 'entity_types'
    }],
    entities: [{
        type: Schema.Types.ObjectId,
        ref: 'entities'
    }],
    worksheetId: {
        type: Schema.Types.ObjectId,
        ref: 'worksheets'
    },

    communicatedcount:[{
        children: {type: Schema.Types.ObjectId, ref: 'childrens'},
        parentId:{type:Schema.Types.ObjectId,ref:'parents'},
        count: Schema.Types.Number,
        createdAt: Schema.Types.Date,
        updatedAt: Schema.Types.Date
    }],
    audioListens : [{
        listenTime: Schema.Types.Date,
        childId: {
            type: Schema.Types.ObjectId,
            ref: 'childrens'
        },
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        }
    }],
    contentShare : [{
        shareTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        },
        medium : Schema.Types.String
    }],
    productClickCount : {type:Schema.Types.Number,default:0},
    productClick : [{
        clickTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        }
    }],

    printClickCount : {type:Schema.Types.Number,default:0},
    printClick : [{
        clickTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        }
    }],

    downloadClickCount : {type:Schema.Types.Number,default:0},
    downloadClick : [{
        clickTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        }
    }],

    textToSpeechClickCount : {type:Schema.Types.Number,default:0},
    textToSpeechClick : [{
        clickTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        }
    }],

    translatedLongDescription : [{
        _id : Schema.Types.ObjectId,
        language : Schema.Types.String,
        longDescription : Schema.Types.String
    }],

    videoClickCount : {type:Schema.Types.Number,default:0},
    videoClick : [{
        clickTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        }
    }],

    youtubeRedirectClickCount : {type:Schema.Types.Number,default:0},
    youtubeRedirectClick : [{
        clickTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        }
    }],

    imageInfoClickCount : {type:Schema.Types.Number,default:0},
    imageInfoClick : [{
        clickTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        }
    }],

    pinterestUrlClickCount : {type:Schema.Types.Number,default:0},
    pinterestUrlClick : [{
        clickTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        }
    }],

    translateClickCount : {type:Schema.Types.Number,default:0},
    translateClick : [{
        clickTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        },
        targetLanguage : Schema.Types.String
    }],

    audioDownloadClickCount : {type:Schema.Types.Number,default:0},
    audioDownloadClick : [{
        clickTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        },
    }],


    listenCountGuest : {type:Schema.Types.Number, default : 0},
    shareCountGuest : {type:Schema.Types.Number, default : 0},
    
    audioListensGuest : [{
        listenTime: Schema.Types.Date,
        childId: {
            type: Schema.Types.ObjectId,
            ref: 'childrens'
        },
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        }
    }],
    contentShareGuest : [{
        shareTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        },
        medium : Schema.Types.String
    }],
    productClickCountGuest : {type:Schema.Types.Number,default:0},
    productClickGuest : [{
        clickTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        }
    }],

    printClickCountGuest : {type:Schema.Types.Number,default:0},
    printClickGuest : [{
        clickTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        }
    }],

    downloadClickCountGuest : {type:Schema.Types.Number,default:0},
    downloadClickGuest : [{
        clickTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        }
    }],

    textToSpeechClickCountGuest : {type:Schema.Types.Number,default:0},
    textToSpeechClickGuest : [{
        clickTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        }
    }],


    videoClickCountGuest : {type:Schema.Types.Number,default:0},
    videoClickGuest : [{
        clickTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        }
    }],

    pinterestUrlClickCountGuest : {type:Schema.Types.Number,default:0},
    pinterestUrlClickGuest : [{
        clickTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        }
    }],


    youtubeRedirectClickCountGuest : {type:Schema.Types.Number,default:0},
    youtubeRedirectClickGuest : [{
        clickTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        }
    }],

    translateClickCountGuest : {type:Schema.Types.Number,default:0},
    translateClickGuest : [{
        clickTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        },
        targetLanguage : Schema.Types.String
    }],

    audioDownloadClickCountGuest : {type:Schema.Types.Number,default:0},
    audioDownloadClickGuest : [{
        clickTime: Schema.Types.Date,
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'parents'
        },
    }],


    communicatedtotalcount:{type:Schema.Types.Number,default:0},

    comment: Schema.Types.String,

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
        createdAt: Schema.Types.Date,
        updatedAt: Schema.Types.Date
    }],

    likecount: {type: Schema.Types.Number, default: 0},
    ownCreation : {
        type: Schema.Types.Boolean,
        default: true
    },
    disLikes: [{
        rating: {
            type: Schema.Types.Number,
            default: 0
        },
        isAttended: {
            type: Schema.Types.Boolean,
            default: false
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
        recordedAudio:{
            type: Schema.Types.String,
            default: null
        },
        createdAt: Schema.Types.Date,
        updatedAt: Schema.Types.Date
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

    minutesToRead: Schema.Types.Number,

    fromAge: Schema.Types.Number,
    toAge: Schema.Types.Number,
    language: Schema.Types.String,
    adminRatings: Schema.Types.Number,

    authorName: [{
        type: Schema.Types.ObjectId,
        ref: 'contributors'
    },],


    authorNames: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },],

    isActive: {
        type: Schema.Types.Boolean,
        default: true
    },
    isDeleted: {
        type: Schema.Types.Boolean,
        default: false
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

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
}, {timestamps: true});


let ContentModel = mongoose.model('contents', ContentSchema);

module.exports = ContentModel;

