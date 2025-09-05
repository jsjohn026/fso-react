const assert = require('node:assert')
const { test, after } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('blogs are returned as json', async () => { 
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-type', /application\/json/)
})

test('all notes are returned', async () => {
  const response = await api.get('/api/blogs')

  assert.strictEqual(response.body.length, 2)
})

test('a specific note is within the returned notes', async () => {
  const response = await api.get('/api/blogs')

  const contents = response.body.map(e => e.content)
  assert.strictEqual(contents.includes('Fake Blogs R Us'), true)
})

after(async () => {
  await mongoose.connection.close()
})