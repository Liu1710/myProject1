<template>
  <div>
    <!------页头------>
    <div class="signIn_header">
      <div class="nav_logo">
        <img src="../assets/image/logo.jpg" alt="">
        <span>欢迎注册</span>
      </div>
    </div>
    <div class="register">
      <div class="register_page">
        <div class="welcome">
          <p>欢迎注册网站会员，如果已有账户，请选择<router-link to="/SignIn" style="color:#ff0000;cursor: pointer">登录</router-link></p>
        </div>
        <div class="information">
          <div>
            <label>用&nbsp;&nbsp;户&nbsp;&nbsp;名：</label>
            <input v-model="username" type="text">
          </div>
          <div>
            <label>设置密码：</label>
            <input v-model="password1" type="text">
          </div>
          <div>
            <label>确认密码：</label>
            <input v-model="password2" type="text">
          </div>
          <div>
            <label>手机号码：</label>
            <input v-model="mobile" type="text">
          </div>
          <div>
            <label>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</label>
            <input v-model="email" type="text">
          </div>
        </div>
        <div style="text-align:center;">
          <button @click="handleClick" type="button" class="btn btn-default btn-danger btn-lg">立即注册</button>
        </div>
      </div>
    </div>
    <!------页尾------>
    <My_footer/>
  </div>
</template>
<script>
  import Footer from "./Footer"
  export default {
     data(){
       return {
          username:"",
          password1:"",
          password2:"",
          mobile:"",
          email:""
       }
     },
    components:{
       My_footer:Footer
    },
    methods:{
       handleClick:function(){
         //console.log(this.name,this.password1)
         this.$http.post("/dev/user/register",
           {
             username:this.username,
             password1:this.password1,
             password2:this.password2,
             mobile:this.mobile,
             email:this.email
           },{
           emulateJSON: true}).then(
           (result)=>{
             if(result.body.code=="-1"){
                  alert("用户名格式错误");
                  console.log("sss")
             }
             if(result.body.code=="-2"){
                  alert("密码格式错误");
             }
             if(result.body.code=="-3"){
                  alert("手机格式不正确");
             }
             if(result.body.code=="-4"){
                  alert("邮箱格式不正确")
             }
             if(result.body.code=="-5"){
                  alert("两次输入的密码不一致")
             }
             if(result.body.status=="exist"){
                  alert("用户已存在");
             }
             if(result.body.status=="ok"){
                  alert("注册成功");
                  this.$router.push("/signIn");
                  console.log(result)
                }
           },
           (err)=>{
             console.log(err);
           }
         )
       }
    }
  }
</script>
