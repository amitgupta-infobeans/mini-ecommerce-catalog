const express = require("express")
const app = express()
const morgan = require("morgan")

app.set("view engine", 'ejs')
app.use(morgan("dev"))

// to read form data using post method.
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// To load css, js...
app.use(express.static('public'))
// Middleware..
// app.use((req,res,next)=>{
//     console.log("middleware is calling...")
//     return next()
// })

app.get("/", (req, res)=>{
    res.render("index")
})
app.post("/get-form-data", (req,res)=>{
    // const {name,email,pasword} = req.body;
    console.log(req.body)
    res.send("data Received")
})

app.get("/about", (req,res)=>{
   res.render("about")
})



app.listen(3000, ()=>{
    console.log("app run on: ",3000)
})