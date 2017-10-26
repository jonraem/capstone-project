# capstone-project
This is a web application for the University of Turku Capstone course. In the project we are creating a video surveillance system that uses Raspberry Pi and the Raspberry Pi camera. The pictures and video are uploaded to an AWS server (EC2) and pulled to this website from the server.

### How to start:
* Install Node.js and npm from [https://nodejs.org/en/](https://nodejs.org/en/).
* Duplicate environment file `.env.example` into `.env` and add the actual keys required for authentication and real iframe link. (If necessary.)
* Run `yarn && yarn start` to install dependencies and boot up the application.

### How to implement changes (for team):
* When you have implemented your changes, stop the development server with CTRL + C and run `yarn build` in the terminal. This will build static files into `/capstone-project-master/build/`.
* Go to the Alibaba server and add these build files to the root after first deleting the old ones. This works best with the OSS desktop app where you can just drag-and-drop.
* Magic! ✨


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
