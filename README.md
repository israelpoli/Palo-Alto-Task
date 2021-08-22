


# There are three parts to the project:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 1:

A node server that stores the information within it,

The server receives information (Jason package) from a web platform,

The server sends the information it stores (also as a Jason package), When a GET request is sent to it.

file:
    server_data.js;

## 2:

A web platform that allows you to upload and send data to a server,

Sending is done by POST method,

The package passes as a Jason package,

Two options to load the data:
    1: Copy Block Jason,
    2: Fill out a form with the required fields,

In both cases, the system will check if the required fields are full, and when it finds a required field that is not filled in, it will alert you;

folder:
    platform-update-to-server;

## 3:

A web platform, which presents to the user all the information coming from the server,

The information is displayed on the tab so that each item displays specific task information,

Clicking on the item will display more details about the task,

folder:
    src;

### So how will it work?

You need to open a command line and write the following lines:

    1."npx create-react-app my-app", Press ENTER;
    2."npm install express --save", (Note that you are in the my-app folder);
    3.Download src, platform-update-to-server, server_data.js, to a local folder;
    4.Copy the server_data.js file to the my-app folder, and run in cmd,"node server_data.js".

To upload and send data packets to the server:

    5.Copy the contents of the platform-update-to-server folder to the src folder located in the my-app folder;
    6.Open another command prompt window, and then go to the my-app folder, and run "npm start";

To see the web platform that displays the information:

    7.copy the src folder to the my-app folder,and run "npm start";

## enjoy ;-)
