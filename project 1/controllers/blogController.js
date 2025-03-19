import fs from 'fs'
import Blog from "../models/blogModel.js";
import cloudinary from 'cloudinary'

async function homepage(req, res) {
    try {
        res.render('index')
    } catch (error) {
        console.log('controller Error : ', error);
    }
}

async function getallblogs(req, res) {
    try {
        const blogs = await Blog.find()

        res.status(200).json({
            success: true,
            blogs
        })
    } catch (error) {
        console.log('controller Error : ', error);
    }
}

async function addblog(req, res) {
    try {
        const { title, description, content } = req.body
        console.log('file: ', req.file);
        console.log('body: ', req.body);

        const blog = new Blog({
            title, 
            description, 
            content, 
            poster: 'https://www.monsterinsights.com/wp-content/uploads/2020/01/what-is-the-best-time-to-post-a-blog-and-how-to-test-it.jpg'
        })

        if(!blog) {
            throw new Error('your detail is not uploded someting went wrong')
        }

        // TODO: file upload
        if(req.file) {
            try {
                const result = await cloudinary.v2.uploader.upload(req.file.path, {
                    folder: 'lms',
                    width: 250,
                    height: 250,
                    gravity: 'faces',
                    crop: 'fill'
                })

                if(result) {
                    blog.poster = await result.secure_url

                    // remove file from uploades
                    await fs.rmSync(`uploads/${req.file.filename}`)
                }
            } catch (error) {
                console.log('file not uploded, try again: ', error);
            }
        }

        await blog.save()

        res.render('index')
    } catch (error) {
        console.log('controller Error : ', error);
    }
}

async function blogpage(req, res) {
    try {
        const blogId = req.params.id

        const blog = await Blog.find({ _id: blogId })

        const { title, description, content, poster } = blog[0]

        res.render('readblog', { title, description, content, poster })

    } catch (error) {
        console.log('controller Error : ', error);
    }
}

export { homepage, addblog, blogpage, getallblogs }
