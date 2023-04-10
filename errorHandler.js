const { mongoose } = require('mongoose')
const ErrorLog = require('./errorLog')

handleErr = (err, req, res, next) => {
    let status = 500
    if (err.pokeErrCode)
        status = err.pokeErrCode
    res.status(status)
    res.send(err.message)
    try {
        const errorLog = new ErrorLog({
            endpoint: req.url.split('?')[0],
            errorStatus: status,
            errorMessage: err.message
        })
        errorLog.save()
    } catch (err) {
        console.log("Error happening in logging error to db");
        console.log(err)
    }
    console.log("####################")
    console.log(err);
    console.log("####################")
}


module.exports = { handleErr }