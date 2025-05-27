const express = require('express')
const mongoose = require('mongoose')

const app = express()

const blogSchema = mongoose.Schema({
  title: String, 
  author: String, 
  url: String,
  likes: Number
})