const joi = require("joi")

const movieSchema = joi.object({
    title:joi.string().title().max(255).required(),
    director:joi.string().director().max(255).required(),
    year:joi.string().year().max(255).required(),
    color:joi.string().color().max(255).required(),
    duration:joi.string().duration().max(255).required(),
})

const validateMovie = (req, res, next) => {
    const {title, director, year, color, duration} = req.body


const {error} = userSchema.validate(
    {title, director, year, color, duration},
    {abortEarly:false}
)

if (error) {
    res.status(422).json({validationsErrors : error.details})
} else {
    next()
}
};

module.exports = {
    movieSchema,
    validateMovie,
}