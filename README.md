# VITMAV42 - Server side JavaScript - Homework

Homework project for the subject [BMEVITMAV42 - Server side JavaScript](http://malna.tmit.bme.hu/vitmav42/). It is a simple ExpressJS web application with server-side rendered web pages.

The purpose of the application is to provide very basic inventory keeping functionality to an imaginary fitness studio chain. This includes:

- Managing gym locations
- Managing inventory of each location
- Basic statistics

---

## Requirements

This application requires npm to be installed on the system. It also requires a MongoDB connection to store its data.

---

## Installation

```cmd
$ git clone https://github.com/pappbence96/VITMAV42-homework
$ cd VITMAV42-homework
$ npm install
```

## App configuration

Application configuration is provided at `config/config.js`.

- app
  - port (default _8080_)
- admin
  - username (default _admin_)
  - password (default _admin_)
- session
  - secret
  - resave
  - saveUninitialized
- db
  - host

## Running the project

```cmd
$ npm run serve
```
