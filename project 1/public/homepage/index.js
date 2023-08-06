const modal = document.getElementById('modal')
const addBtn = document.getElementById('add-btn')
const closeBtn = document.getElementById('close-btn')
const submitBtn = document.getElementById('submit-btn')

addBtn.addEventListener('click', () => {
    modal.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})

submitBtn.addEventListener('click', (e) => {
    // e.preventDefault()
    // e.submit()
    modal.style.display = 'none'
})


async function getAllBlogs() {
    const response = await fetch('http://127.0.0.1/allblogs')
    const result = await response.json()
    return result
}

const blogContainer = document.getElementById('blog-container')
const blogCard = document.getElementById('blog-card')

async function displayBlog() {
    blogContainer.innerHTML = ''
    const response = await getAllBlogs()
    const allBlogData = response.blogs

    allBlogData.forEach(blog => {
        blogContainer.innerHTML += 
        `<div class="blog-card">
            <img src="${blog.poster}" alt="">
            <h3 class="blog-title">${blog.title}</h3>
            <p class="blog-description">${blog.description}</p>
            <button class="read-btn"> <a href="/blogpage/${blog._id}"> Read </button> </a> 
        </div>`
    })
}

displayBlog()