import Blog from "../models/blogModel.js";

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
        const { title, description, content, poster } = req.body

        const blog = new Blog({
            title, description, content, poster
        })

        const result = await blog.save()

        console.log(result);

        res.render('index')

    } catch (error) {
        console.log('controller Error : ', error);
    }
}

async function blogpage(req, res) {
    try {
        const blogId = req.params.id

        const blog = await Blog.find({ _id: blogId })
        console.log(blog);

        const { title, description, content, poster } = blog[0]

        res.render('readblog', { title, description, content, poster })

    } catch (error) {
        console.log('controller Error : ', error);
    }
}

export { homepage, addblog, blogpage, getallblogs }
