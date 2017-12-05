![Dash Button Wireless CLI](https://i.imgur.com/gUhzTDJ.png)
------
A "physical" command line interface using Amazon Dash buttons.

## Getting Started
These instructions will get you a copy of the project up and running on your local linux machine. This program can run on any other machine that Node.js supports, and has the libpcap library installed.

### Prerequisites
You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [libcap-dev](https://packages.debian.org/sid/libcap-dev)

### Installation

* `git clone https://github.com/chancebrilz/dash-button-wireless-cli.git`
* `cd dash-button-wireless-cli`
* `npm install`
* `apt-get install libpcap-dev` or using another installation method

### Running

```
$ sudo node index.js
```

### Configuration

Add your Dash Button by creating a new variable of `DashDutton` type using it's MAC address.
```
var dash_B268 = DashButton('78:e1:03:92:b2:68')
```

You can then capture button press packets using the following code

```
dash_B268.on('detected', function() {

    execute('./scripts/test.sh', 'Running test script...');

});
```

### Setup as Service

These instructions are for systemd. Upstart can also be used but only systemd is supported by default.
The program folder must live inside the /opt directory for the service to work. You may need to run these commands as `sudo` if you are not the root user.

```
$ mv dash-button-wireless-cli /opt/dash-button-wireless-cli
$ ln -s /opt/dash-button-wireless-cli/services/dashbutton.service /etc/systemd/system/dashbutton.service
$ systemctl enable dashbutton
$ systemctl start dashbutton
```

This will start the service on reboot, and automatically reload the program if it crashes.

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/chancebrilz/dash-button-wireless-cli/blob/master/LICENSE.md) file for details

## Acknowledgments
I would like to thank [hortinstein](https://github.com/hortinstein) for his [node-dash-button](https://github.com/hortinstein/node-dash-button.git) project.
