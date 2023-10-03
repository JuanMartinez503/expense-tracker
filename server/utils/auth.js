const jwt = require('jsonwebtoken')

const secret = 'mysecret'
const expiration = '1h'

module.exports = {
    authMiddleware: function(req, res , next){
        let token = req.query.token || req.headers.authorization;

        if (req.headers.authorization){
            token= token.split(' ').pop().trim()
        }
        if (!token){
            return res.status(400).json({message:'you do not have a valid token'})
        }
        try {
            const {data}=jwt.verify(token,secret,{maxAge:expiration})
            req.user=data
        } catch(err)  {
            console.error('invalid token',err)
            return res.status(400).json({message:'invalid token'})
        }
        next()
    },
    signToken: function(username, email,_id){
        const payload = {username,email,_id}
        return jwt.sign({data:payload},secret, {expiresIn:expiration})
    }
}