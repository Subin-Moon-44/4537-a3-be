const { mongoose } = require('mongoose')
const RequestLog = require('./requestLog')
const User = require('./src/models/user.js')

handleReq = (req, res, next) => {
    try {
        next()
        User.findOne({ appid: req.query.appid }).then((user) => {
            if (user) {
                const requestLog = new RequestLog({
                    username: user.username,
                    endpoint: req.url.split('?')[0],
                })
                requestLog.save()
            }
        })
    } catch (err) {
        console.log("Error happening in logging to db");
        console.log(err)
    }
}


module.exports = { handleReq }