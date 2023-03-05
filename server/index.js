require('dotenv').config()
const express = require ('express')
const sequelize = require ('./db')
const cors = require ('cors')
const fileupload = require ('express-fileupload')
const router = require ('./rourtes/index')
const errorHandler = require ('./middleware/ErrorHandlingMiddleware')
const path = require ('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileupload({}))
app.use('/api', router)

//Обработка ошиок
app.use(errorHandler)

const start = async () =>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}!`))
    }catch (e){
    console.log(e)
    }
}
start()