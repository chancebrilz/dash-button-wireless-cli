const exec = require('child_process').exec;

/**
 * Executes files after x milliseconds and prints message
 * @param {String} fileName - path to file
 * @param {msg} msg - message to output
 * @param {timeout} int - timeout time
 */
module.exports = (fileName, msg, timeout) => {

    if(msg !== undefined)
        console.log(msg + "\n");

    if(timeout === undefined)
        timeout = 0;

    setTimeout(() => {

        exec(fileName, function(error, stdout, stderr) {
            if (error !== null) {
                console.log('Execution error: ' + error);
            }
        });

    }, timeout);

}
