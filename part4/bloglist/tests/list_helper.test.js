const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

const posts = [
  {
    "title": "Test title",
    "author": "Tester Testerson",
    "url": "www.testerson.com",
    "likes": 4,
    "id": "684b353aa862d930a9dae1a3"
  },
  {
    "title": "Marginal Revolution",
    "author": "Tyler Cowen",
    "url": "https://marginalrevolution.com/",
    "likes": 15,
    "id": "685af07cc15e05e6df4ca91a"
  },
  {
    "title": "Wait But Why",
    "author": "Tim Urban",
    "url": "https://waitbutwhy.com//",
    "likes": 10,
    "id": "685af38dc15e05e6df4ca91d"
  },
  {
    "title": "First class tests",
    "author": "Robert C. Martin",
    "url": "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    "likes": 8,
    "id": "685d5cd3cccaf8d70e839043"
  },
  {
    "title": "TDD harms architecture",
    "author": "Robert C. Martin",
    "url": "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    "likes": 0,
    "id": "685d5ceacccaf8d70e839046"
  }
]

test('dummy returns 1', () => {
  const blogs = []
  const result = listHelper.dummy(blogs)
  
  assert.strictEqual(result, 1)
})

describe('total likes', () => {
  test('of empty list is zero', () => {
    const posts = []
    const result = listHelper.totalLikes(posts)
    assert.strictEqual(result, 0)
  })  

  test('when list has only one blog equals the likes of that', () => {
    const list = [posts[0]]
    const result = listHelper.totalLikes(list)
    assert.strictEqual(result, 4)
  })

  test('of a bigger list is calculated right', () => {
    const results = listHelper.totalLikes(posts)
    assert.strictEqual(results, 37)
  })
})

describe('most likes', () => {
  test('of a list of blogs', () => {
    const results = listHelper.favoriteBlog(posts)
    assert.strictEqual(results, posts[1])
  })
})

describe('author with the most blogs', () => {
  test('of a list of blogs', () => {
    const results = listHelper.mostBlogs(posts)
    assert.deepStrictEqual(results, {
      author: "Robert C. Martin",
      blogs: 2
    })
  })
})