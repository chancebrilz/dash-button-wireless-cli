![Dash Button Wireless CLI](https://i.imgur.com/gUhzTDJ.png)
------
A "physical" command line interface using Amazon Dash buttons.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites
You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)

### Installation

* `git clone https://github.com/chancebrilz/dash-button-wireless-cli.git` this repository
* `cd dash-button-wireless-cli`
* `npm install`

### Running

```
node index.js
```

## Configuration

Add your Dash Button by creating a new dash_button variable using it's MAC address.
```
var dash_B268 = DashButton('78:e1:03:92:b2:68')
```

You can then capture button press packets using the following code

```
dash_B268.on('detected', function() {

    execute('./scripts/test.sh', 'Running test script...');

});
```
