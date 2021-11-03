const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/reactDB";
mongoose.connect(url);
mongoose.connect(url,{useNewUrlParser:true});

const con  = mongoose.connection;
con.on("open",function() {
    console.log("DB connected ...!");
    
})