const DashButton = require('node-dash-button');
const execute    = require('./execute');
const fs         = require('fs');

var dash_B268 = DashButton('78:e1:03:92:b2:68'),
    dash_DCB2 = DashButton('78:e1:03:b9:dc:b2'),
    dash_BF38 = DashButton('18:74:2e:3c:bf:38'),
    dash_652C = DashButton('fc:a6:67:fb:65:2c');


fs.readFile('welcome.txt', 'utf8', function(err, data) {
    console.log(data);
    console.log("\nWaiting for button presses... \n");
});

dash_B268.on('detected', function() {

    execute('./scripts/raspbian/toggle-bluetooth.sh', 'Button B268 Pressed: Toggling bluetooth...', 1000);

});

dash_DCB2.on('detected', function() {

    execute('./scripts/raspbian/toggle-volume.sh', 'Button DCB2 Pressed: Toggling volume...', 1000);

});

dash_BF38.on('detected', function() {

    execute('./scripts/raspbian/reboot.sh', 'Button BF38 Pressed: Rebooting system in 5 seconds...', 5000);

});

dash_652C.on('detected', function() {

    execute('./scripts/raspbian/open-chromium.sh', 'Button 652C Pressed: ...', 1000);

});
