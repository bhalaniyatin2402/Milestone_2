import app from './app.js'
import connectToDB from './config/dbConfig.js'

const PORT = process.env.PORT

app.listen(PORT, async () => {
    await connectToDB()
    console.log(`server running on port ${PORT}`);
})

