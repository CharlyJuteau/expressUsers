const joi = require("joi")

const userSchema = joi.object({
    email:joi.string().email().max(255).required(),
    fistname:joi.string().firstname().max(255).required(),
    lastname:joi.string().lastname().max(255).required(),
    city:joi.string().city().max(255).required(),
    language:joi.string().language().max(255).required(),
})

const validateUser = (req, res, next) => {
    const {email, fistname, lastname, city, language} = req.body


const {error} = userSchema.validate(
    {email, fistname, lastname, city, language},
    {abortEarly:false}
)

if (error) {
    res.status(422).json({validationsErrors : error.details})
} else {
    next()
}
};

module.exports = {
    userSchema,
    validateUser,
}