# NodeJS secure RESTFUL api

A minimal, secure RESTFUL api for NodeJS. This project includes user login, access control of objects, and encrypted hashing of passwords right out of the box! Just delete the example model, add your own, and run!

# Installation

* Clone the repo by using ```git clone```.
* Run ```npm install``` on the cloned directory.
* Add APIs using the instructions below to suit your needs.

# Running the software

* ```node app.js``` for simple setups.
* I would recommend looking at [the pm2 module](https://www.npmjs.com/package/pm2) for running on a production server.


# API Endpoints

```
GET http://localhost:3000/api/datos
POST http://localhost:3000//api/datos  //creates object with fields foo=hello, bar=world
GET http://localhost:3000/api/datos:id // gets object with Mongo id ":id"
PUT http://localhost:3000/api/datos // updates object with Mongo id ":id" and fields foo=hello, bar=world
GET http://localhost:3000/api/datos:id // deletes object with Mongo id ":id"
```
