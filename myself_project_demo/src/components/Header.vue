<template>
  <div class="global-show">
    <div class="global-nav">
      <div class="nav-container">
      <a href="#">
        <img class="animated infinite flip" src="../assets/image/c1.png" alt="">
      </a>
      <ul class="sub-nav">
        <li>
          <routerLink to="/">首页</routerLink>
        <li>
          <routerLink to="/Wedding">风格展示</routerLink>
          <ul data-triggle="change">
            <li v-on:mouseover="handle">海角恋歌</li>
            <li v-on:mouseover="handle">浪漫星辰</li>
            <li v-on:mouseover="handle">遇见爱情</li>
            <li v-on:mouseover="handle">花漾世界</li>
            <li v-on:mouseover="handle">花田觅香</li>
            <li v-on:mouseover="handle">丛林雾语</li>
            <li v-on:mouseover="handle">漫步时光</li>
            <li v-on:mouseover="handle">漫天花语</li>
            <li v-on:mouseover="handle">完美假期</li>
            <li v-on:mouseover="handle">怦然心动</li>
            <li class="change-box" style="top: 157px; left: 100px;"></li>
          </ul>
        </li>
        <li>
          <routerLink to="/Pages">家庭写真</routerLink>
          <ul data-triggle="change">
            <li v-on:mouseover="handle">书香门第</li>
            <li v-on:mouseover="handle">美满之家</li>
            <li v-on:mouseover="handle">明星之家</li>
            <li v-on:mouseover="handle">复古丽人</li>
            <li v-on:mouseover="handle">元气少女</li>
            <li v-on:mouseover="handle">天伦之乐</li>
            <li v-on:mouseover="handle">幸福生活</li>
            <li v-on:mouseover="handle">欢聚一堂</li>
            <li v-on:mouseover="handle">非常闺蜜</li>
            <li v-on:mouseover="handle">银幕宠儿</li>
            <li class="change-box" style="top: 157px; left: 100px;"></li>
          </ul>
        </li>
        <li>
          <routerLink to="/About">全球旅拍</routerLink>
          <ul data-triggle="change">
            <li v-on:mouseover="handle">枫叶小镇</li>
            <li v-on:mouseover="handle">中央大街</li>
            <li v-on:mouseover="handle">索菲亚</li>
            <li v-on:mouseover="handle">太阳岛</li>
            <li v-on:mouseover="handle">皇家花园</li>
            <li v-on:mouseover="handle">拉菲庄园</li>
            <li v-on:mouseover="handle">群力印象</li>
            <li v-on:mouseover="handle">中华巴洛克</li>
            <li v-on:mouseover="handle">爱丽丝庄园</li>
            <li class="change-box" style="top: 157px; left: 100px;"></li>
          </ul>
        </li>
        <li>
          <routerLink to="/Contact"><a href="#">联系我们</a></routerLink>
        </li>
      </ul>
    </div>
  </div>
    <div class="sign">
      <input type="text" placeholder="请输入">
      <span class="glyphicon glyphicon-search"></span>
      <routerLink to="/signIn">登录</routerLink>
      <routerLink to="/signUp">注册</routerLink>
    </div>
  </div>
</template>

<script>
  export default{
     data:function(){
       return {
       }
     },
     methods:{
       handle:(e)=>{
         let $li = $(e.target);
         let i=$li.index();
         let $box = $(`[data-triggle=change] li:last-child`);
         //console.log(i);
         $li.animate({fontSize:20},300).animate({fontSize:15},300);
         if(i===0 || i%2===0){
           $box.css({
             top:i*25+7,
             left:0
           });
         }else{
           $box.css({
             top:(i-1)*25+7,
             left:100
           })
         }
       }
     }
  }
</script>
