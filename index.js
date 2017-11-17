var dash_button = require('node-dash-button'),
    dash_B268 = dash_button('78:e1:03:92:b2:68'), // cliff
    dash_DCB2 = dash_button('78:e1:03:b9:dc:b2'), // cliff
    dash_BF38 = dash_button('18:74:2e:3c:bf:38'), // schick - GREEN
    dash_652C = dash_button('fc:a6:67:fb:65:2c'), // schick
    exec = require('child_process').exec;

console.log("Script started.");
console.log("waiting for button press...\n");

/*

 -- EXAMPLE: running shell script --

exec('./test.sh', function(error, stdout, stderr) {
	console.log("Toggled bluetooth.");
	// console.log('stdout: ' + stdout);
	// console.log('stderr: ' + stderr);
	if (error !== null) {
	    console.log('exec error: ' + error);
	}
    });

*/

dash_B268.on('detected', function() {

    

});

dash_DCB2.on('detected', function() {
    console.log("Button DCB2 was pressed.");
});

dash_BF38.on('detected', function() {
    console.log("Button BF38 (gree) was pressed.");

    

});

dash_652C.on('detected', function() {
    console.log("Button 652C was pressed.");
});
