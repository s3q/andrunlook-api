const express = require("express")
const app = express();

const morgan = require("morgan")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const useragent = require('express-useragent');
const helmet = require("helmet")
const cors = require('cors');

const andrProgressRouter = require("./router/andrProgress")
const andrPublicProgressRouter = require("./router/andrPublicProgress")


const port = process.env.PORT || 8800

dotenv.config()


mongoose.connect("mongodb+srv://andrAdmin:IC4puLviRrF0B55X@cluster0.ls6ni.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) console.log("[!] - haven't connected to MongoDB")
        else console.log("[+] - have conncted successfully ")
    })



app.use(cors({
    origin: "*"
}));
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb' }));
app.use(helmet())
app.use(morgan("common"))
app.use(helmet())
app.use(useragent.express());


app.use("/api/andrprogress", andrProgressRouter)
app.use("/api/andrpublicprogress", andrPublicProgressRouter)

app.listen(port, () => {
    console.log("[+] - server : listen port --> " + port)
})

