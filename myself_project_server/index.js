/*****
 * 项目入口文件
 */
const http = require("http");
const express = require("express");

//创建服务器
let port = 3000;
let app = express();
http.createServer(app).listen(port);

/***************************中间件***************************/
let cors = require("cors");
let bodyParser = require("body-parser");
let cookieParser = require("cookie-parser");
app.use(cors({
    origin:"*",
    credentials:true
}));

app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(cookieParser());

/*************************路由&路由器************************/
app.use("/user",require("./routes/user"));

