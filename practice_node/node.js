const http = require("http")
const server = http.createServer((req,res)=>{
    
    if(req.url == "/"){
        res.end("Home Page")
    }
    if(req.url == "/about"){
        res.end("About Page...")
    }
})

server.listen(3000, ()=>{
    console.log("App is running on port: ",3000)
})