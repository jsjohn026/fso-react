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
    count[blog.author] = (count[blog.author] || 0) + 1
  })

  const entries = Object.entries(count)

  const topAuthor = entries.reduce((max, [author, blogs]) => {
    return blogs > max.blogs ? { author, blogs } : max
  }, { author: null, blogs: 0 })

  return topAuthor
}

const mostLikes = (blogs) => {
  let likeTotals = {}
  blogs.forEach(blog => {
    likeTotals[blog.author] = (likeTotals[blog.author] || 0) + blog.likes
  })

  const entries = Object.entries(likeTotals)
  console.log(entries)
  

  const topLikes = entries.reduce((max, [author, likes]) => {
    return likes > max.likes ? { author, likes } : max
  }, { author: null, likes: 0 })

  return topLikes
}

module.exports = {
  dummy,
  totalLikes, 
  favoriteBlog, 
  mostBlogs,
  mostLikes
}