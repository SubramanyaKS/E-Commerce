// eslint-disable-next-line no-undef
const fs = require('fs');
// eslint-disable-next-line no-undef
const { promisify } = require('util');

const appendFile = promisify(fs.appendFile);
let errorLogger =  (err, req, res, next) => {
    if (err) {
            appendFile('ErrorLogger.txt', `${new Date().toDateString()} - ${err.message}\n` ,  (error) => {
            if (error) {
                console.log("logging failed");
            }
        });
        if(err.status){
            console.log(err.status);
            res.status(err.status);
        }
        else{
            res.status(500)
        }
       
        res.json({
            status: err.status,
            message: err.message
          })
    }
}
// eslint-disable-next-line no-undef
module.exports = errorLogger;