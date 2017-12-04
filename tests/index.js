const DashButton = require('node-dash-button');
const execute    = require('../execute');
const fs         = require('fs');

var dash_B268 = DashButton('78:e1:03:92:b2:68'),
    dash_DCB2 = DashButton('78:e1:03:b9:dc:b2'),
    dash_BF38 = DashButton('18:74:2e:3c:bf:38'),
    dash_652C = DashButton('fc:a6:67:fb:65:2c');


fs.readFile('../welcome.txt', 'utf8', function(err, data) {
    console.log(data);
    console.log("\nWaiting for button presses... \n");
});

// manually run this script to fake button press

setTimeout(function() {
    execute('../scripts/tests/fake.sh', 'Toggling bluetooth...', 1000);
}, 3000);
