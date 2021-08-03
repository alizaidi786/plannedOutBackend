const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WsImageSchema = new Schema({
    themeId: {
        type: Schema.Types.ObjectId,
        ref: "ws_themes"
    },
    titleId: {
        type: Schema.Types.ObjectId,
        ref: "ws_titles"
    },
    formatId: {
        type: Schema.Types.ObjectId,
        ref: "ws_title_formats"
    },
    focusKeyword: Schema.Types.String,
    bodyImageUrl: Schema.Types.String,
    guideline: Schema.Types.String,
    headerIns: Schema.Types.String,
    preferencesCategoryId: [{
        type: Schema.Types.ObjectId,
        ref: "preference_categories"
    }],
    subCategoryId: [{
        type: Schema.Types.ObjectId,
        ref: "sub_categories"
    }],

    learning: [Schema.Types.String],
    scheduleDate: Schema.Types.Date,
    isSchedule: Schema.Types.Boolean,
    printableTitle: Schema.Types.String,
    metaTitle: Schema.Types.String,
    metaDescription: Schema.Types.String,
    answerText: Schema.Types.String,
    answerImageUrl: Schema.Types.String,
    approxTime: Schema.Types.Number,
    fromAge: Schema.Types.Number,
    toAge: Schema.Types.Number,
    country: [Schema.Types.String],
    language: Schema.Types.String,
    grades: [{
        type: Schema.Types.ObjectId,
        ref: "ws_grades"
    }],
    
    hashTag: [Schema.Types.String],
    isOnWeb: Schema.Types.Boolean,
    beeRating: Schema.Types.Number,
    pinterestLink: Schema.Types.String,
    adminComment: Schema.Types.String,
    isActive: Schema.Types.Boolean,
    forBoy: Schema.Types.Boolean,
    forGirl: Schema.Types.Boolean,
    worksheetUrl: Schema.Types.String,
    isDeleted: {
        type: Schema.Types.Boolean,
        default: false
    },
}, {
    timestamps: true
})
let WsImageModel = mongoose.model('ws_images', WsImageSchema);
module.exports = WsImageModel;