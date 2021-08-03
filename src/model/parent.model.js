const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const ParentSchema = new Schema({
    parentName: Schema.Types.String,
    mobileNumber: Schema.Types.String,
    categoryClick: [
        {
            categoryId: { type: Schema.Types.ObjectId, ref: 'categories' },
            count: Schema.Types.Number
        }
    ],
    appDownloadClick: Schema.Types.Number,
    facebookClick: {
        web: {
            type: Schema.Types.Number,
            default: null
        },
        app: {
            type: Schema.Types.Number,
            default: null
        }
    },
    profileManagerClick: {
        web: {
            type: Schema.Types.Number,
            default: null
        },
        app: {
            type: Schema.Types.Number,
            default: null
        }
    },
    beeKnowsClick: {
        type: Schema.Types.Number,
        default: null
    },
    starredMessagesClick: {
        type: Schema.Types.Number,
        default: null
    },
    registeredType: {
        type: Schema.Types.String,
        enum: ['android', 'ios', 'web']
    },
    contactFeedbackClick: {
        web: {
            type: Schema.Types.Number,
            default: null
        },
        app: {
            type: Schema.Types.Number,
            default: null
        }
    },
    aboutUsClick: {
        web: {
            type: Schema.Types.Number,
            default: null
        },
        app: {
            type: Schema.Types.Number,
            default: null
        }
    },
    rateUsClick: {
        web: {
            type: Schema.Types.Number,
            default: null
        },
        app: {
            type: Schema.Types.Number,
            default: null
        }
    },
    clearChatClick: {
        type: Schema.Types.Number,
        default: null
    },
    beeLogoClick: {
        type: Schema.Types.Number,
        default: null
    },
    searchIconClick: {
        type: Schema.Types.Number,
        default: null
    },
    notificationBellClick: {
        web: {
            type: Schema.Types.Number,
            default: null
        },
        app: {
            type: Schema.Types.Number,
            default: null
        }
    },
    socialUserId: {
        type: Schema.Types.String,
        default: null
    },
    pinterestClick: {
        web: {
            type: Schema.Types.Number,
            default: null
        },
        app: {
            type: Schema.Types.Number,
            default: null
        }
    },
    favoriteClick: [
        {
            clickCount: {
                type: Schema.Types.Number,
                default: null
            },
            contentCategoryId: {
                type: Schema.Types.ObjectId,
                ref: 'categories'
            },
        }
    ],

    favoriteTextClick: {
        type: Schema.Types.Number,
        default: null
    },
    instagramClick: {
        web: {
            type: Schema.Types.Number,
            default: null
        },
        app: {
            type: Schema.Types.Number,
            default: null
        }
    },
    youtubeClick: {
        web: {
            type: Schema.Types.Number,
            default: null
        },
        app: {
            type: Schema.Types.Number,
            default: null
        }
    },
    twitterClick: {
        web: {
            type: Schema.Types.Number,
            default: null
        },
        app: {
            type: Schema.Types.Number,
            default: null
        }
    },
    appShareClick: {
        type: Schema.Types.Number,
        default: null
    },
    logoutClick: {
        web: {
            type: Schema.Types.Number,
            default: null
        },
        app: {
            type: Schema.Types.Number,
            default: null
        }
    },
    parentBirthDate: {
        type: Schema.Types.Date,
        default: null
    },
    emailAddress: {
        type: Schema.Types.String,
        trim: true
    },
    password: Schema.Types.String,

    profileImage: {
        type: Schema.Types.String,
        default: ""
    },
    profileParameters: [{
        paramId: {
            type: Schema.Types.ObjectId,
            ref: 'parent_parameters'
        },
        value: Schema.Types.Mixed
    }],

    childList: [{
        type: Schema.Types.ObjectId,
        ref: 'childrens'
    }],
    breadCrumbClick: {
        type: Schema.Types.Number,
        default: 0
    },
    suggestionClick: {
        web: {
            type: Schema.Types.Number,
            default: 0
        },
        app: {
            type: Schema.Types.Number,
            default: 0
        }
    },
    appOpenCount: {
        type: Schema.Types.Number,
        default: 0
    },
    webOpenCount: {
        type: Schema.Types.Number,
        default: 0
    },
    lastAppOpenDate: [{
        type: Schema.Types.Date
    }],
    settings: {
        allNotifications: {
            type: Schema.Types.Boolean,
            default: true
        },
        mostImportantNotifications: {
            type: Schema.Types.Boolean,
            default: false
        },
        silentNotifications: {
            type: Schema.Types.Boolean,
            default: false
        },
        extra: Schema.Types.Mixed
    },

    locationInfo: {
        state: Schema.Types.String,
        city: Schema.Types.String,
        country: Schema.Types.String,
        latitude: Schema.Types.String,
        longitude: Schema.Types.String,
        timeZone: Schema.Types.String,
    },

    registeredDevices: [{
        // isFirstTimeLogin: Schema.Types.Boolean,
        operatingSystem: {
            type: Schema.Types.String,
            enum: ['android', 'ios', 'web']
        },
        deviceId: Schema.Types.String,
        notificationExpoId: Schema.Types.String,
        active: Schema.Types.Boolean,
        registeredDate: Schema.Types.Date
    }],

    notificationList: [
        {
            isRead: {
                type: Schema.Types.Boolean,
                default: false
            },
            isDeleted: {
                type: Schema.Types.Boolean,
                default: false
            },
            notificationTime: {
                type: Schema.Types.Date
            },
            isContentMapped: {
                type: Schema.Types.Boolean,
                default: false
            },
            contentIdList: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'contents'
                }
            ],
            notificationId: {
                type: Schema.Types.ObjectId,
                ref: 'notifications'
            },
        }
    ],

    isActive: {
        type: Schema.Types.Boolean,
        default: true
    },

    loginType: [{
        type: Schema.Types.String,
        enum: ['email', 'mobile', 'facebook', 'google', 'apple']
    }],

    loginToken: [{ type: Schema.Types.String }],

    socialId: Schema.Types.String,
    otherInfo: Schema.Types.String,

    resetPasswordToken: Schema.Types.String,
    resetPasswordExpires: Schema.Types.String,
    sentOTP: Schema.Types.Number,
    otpExpireTime: Schema.Types.Date,
    isVerifiedOTP: {
        type: Schema.Types.Boolean,
        default: false
    },
    isExpired: Schema.Types.Boolean,

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
    createdAt: Schema.Types.Date,
}, { timestamps: true });


ParentSchema.statics.generateAuthToken = async (user, locationInfo, registeredDevices) => {
    const randomString = Array(10).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")
        .map(x =>
            x[Math.floor(Math.random() * x.length)]
        )
        .join('');
    const token = jwt.sign({ _id: randomString }, 'ParentBotJWT').toString();
    user.loginToken.push(token);
    if (registeredDevices) {
        /*let newRegisteredDevices = [...user.registeredDevices];
        let alreadyIndex = newRegisteredDevices.findIndex(
            device => device.notificationExpoId === registeredDevices[0].notificationExpoId
        );
        if (alreadyIndex !== -1) {
            newRegisteredDevices[alreadyIndex] = registeredDevices
        } else {
            newRegisteredDevices = newRegisteredDevices.concat(registeredDevices);
        }
        console.log(newRegisteredDevices)*/
        user.locationInfo = locationInfo
        if (registeredDevices[0].operatingSystem != "web") {
            user.registeredDevices = registeredDevices//newRegisteredDevices;
        }
    }
    return await user.save().then(() => {
        return token;
    })
        .catch(e => {
            console.log(e)
        });
};

ParentSchema.statics.removeToken = async (user, token) => {
    user.loginToken = user.loginToken.filter(d => d !== token);
    return await user.save();
};

ParentSchema.statics.removeOTP = async (user) => {
    user.sentOTP = undefined;
    user.otpExpireTime = undefined;
    user.isVerifiedOTP = true;
    return await user.save();
};

ParentSchema.statics.generateResetPasswordToken = async (user) => {
    const randomString = Array(10).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")
        .map(x =>
            x[Math.floor(Math.random() * x.length)]
        )
        .join('');
    const token = jwt.sign({ _id: randomString }, 'ParentBotJWT').toString();
    const otp = Math.floor(Math.random() * 8999 + 1000);
    user.sentOTP = otp;
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000;
    return await user.save().then(() => {
        return {
            resetPasswordToken: token,
            sentOTP: otp
        };
    });

};

ParentSchema.statics.sendOTP = async (user) => {
    const sentOTP = Math.floor(Math.random() * 8999 + 1000);
    const otpExpireTime = new Date(new Date().getTime() + 900000).toISOString();

    user.sentOTP = sentOTP;
    user.otpExpireTime = otpExpireTime;

    return await user.save();
};

ParentSchema.statics.removeResetPasswordToken = async (user, password) => {
    user.password = bcrypt.hashSync(password, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    return await user.save();
};

ParentSchema.statics.changePassword = async (user, password) => {
    user.password = bcrypt.hashSync(password, 10);
    return await user.save();
};

let ParentModel = mongoose.model('parents', ParentSchema);

module.exports = ParentModel;
