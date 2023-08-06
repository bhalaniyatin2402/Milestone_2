import { Schema, model } from "mongoose";

const blogModel = new Schema({
    title: {
        type: String,
        required: [true, 'blog title is required'],
        unique: [true, 'title already exist in blog'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'blog title is required'],
        trim: true
    },
    content: {
        type: String,
        required: [true, 'blog title is required'],
        trim: true
    },
    poster: {
        type: String,
        default: [true, 'https://www.monsterinsights.com/wp-content/uploads/2020/01/what-is-the-best-time-to-post-a-blog-and-how-to-test-it.jpg']
    }
})

const Blog = model('Blog', blogModel)

export default Blog
