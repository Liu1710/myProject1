const express = require("express");
const pool = require("../pool");
const bcryptjs = require("bcryptjs");

let router = express.Router();

module.exports = router;


/*****
 *用户注册
 */
router.post("/register",(req,res)=>{
    //接受客户端传过来的数据
    let username = req.body.username;
    let password1 = req.body.password1;
    let password2 = req.body.password2;
    let mobile = req.body.mobile;
    let email = req.body.email;
    //console.log(name,password);
    //用正则表达式进行验证
    let reg1 = /^[a-z0-9]{3,12}$/i;
    let reg2 = /^1[34578]\d{9}$/;
    let reg3 = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/;
    if(!reg1.test(username)){
        res.json({code:-1,msg:"用户格式不正确"});
        return
    }
    if(!reg1.test(password1)){
        res.json({code:-2,msg:"密码格式不正确"});
        return
    }
    if(!reg2.test(mobile)){
        res.json({code:-3,msg:"手机格式不正确"});
        return
    }
    if(!reg3.test(email)){
        res.json({code:-4,msg:"邮箱格式不正确"});
        return
    }
    if(password1!==password2){
        res.json({code:-5,msg:"两次输入的密码不一致"});
        return
    }
    //判断注册的用户是否存在
    let sql1 = `SELECT * FROM user WHERE username=?`;
    pool.query(sql1,[username],(err,result)=>{
        console.log(result);
        if(err) throw err;

        if(result.length===1){
            res.json({status:"exist"});
        }
    });
    //对注册的密码进行加密,以防外漏
    let encryptedPassword = bcryptjs.hashSync(password1,bcryptjs.genSaltSync(10));
    //拼接sql语句,并查询执行结果
    let sql2 = `INSERT INTO user(username,password,mobile,email) VALUE(?,?,?,?)`;
    pool.query(sql2,[username,encryptedPassword,mobile,email],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows===1){
            res.json({status:"ok"})
        }
    });
});

/**
 *登录功能
 */
router.post("/sign",(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    //拼接sql语句查询数据库中是否存在用户
    let sql = `SELECT * FROM user WHERE username=?`;
    pool.query(sql,[username],(err,result)=>{
       if(err) throw err;
       if(result.length===1){
           let encryptedPassword = result[0].password;
           if(bcryptjs.compareSync(password,encryptedPassword)){
               res.json({status:"ok",user:result[0]});
           }else{
               res.json({status:"err"});
           }
       }else{
           res.json({status:"error"});
       }
    });
});




