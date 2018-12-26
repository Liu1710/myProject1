<template>
  <div>
    <div class="signIn_header">
      <div class="nav_logo">
        <img src="../assets/image/logo.jpg" alt="">
        <span>欢迎登录</span>
      </div>
    </div>
    <div class="sign_in">
      <div class="sign_page">
        <div class="wel">
          <h2>会员登录</h2>
        </div>
        <div class="message">
          <label>用户名</label>
          <input v-model="username"  type="text">
          <br/>
          <label>密&nbsp;&nbsp;&nbsp;码</label>
          <input v-model="password" type="text">
          <br/>
          <p>忘记密码</p>
        </div>
        <input @click="handleClick" type="button" class="btn btn-default btn-success btn-block" style="margin-top:50px;"  value="登录">
      </div>
    </div>
    <My_footer/>
  </div>
</template>
<script>
  import Footer from "./Footer"
  export default {
     data(){
       return {
         username:"",
         password:"",
         user:""
       }
     },
    components:{
       My_footer:Footer
    },
    methods:{
       handleClick(){
         this.$http.post("/dev/user/sign",{username:this.username,password:this.password},{emulateJSON: true}).then(
           res=>{
             //let user = res.body.user.username;
             //console.log(user);
             if(res.body.status=="err"){
                alert("用户密码错误")
             }
             if(res.body.status=="error"){
                alert("用户不存在")
             }
             if(res.body.status=="ok"){
                alert("登录成功");
                let user = res.body.user.username;
                this.$cookies.set("user",user);
                this.$router.push("/home");
             }
             //console.log(res)
           },
           err=>{
             console.log(err)
           }
           );
         //console.log(this.username,this.password)
       }
    }
  }
</script>
