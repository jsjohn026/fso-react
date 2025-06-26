const dummy = (blogs) => {
  return 1
}

const totalLikes = (posts) => {
  return posts.reduce((accumulator, post) => {return accumulator += post.likes}, 0)
}

module.exports = {
  dummy,
  totalLikes
}