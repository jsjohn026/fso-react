const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster1.wpmkntq.mongodb.net/blogList?retryWrites=true&w=majority&appName=blogList`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const blogSchema = new mongoose.Schema({
  title: String, 
  author: String, 
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

// const blog = new Blog({
//   title: 'Test title',
//   author: "Tester Testerson",
//   url: 'www.testerson.com',
//   likes: 4
// })

// blog.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

Blog.find({})
  .then(blogs => {
    blogs.forEach(blog => {
      console.log(blog)
    })
    mongoose.connection.close()
  })