# Project Name

Rest end points secured by JWT in connection with MySQL.

#### Requirements

- NodeJs - 12.6

- Express - 4.17.1

- Json Web Token - 8.5.1

- MySQL Connector - 2.18.1

#### Installation

- Ubuntu
	- Download and install the required node version
https://nodejs.org/dist/latest-v12.x/node-v12.16.3-linux-x64.tar.gz


- Windows
	- Download and install the required node version.
https://nodejs.org/en/download/

#### If the installation was successful, you should be able to run the following command.
	$ node -v
	v12.16.3
	$ npm -v
	6.14.4			

#### Run the application

 Clone the project and run the following commands to run.

	  $ npm install
	  $ npm start


Sample Rest End Points:

	  POST - localhost:2000/login
	  GET - localhost:2000/info/listAll
	  GET -  localhost:2000/info/list/{code}

