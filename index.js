const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
const Cors = require("cors")

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, 
    useUnifiedTopology: true,
}, () =>{
console.log("Connection to Mongo DB was successful")
});

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(Cors());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(process.env.PORT || 5000, () =>{
    console.log("backend server started on port 5000")
})