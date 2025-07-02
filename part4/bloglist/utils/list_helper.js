const blog = require("../models/blog")

const dummy = (blogs) => {
  return 1
}

const totalLikes = (posts) => {
  return posts.reduce((accumulator, post) => {return accumulator += post.likes}, 0)
}

const favoriteBlog = (blogs) => {
  return blogs.reduce((previous, current) => {
    return previous.likes > current.likes ? previous : current
  })
}

const mostBlogs = (blogs) => {
  let count = {}
  blogs.forEach(blog => {
    count[author] ? count[blog.author] += 1 : count[blog.author] = 1
  })

  let topAuthor = count.reduce((previous, current) => {
    previous[author] > current[author] ? previous : current
  })

  let topBlogger = {
    author: topAuthor, 
    blogs: count[topAuthor]
  }

  return topBlogger
}

module.exports = {
  dummy,
  totalLikes, 
  favoriteBlog, 
  mostBlogs
}