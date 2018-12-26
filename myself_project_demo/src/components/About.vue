<template>
  <div>
    <!------页头------>
    <My_header/>
    <div class="my-banner"></div>
    <div class="contact-container">
      <ul>
        <li><a href="#">首页</a></li>
        <li>«</li>
        <li><router-link to="#">关于</router-link></li>
      </ul>
    </div>
    <!------楼层1---->
    <div class="about-num1">
      <h2>我们的故事</h2>
      <img src="../assets/image/timg.jpg" alt="">
      <p>我们结婚了</p>
      <input type="submit" value="第一次见面">
      <input type="button" value="第一次约会">
      <input type="button" value="提案日">
      <input type="button" value="订婚">
    </div>
    <div class="about-num2">
      <ul>
        <li><img src="../assets/image/mm.jpg" alt=""></li>
        <li>
          <h1>我们第一次见面</h1>
          <p>
            你还记得我们第一次见面么？
            日常感悟  2018-03-29	88,380 次浏览	0 条评论
            女孩问我：“你还记得我们第一次相遇的地方吗？”
            我说：“七年了，七年前，我还像一个小孩子一样的呢，虽然现在好了那么一点，但还是太年轻。七年前，我似乎记得你恨不得掐死我。”
            女孩：“哈哈，是啊，现在想想，也很久了。我也想不起我们第一次见面的时候了。都有七年了吗？时间过得好快呀。”
            是的，暮然回首，七年了，七年前的你又是如何呢？
            翻翻七年前写的说说、看看七年前的老照片。有没有回忆点什么呢？一起来分享自己的故事吧。
          </p>
        </li>
      </ul>
    </div>
    <!-----轮播图----->
    <div class=about-banner>
          <h1>最新情侣</h1>
          <hr style="border-bottom:2px solid skyblue;"/>
          <p>我们结婚了</p>
          <ul class="banner-image">
          <li>
            <img src="../assets/image/n1.jpg" alt="">
            <p>李浩</p>
          </li>
          <li>
            <img src="../assets/image/n2.jpg" alt="">
            <p>安妮</p>
          </li>
          <li>
            <img src="../assets/image/n3.jpg" alt="">
            <p>黄晓明</p>
          </li>
          <li>
            <img src="../assets/image/n4.jpg" alt="">
            <p>美美</p>
          </li>
          <li>
            <img src="../assets/image/n5.jpg" alt="">
            <p>麦克</p>
          </li>
          <li>
            <img src="../assets/image/n6.jpg" alt="">
            <p>玲玲</p>
          </li>
          <li>
            <img src="../assets/image/n7.jpg" alt="">
            <p>李波</p>
          </li>
          <li>
            <img src="../assets/image/n8.jpg" alt="">
            <p>丽丽</p>
          </li>
          <li>
            <img src="../assets/image/n9.jpg" alt="">
            <p>李云</p>
          </li>
          <li>
            <img src="../assets/image/n10.jpg" alt="">
            <p>小爱</p>
          </li>
          <li>
            <img src="../assets/image/n11.jpg" alt="">
            <p>杰克李</p>
          </li>
          <li>
            <img src="../assets/image/n12.jpg" alt="">
            <p>云溪</p>
          </li>
        </ul>
        <!---图片下的小圆点-->
          <ul class="banner-btn">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        <!--左右小箭头-->
        <img src="../assets/image/arrows-left.png" alt="left">
        <img src="../assets/image/arrows-right.png" alt="right">
      </div>
    <!-----楼层2------>
    <div class="about-floor">
      <div id="d1">
        <div class="floor-top"><h3>婚礼提案</h3></div>
        <div class="floor-bottom"><h3>我们让你的梦想成真</h3></div>
      </div>
      <div id="d2">
        <h4>婚礼</h4>
        <p>他希望在痛苦的快感予以通报批评，cupidatat cillum的痛苦DUIS然而，欧盟没有越狱！Cillum pariatur.Lorem </p>
        <p>DUIS想在足球的快乐痛苦谴责，然而，逃避cupidatat的疼痛产生任何结果。</p>
        <p><span class="glyphicon glyphicon-time"></span><i> 2017年3月20日</i></p>
        <p><span class="glyphicon glyphicon-calendar"></span><i> 2017年3月21日</i></p>
        <img src="../assets/image/ring.png" alt="">
      </div>
      <div id="d3">
        <h4>结婚宴会</h4>
        <p>他希望在痛苦的快感予以通报批评，cupidatat cillum的痛苦DUIS然而，欧盟没有越狱！Cillum pariatur.Lorem </p>
        <p>DUIS想在足球的快乐痛苦谴责，然而，逃避cupidatat的疼痛产生任何结果。</p>
        <p><span class="glyphicon glyphicon-time"></span><i> 2017年3月20日</i></p>
        <p><span class="glyphicon glyphicon-calendar"></span><i> 晚上12点到2点</i></p>
        <h1 class="glyphicon glyphicon-cutlery"></h1>
      </div>
      <div id="d4">
        <div class="floor-top"><h3>婚礼提案</h3></div>
        <div class="floor-bottom"><h3>我们让你的梦想成真</h3></div>
      </div>
    </div>
    <!-----楼层3------>
    <div class="about-floor-three">
      <h1>我们的服务</h1>
      <hr style="border-bottom:2px solid skyblue;" noshade="noshade"/>
      <p>我们结婚了</p>
      <div class="about-floor-num1">
        <ul>
          <li><span class="glyphicon glyphicon-pencil"></span></li>
          <li><h4>化妆和发型师</h4></li>
          <li><h5>一次的嫁衣，一生的幸福</h5></li>
        </ul>
        <ul>
          <li><span class="glyphicon glyphicon-music"></span></li>
          <li><h4>音乐</h4></li>
          <li><h5>定制欧尚风情，定格幸福一生</h5></li>
        </ul>
        <ul>
          <li><span class="glyphicon glyphicon-camera"></span></li>
          <li><h4>照片和视频服务</h4></li>
          <li><h5>色彩缔造精彩，品质作证永恒</h5></li>
        </ul>
        <ul>
          <li><span class="glyphicon glyphicon-gift"></span></li>
          <li><h4>结婚礼物</h4></li>
          <li><h5>欧洲时尚高贵，幸福满庭不贵</h5></li>
        </ul>
      </div>
    </div>
    <!-----页尾背景部分---->
    <div class="about-floor-background">
      <div>
        <h3>感谢所有人，最好的礼物将是您的参与</h3>
        <p>JASMIN ＆ KYLE LEE</p>
        <h4 class="glyphicon glyphicon-heart-empty animated infinite shake" ></h4>
      </div>
    </div>
    <!------页尾------>
    <my_footer/>
  </div>
</template>

<script>
  import Header from "./Header"
  import Footer from "./Footer"
  export default{
    data:function(){
      return {
        timer:null,
        moved:0,
        interval1:500,
        wait:3000,
        ul:null,
        LIWIDTH:220,
        div:null
      }
    },
    components:{
      My_header:Header,
      My_footer:Footer
    },
    mounted:function(){
      this.task1();
      setInterval(this.task1,this.interval1+this.wait);
    },
    methods:{
      task1:function(){
        this.moved++;
        this.ul=$(".banner-image");
        this.ul.animate({
          left:-this.LIWIDTH*this.moved
        },this.interval1,()=>{
          if(this.moved===6){
            this.moved=1;
            this.ul.css("left",0)
          }
        })
      }
    },

  }
</script>
