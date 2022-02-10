
module.exports = function(...roles) {
    return function (req, res, next) {
        if(!roles.includes(req.user.role)) {
            throw new Error('not role ')
        }
        next()
    }
}
