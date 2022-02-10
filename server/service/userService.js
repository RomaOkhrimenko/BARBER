const UserModel = require('../model/userModel')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const tokenService = require('./tokenService')
const mailService = require('./mailService')
const UserDto = require('../dtos/userDto')
const ApiError = require('../exception/apiError')

class UserService {

    async registration(email, password) {
        const candidate = await UserModel.findOne({email})

        if(candidate) {
            throw ApiError.BadRequest(`User is already exist with this email: ${email}`)
        }

        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()

        const user = await UserModel.create({email, password: hashPassword, activationLink})
        await mailService.sendActivationMail(email, `${process.env.API_URL}/barber/activate/${activationLink}`)

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }
    }

    async activate(activationLink) {
        try {
            const user = await UserModel.findOne({activationLink})
            if(!user) {
                throw ApiError.BadRequest("Incorrect Link activated")
            }
            user.isActivated = true
            await user.save()
        }catch (error) {
            console.log(error)
        }
    }

    async login(email, password) {
        const user = await UserModel.findOne({email})
        if(!user) {
            throw ApiError.BadRequest('Incorrect email or password')
        }
        const isPassEquals = await bcrypt.compare(password, user.password)
        if(!isPassEquals) {
            throw ApiError.BadRequest('incorrect password')
        }
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken) {
        if(!refreshToken) {
            throw ApiError.UnauthorizedError('dont authorized')
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if(!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError('Unauthorized error')
        }
        const user = await UserModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto }
    }

    async getAllUsers() {
        const users = await UserModel.find()
        return users
    }

}

module.exports = new UserService()