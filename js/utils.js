/* // kod för hashning av lösen, ej samma som login.js
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const  JWT_SECRET = 'my-first-pet'


//hasha användaren lösen på åtta tecken
module.exports.hashPassword = (password) => {
    const hashValue = bcrypt.hashSync(password, 8)
    return hashValue
}

//jämför hash och lösen
module.exports.comparePassword = (password, hash) => {
    const correct = bcrypt.compareSync(password, hash)
    return correct
}


module.exports.getJWTToken = (account) => {
    const userData = {userId: account.id, username: account.usernam}
    const accessToken = jwt.sign(userData, JWT_SECRET)
    return accessToken
}

// Verifiering
module.exports.verifyJWT = (token) => {
    return jwt.verify(token, JWT_SECRET)
}

// Decode
module.exports.decodeJWT = (token) => {
    return jwt.decode(token, JWT_SECRET)
} */