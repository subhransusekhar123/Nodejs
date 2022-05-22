const Express =  require("express");
const app = Express();
app.get("/Home",(req,res)=>{
    res.send("hello , This is Home page")

})

app.get("/about",(req,res)=>{
    res.send("hello , This is about page")
})

app.get("/product",(req,res)=>{
    res.send("this is product page")
})

app.get("/",(req,res)=>{
    res.send("this is a new page")
})


app.listen(5000)