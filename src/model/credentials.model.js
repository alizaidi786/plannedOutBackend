const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

const CredentialsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    emailAddress: Schema.Types.String,
    password: Schema.Types.String,
    isResource: Schema.Types.Boolean,
    allowQna: Schema.Types.Boolean,
    loginType: {
        type: Schema.Types.String,
        enum: ['email', 'mobile', 'facebook', 'google']
    },
    userRole: [{
        type: Schema.Types.String,
        enum: ['superAdmin', 'contentManager', 'prc', null, 'emp']
    }],

    loginToken: [{type: Schema.Types.String}],
    loginHistory : [{type : Schema.Types.Date}],
    logoutHistory : [{type : Schema.Types.Date}],
    socialToken: Schema.Types.String,
    socialID: Schema.Types.String,
    otherInfo: Schema.Types.String,
    mpin: Schema.Types.String,
    resetPasswordToken: Schema.Types.String,
    resetPasswordExpires: Schema.Types.String,
    sentOTP: Schema.Types.Number,
    isExpired: Schema.Types.Boolean,

    isPasswordChanged:{
        type: Schema.Types.Boolean,
        default: false
    },
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

    data: Schema.Types.String,
    secretKey: Schema.Types.String,

}, {timestamps: true});

CredentialsSchema.statics.generateAuthToken = async (user) => {
    const randomString = Array(10).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")
        .map(x =>
            x[Math.floor(Math.random() * x.length)]
        )
        .join('');
    const token = jwt.sign({_id: randomString}, 'ParentBotJWT').toString();
    user.loginToken.push(token);
    user.loginHistory.push(new Date());
    return await user.save().then(() => {
        return token;
    });

};

CredentialsSchema.statics.generateResetPasswordToken = async (user) => {
    const randomString = Array(10).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")
        .map(x =>
            x[Math.floor(Math.random() * x.length)]
        )
        .join('');
    const token = jwt.sign({_id: randomString}, 'ParentBotJWT').toString();
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

CredentialsSchema.statics.removeToken = async (user, token) => {
    user.loginToken = user.loginToken.filter(d => d !== token);
    user.logoutHistory.push(new Date())
    return await user.save();
};

CredentialsSchema.statics.removeOTP = async (user) => {
    user.sentOTP = undefined;
    return await user.save();
};

CredentialsSchema.statics.removeResetPasswordToken = async (user, password) => {
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    return await user.save();
};

CredentialsSchema.statics.changePassword = async (user, newPassword) => {
    user.password = newPassword;
    user.isPasswordChanged = true;
    return await user.save();
};

let CredentialsModel = mongoose.model('credentials', CredentialsSchema);

module.exports = CredentialsModel;

