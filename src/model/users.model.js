const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: Schema.Types.String,
    lastName: Schema.Types.String,
    mobileNumber: Schema.Types.String,
    facebookLink: Schema.Types.String,
    instagramLink: Schema.Types.String,
    linkedInLink: Schema.Types.String,
    quoraLink: Schema.Types.String,
    twitterLink: Schema.Types.String,
    websiteLink: Schema.Types.String,
    youtubeLink: Schema.Types.String,
    designation: Schema.Types.String,
    profilePhoto: Schema.Types.String,
    aboutYourSelf: Schema.Types.String,
    organization: Schema.Types.String,
    organizationLogo: Schema.Types.String,
    profileViewCount: Schema.Types.Number,
    address: Schema.Types.String,
    googlemaplink: Schema.Types.String,
    qualification: Schema.Types.String,
    whatsappNumber: Schema.Types.String,
    country: Schema.Types.String,
    documents: [
        {
            name: Schema.Types.String,
            url: Schema.Types.String
        }
    ],
    allowQna: Schema.Types.Boolean,
    isResource: Schema.Types.Boolean,
    disallow: [Schema.Types.String],
    skills: [
        {
            type: Schema.Types.ObjectId,
            ref: 'skills'
        }
    ],
    emailAddress: {
        type: Schema.Types.String,
        trim: true
    },
    profileImage: {
        type: Schema.Types.String,
        default: ""
    },
    profileParameters: [{
        key: Schema.Types.String,
        value: Schema.Types.String
    }],

    childList: [{
        type: Schema.Types.ObjectId,
        ref: 'childrens'
    }],

    isActive: {
        type: Schema.Types.Boolean,
        default: true
    },
    activationDate: Schema.Types.Date,
    activatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    userCode: {
        type: String,
        default: function () {
            var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
            var userCode = ""
            for (var i = 0; i < 8; i++)
                userCode += p.charAt(Math.floor(Math.random() * p.length));
            return userCode
        }
    },

    isInvited: {
        type: Schema.Types.Boolean,
        default: false,
    },
    acceptedInvitation: {
        type: Schema.Types.Boolean,
        default: false
    },
    managerAccess: [{
        categoryId: {
            type: Schema.Types.ObjectId,
            ref: 'categories'
        },
        accessLevel: [{
            type: Schema.Types.String,
            enum: ['read', 'write', 'delete']
        }],
    }],

    registeredDevices: [{
        isFirstTimeLogin: Schema.Types.Boolean,
        operatingSystem: {
            type: Schema.Types.String,
            enum: ['android', 'ios']
        },
        deviceId: Schema.Types.String,
        active: Schema.Types.Boolean,
        registeredDate: Schema.Types.Date
    }],

    credentialId: {
        type: Schema.Types.ObjectId,
        ref: 'credentials'
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
}, { timestamps: true });

let UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;

