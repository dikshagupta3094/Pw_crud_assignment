const mongoose = require('mongoose')

const connectTodb = async()=>{
    try {
    const db = await mongoose.connect(process.env.DBURI)
    console.log(`Database connected ${db.connection.host}`);
    } catch (error) {
        console.log('Databse connection failed......', error);
    }
}

module.exports = connectTodb