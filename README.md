


# There are three parts to the project:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 1:

A node server that stores the information within it,

The server receives information (Json package) from a web platform,

The server sends the information it stores (also as a Json package), When a GET request is sent to it.

file:
    server_data.js;

## 2:

A web platform that allows you to upload and send data to a server,

Sending is done by POST method,

The package passes as a Json package,

Two options to load the data:
    1: Copy Block Json,
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
    3."npm install cors";
    4.Download all the files / folders from gitHub;
    5.Copy them to the my-app folder;

Run the server:

    6:Put in the command line "srver_data.js", (Note that you are in the my-app folder);

To upload and send data packets to the server:

    7.Open another command line window, and put "npm run toUpdate", (Note that you are in the my-app folder);

To see the web platform that displays the information:

    8.Open another command line window, and put "npm run start", (Note that you are in the my-app folder);

## enjoy ;-)
