var userSchema = mongoose.Schema({

    twitter          : {
        id           : String,
        token        : String,
        tokenSECRET  : String,
        displayName  : String,
        username     : String
    },
});
module.exports = mongoose.model('User', userSchema)
