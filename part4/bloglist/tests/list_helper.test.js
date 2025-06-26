const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

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
    const posts = [
      {
        "title": "Test title",
        "author": "Tester Testerson",
        "url": "www.testerson.com",
        "likes": 4,
        "id": "684b353aa862d930a9dae1a3"
      }
    ]

    const result = listHelper.totalLikes(posts)
    assert.strictEqual(result, 4)
  })

  test('of a bigger list is calculated right', () => {
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
      }
    ]

    const results = listHelper.totalLikes(posts)
    assert.strictEqual(results, 29)
  })
})