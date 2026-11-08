const express = require("express")

const app = express() // server create kar diya hai

app.get("/", (req,res)=> {
    res.send("hello kamlesh bhai")
})

app.get("/about",(req,res)=> {
    res.send("ok jaanu")
})

app.listen(2000) //server start kiya hai