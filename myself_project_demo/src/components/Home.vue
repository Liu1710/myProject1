<template>
  <div class="main-container">
    <!--页头-->
    <My_header/>
    <!---轮播图-->
    <div class="banner">
      <img :src="backgroundImage">
      <div :style="styleObj"></div>
      <div :style="styleObj"></div>
      <div :style="styleObj"></div>
      <div :style="styleObj"></div>
      <div :style="styleObj"></div>
      <div :style="styleObj"></div>
      <div :style="styleObj"></div>
      <div :style="styleObj"></div>
      <div :style="styleObj"></div>
      <div :style="styleObj"></div>
    </div>
    <!--人物介绍-->
    <div class="about-num1">
       <h2>我们的故事</h2>
       <img src="../assets/image/timg.jpg" alt="">
       <p>我们结婚了</p>
    </div>
    <hr style="border:1px solid skyblue"/>
    <div class="introduce">
       <div class="bridegroom">
         <img src="../assets/image/q2.jpg" alt="">
         <div class="trace"></div>
         <h2>小帅</h2>
         <h3>新郎</h3>
         <p>幸福就是当我看不到你的时候，我还是安慰自己，能静静地这样想你也是挺好的。

           幸福就是当我想起你的是时候，一股春天的暖流钻进心窝。

           幸福就是有天走到天台上看星星时，突然下起了流星雨。

           幸福就是不管你有多么地野蛮，爱人都会像往常一样支持你。
         </p>
         <span class="glyphicon glyphicon-heart"></span>
         <span class="glyphicon glyphicon-gift"></span>
         <span class="glyphicon glyphicon-eye-open"></span>
       </div>
       <div class="bride">
         <img src="../assets/image/q1.jpg" alt="">
         <div class="trace"></div>
         <h2>小美</h2>
         <h3>新娘</h3>
         <p>幸福就是当你看到一幅秀丽风景画时，两人异口同声地说：我们去这里游玩吧!

           幸福就是一起看烟花，在最绚烂的烟花下一起感觉到我们的爱情永不消散。

           幸福就是当戒指套入你的无名指时，你不会害怕被套，而是觉得很甜蜜。

           幸福就是哪怕生活再艰辛每天都会抽出一个小时的时间和你拉家常。</p>
         <span class="glyphicon glyphicon-heart"></span>
         <span class="glyphicon glyphicon-gift"></span>
         <span class="glyphicon glyphicon-eye-open"></span>
       </div>
     </div>
    <!--时钟倒计时-->
    <div class="snow-container">
      <div class="snow foreground"></div>
      <div class="snow foreground layered"></div>
      <div class="snow middleground"></div>
      <div class="snow middleground layered"></div>
      <div class="snow background"></div>
      <div class="snow background layered"></div>
      <div class="time-down">
        <div class="time">
          <h4 >Wedding Coming Soon</h4>
          <p>WE ARE GETTING MARRIED</p>
          <span>{{d}}天</span>
          <span>{{h}}时</span>
          <span>{{m}}分</span>
          <span>{{s}}秒</span>
        </div>
      </div>
    </div>
    <!--轮播图--->
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
    </div>
    <!--样照鉴赏-->
    <div class="sample-title"><p>婚纱照鉴赏</p></div>
    <div class="sample">
      <ul>
        <li class="sample-big">
          <img src="../assets/image/guest1.jpg" alt="">
          <div class="shadow"></div>
          <div class="draw">
            <p class="sample1"></p>
            <p class="sample2"></p>
            <p class="sample3"></p>
            <p class="sample4"></p>
            <h1>先生&女士</h1>
          </div>
        </li>
        <li class="sample-small">
          <img src="../assets/image/guest2.jpg" alt="">
          <div class="shadow"></div>
          <div class="draw">
            <p class="sample1"></p>
            <p class="sample2"></p>
            <p class="sample3"></p>
            <p class="sample4"></p>
            <h3>先生&女士</h3>
          </div>
        </li>
        <li class="sample-small">
          <img src="../assets/image/guest3.jpg" alt="">
          <div class="shadow"></div>
          <div class="draw">
            <p class="sample1"></p>
            <p class="sample2"></p>
            <p class="sample3"></p>
            <p class="sample4"></p>
            <h3>先生&女士</h3>
          </div>
        </li>
        <li class="sample-small">
          <img src="../assets/image/guest4.jpg" alt="">
          <div class="shadow"></div>
          <div class="draw">
            <p class="sample1"></p>
            <p class="sample2"></p>
            <p class="sample3"></p>
            <p class="sample4"></p>
            <h3>先生&女士</h3>
          </div>
        </li>
        <li class="sample-small">
          <img src="../assets/image/guest5.jpg" alt="">
          <div class="shadow"></div>
          <div class="draw">
            <p class="sample1"></p>
            <p class="sample2"></p>
            <p class="sample3"></p>
            <p class="sample4"></p>
            <h3>先生&女士</h3>
          </div>
        </li>
        <li class="sample-big">

          <img src="../assets/image/guest6.jpg" alt="">
          <div class="shadow"></div>
          <div class="draw">
            <p class="sample1"></p>
            <p class="sample2"></p>
            <p class="sample3"></p>
            <p class="sample4"></p>
            <h1>先生&女士</h1>
          </div>
        </li>
      </ul>
    </div>
    <!--外景照片-->
    <div class="sample-title"><p>外景照片</p></div>
    <div class="outdoor">
      <ul>
        <li>
          <img src="../assets/image/ou1.jpg" alt="">
          <div>
            <h3>温馨情侣两小无猜</h3>
            <p>承载所有梦幻想象的魅力天堂</p>
          </div>
        </li>
        <li>
          <img src="../assets/image/ou2.jpg" alt="">
          <div>
            <h3>说不完的情话,两眼迷离</h3>
            <p>浪漫之夜浓情蜜蜜</p>
          </div>
        </li>
        <li>
          <img src="../assets/image/ou3.jpg" alt="">
          <div>
            <h3>手牵手一辈子,有你陪伴真好</h3>
            <p>365天花期不断档的人间仙境</p>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <img src="../assets/image/ou4.jpg" alt="">
          <div>
            <h3>希望此生你如公主般幸福快乐</h3>
            <p>皇家城堡之水晶教堂</p>
          </div>
        </li>
        <li>
          <img src="../assets/image/ou5.jpg" alt="">
          <div>
            <h3>塞纳河畔</h3>
            <p>法式轻奢江边景</p>
          </div>
        </li>
        <li>
          <img src="../assets/image/ou6.jpg" alt="">
          <div>
            <h3>等待你,永远的归宿</h3>
            <p>独窝倚楼看世间繁华,只因有你</p>
          </div>
        </li>
      </ul>
    </div>
    <!--左右小箭头-->
    <img src="../assets/image/arrows-left.png" alt="lt">
    <img src="../assets/image/arrows-right.png" alt="rt">
    <!--婚礼安排--->
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
    <!--页尾-->
    <My_footer/>
  </div>


</template>

<script>
  import Header from "./Header"
  import Footer from "./Footer"
  export default {
    data: function () {
      return {
        i: 0,
        j: 0,
        count: 10,
        interval: 50,
        duration: 500,
        divs: null,
				index:1,
        nowDate:null,
        endDate:null,
        days:null,
        d:"",
        h:"",
        m:"",
        s:"",
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
    computed:{
    	backgroundImage:function(){
    		return require('../assets/image/'+this.index+'.jpg')
    	},
			styleObj: function(){
				return {
					backgroundImage: "url("+require("../assets/image/"+this.index+".jpg")+")"
				}
			},
    },
    mounted: function () {
      setInterval(this.task,3000);
      setInterval(this.task1,this.interval1+this.wait);
      this.handleTask();
     //this.timer=setInterval(this.handleTask,1000);
      setInterval(this.handleTask,1000)
    },
    methods: {
      task:function(){
      	this.index ++;
        if(this.index>=4){

          this.index = 1;
        }
      	this.divs = document.querySelectorAll(".banner>div");

     
//      //创建一个定时器,每隔50毫秒就将所有的div换下一个图片并且加上class显示效果
        let timer1 = setInterval(() => {
        	let div = this.divs[this.j];

					 //div.style = this.divUrl;
					div.className = "shake";
          this.j++;
          if (this.j === this.count) {
          	this.j=0;
            clearInterval(timer1)
          }
        }, 50);
//      //创建一个一次性定时器撤掉每个div上的class
        setTimeout(() => {
          for (let div of this.divs) {
            div.className = "";
//          document.querySelector(".banner>img").src = "../assets/image/" + this.index + ".jpg"
          }
        }, this.interval * this.count + this.duration)

      },
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
      },
      handleTask:function(){
          this.nowDate = new Date();
          this.endDate = new Date("2019/12/25 16:33");
          this.s = parseInt((this.endDate - this.nowDate) / 1000);
        //if(this.s>0) {
          this.d = parseInt(this.s / 3600 / 24);
          if (this.d < 10) {
            this.s = "0" + this.d
          }
          this.h = parseInt((this.s % (3600 * 24)) / 3600);
          if (this.h < 10) {
            this.h = "0" + this.h
          }
          this.m = parseInt((this.s % 3600) / 60);
          if (this.m < 10) {
            this.m = "0" + this.m
          }
          this.s = this.s % 60;
          if (this.s < 10) {
            this.s = "0" + this.s
          }
       // }else{
         // clearInterval(this.timer);

         // this.days=document.querySelector(".time>span");
         // this.days.innerHTML="新婚快乐"
       // }
      }
    }
  }
</script>
