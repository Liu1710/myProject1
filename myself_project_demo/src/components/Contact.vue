<template>
  <div>
    <!------页头------>
    <my_header/>
    <div class="my-banner"></div>
    <div class="contact-container">
      <ul>
        <li><a href="#">首页</a></li>
        <li>«</li>
        <li><router-link to="#">联系</router-link></li>
      </ul>
    </div>
    <div class="body-container">
      <h1>联系我们</h1>
      <div><img src="../assets/image/timg.jpg"></div>
      <p>找到我们的位置</p>
    </div>
    <div class="contact_grid">
      <div class="contact_grid_num">
        <div class="contact_grid_left">
           <div class="contact-icon"><span class="glyphicon glyphicon-map-marker"></span></div>
           <div class="contact-way">
             <h4>地点</h4>
             <p>3030北京，北京，美国</p>
           </div>
        </div>
        <div class="contact_grid_left">
          <div class="contact-icon"><span class="glyphicon glyphicon-envelope"></span></div>
          <div class="contact-way">
            <h4>电子邮件</h4>
            <p>nfo@example.com</p>
          </div>
        </div>
        <div class="contact_grid_left">
          <div class="contact-icon"><span class="glyphicon glyphicon-earphone"></span></div>
          <div class="contact-way">
            <h4>打电话给我们</h4>
            <p>(+000) 003 003 0052</p>
          </div>
        </div>
        <div class="contact_email">
            <div class="contact_email_text">
              <input type="text" placeholder="你的姓名">
              <input type="email" placeholder="你的邮箱">
              <input type="text" placeholder="你的手机号码">
            </div>
            <div class="contact_email_textarea">
               <textarea name="Message" placeholder="你的信息"></textarea>
               <input type="submit" value="提交">
            </div>
        </div>
      </div>
    </div>
    <!------页尾------>
    <My_footer/>
  </div>
</template>

<script>
  import Header from "./Header"
  import Footer from "./Footer"
  export default{
    data(){
      return {

      }
    },
    components:{
      My_header:Header,
      My_footer:Footer
    }
  }
</script>
