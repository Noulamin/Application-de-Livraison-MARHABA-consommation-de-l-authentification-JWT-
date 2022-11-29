const expressJWT = require('express-jwt')
// verify if token existe
exports.requireSignin = expressJWT({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
    userProperty: 'auth'
})
//verify si user est autorisé
exports.isAuth = (req, res, next) => {
    if(req.auth.role == 'manager')
        return next()
    let user = req.profil && req.auth && (req.profil._id == req.auth._id)
    if(!user)
        return res.status(403).json({
            error: 'Access denied'
        })
    next()
}