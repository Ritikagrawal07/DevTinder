const express = require('express');
const app =  express();

app.use("/test",(req,res) => {
    res.send("Hello test");
})
app.use("/",(req,res) => {
    res.send("Hello from server");
}) 