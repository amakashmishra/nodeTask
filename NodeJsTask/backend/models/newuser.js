import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose'

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    emailToken: String,
    isVerified: Boolean,
    username: String,
    password: String,
    isAdmin: Boolean,
    refId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "referral",
    },
    walletId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "wallet",
    },
    plan: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "plan",
        }
    ]


})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

export default User;