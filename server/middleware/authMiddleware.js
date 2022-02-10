const tokenService = require('../service/tokenService')

module.exports = function (req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization
        if(!authorizationHeader) {
            throw new Error('Unauthorized Error')
        }

        const accessToken = authorizationHeader.split(' ')[1]
        if(!accessToken) {
            throw new Error('Unauthorized Error')
        }

        const userData = tokenService.validateAccessToken(accessToken)
        if(!userData) {
            throw new Error('Unauthorized Error')
        }

        req.user = userData
        next()
    }catch (error) {
        console.log(error)
    }
}