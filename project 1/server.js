import app from './app.js'
import connectToDB from './config/dbConfig.js'
import { v2 } from 'cloudinary'

const PORT = process.env.PORT

v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
    secure: true
})

app.listen(PORT, async () => {
    await connectToDB()
    console.log(`server running on port ${PORT}`);
})
 