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

module.exports = {
  dummy,
  totalLikes, 
  favoriteBlog
}