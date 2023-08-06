import mongoose from "mongoose";

function conntetToDB() {
    mongoose.connect(process.env.DB_URL)
        .then(() => console.log('conection successful'))
        .catch(e => console.log('connection Error : ', e))
}

export default conntetToDB

