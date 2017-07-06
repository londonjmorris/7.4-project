const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const mustacheExpress = require("mustache-express");
const bodyParser = require('body-parser');
const session = require('express-session');
const Item = require('./models/item');

const app = express();
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

mongoose.Promise = require("bluebird");
mongoose.connect("mongodb://localhost:27017/supreme");

const item = new Item({name: "M.C. Escher Hoodie"});
item.save();

const reseller = {username: "sfgrails", hostSite: "Grailed", price: 270}
item.resellers.push(reseller);
item.save();

console.log(item.toObject());
