<template>
    <div class="pages-header">
      <!--页头-->
      <My_header/>
      <div class="my-banner"></div>
      <div class="contact-container">
        <ul>
          <li><a href="#">首页</a></li>
          <li>«</li>
          <li><router-link to="#">简介</router-link></li>
        </ul>
      </div>

      <!--page body-->
      <div class="pages-container">
        <div class="pages-body">
          <img src="../assets/image/sample_big.jpg" alt="" style="width:825px;height:392px">
          <div class="blog-top">
            <div class="blog-num">
              <b>03</b>
              <span>Jan</span>
            </div>
            <div class="pages-num1">
               <h5>相亲相爱幸福永，同德同心幸福长。愿你俩情比海深！ </h5>
               <p>发布者 <a href="#">管理</a> 上 <a href="#">一般 </a> | <a href="#">10条评论</a></p>
               <p>.美丽的新娘好比玫瑰红酒,新郎就是那酒杯.恭喜你!酒与杯从此形影不离!祝福你!酒与杯恩恩爱爱!!美丽的新娘就好比是一杯玫瑰红酒而新郎就是那红酒杯就这样二者慢慢品?那融合的滋味恭喜你!酒与杯从此形影不离!祝福你!酒与杯恩恩爱爱!!十年修得同船渡，百年修得共枕眠。于茫茫人海中找到她，分明是千年前的一段缘，祝你俩幸福美满，共谐连理。
               </p>
              <p>十年修得同船渡，百年修得共枕眠。于茫茫人海中找到她，分明是千年前的一段缘，祝你俩幸福美满，共谐连理。 恭喜你找到共度一生的灵魂伴侣，婚姻是人生大事，相信你做出的会是最明智的决定，有了爱的结晶生了可爱的宝宝，别忘了请我吃油饭喔！ </p>
            </div>
        </div>
          <div class="pages-num2">
            <ul>
              <li><a href="#">教堂婚礼和现代流行式婚礼</a></li>
              <li><a href="#">古典唯美的欧美教堂婚礼</a></li>
              <li><a href="#">载歌载舞的自助餐式婚礼</a></li>
              <li><a href="#">新颖刺激终身难忘的新潮婚礼</a></li>
              <li><a href="#">富有时代特征的现代流行式婚礼</a></li>
            </ul>
            <ul>
              <li><a href="#">突出婚礼个性集体婚礼</a></li>
              <li><a href="#">拜天地、敬高堂传统婚礼</a></li>
              <li><a href="#">新颖别致，充满异乡情调民族特色婚礼</a></li>
              <li><a href="#">现代流行式婚礼的结合中西合壁式婚礼</a></li>
              <li><a href="#">欧美教堂婚礼西式婚礼</a></li>
            </ul>
          </div>
          <div class="pages-num3">
            <h3>3 条评论</h3>
            <ul>
              <li class="num">
                <img src="../assets/image/ni.jpg" alt="">
              </li>
              <li>
                <h4>张青</h4>
                <p>
                  愿你俩用爱去缠着对方，彼此互相体谅和关怀，共同分享今后的苦与乐。敬祝百年好合永结同两情相悦的最高境界是相对两无厌，祝福一对新人真心相爱，相约永久恭贺新婚之禧！</p>
              </li>
            </ul>
            <ul>
              <li class="num">
                <img src="../assets/image/lihao.jpg" alt="">
              </li>
              <li>
                <h4>李好</h4>
                <p>
                  愿你俩用爱去缠着对方，彼此互相体谅和关怀，共同分享今后的苦与乐。敬祝百年好合永结同心。珍惜这爱情，如珍惜着宝藏，轻轻地走进这情感的圣殿，去感受每一刻美妙时光
                </p>
              </li>
            </ul>
            <ul>
              <li class="num">
                <img src="../assets/image/si.jpg" alt="">
              </li>
              <li>
                <h4>美美</h4>
                <p>
                  你们本就是天生一对，地造一双，而今共偕连理，今后更需彼此宽容、互相照顾，祝福你们！今天是你们喜结良缘的日子，我代表我家人祝贺你们，祝你俩幸福美满，永寿偕老！祝你们永远相爱，携手共渡美丽人生！ .十年修得同船渡，百年修得共枕眠。于茫茫人海中找到她，分明是千年前的一段缘，祝你俩幸福美满，共谐连理。</p>
              </li>
            </ul>
          </div>
          <div class="pages-num4">
            <h3>留下你的评论</h3>
            <div class="num1">
             <form action="#">
                <input type="text" placeholder="你的姓名">
                <input type="email" placeholder="你的邮箱">
                <input type="text" placeholder="你的电话号码">
                <p><textarea placeholder="你的信息"></textarea></p>
               <div>
                <input type="submit" value="发送">
               </div>
              </form>
            </div>
          </div>
      </div>
        <div class="pages-nav">
            <ul>
              <h3>类别</h3>
              <li>花落纷飞的西式婚礼风格</li>
              <li>唯美动人的欧式婚礼风格</li>
              <li>乡村式的婚礼风格</li>
              <li>舞会式的婚礼风格</li>
              <li>星级酒店的婚礼风格</li>
              <li>下午茶式的婚宴风格</li>
              <li>浪漫温馨的情侣自然婚礼风格</li>
            </ul>
            <ul>
              <h3>档案清单</h3>
              <li>七月（15）</li>
              <li>8月（15）</li>
              <li>九月（20）</li>
              <li>十月（8）</li>
              <li>十一月（25）</li>
              <li>十二月（9）</li>
              <li>一月（15）</li>
            </ul>
          <div class="pages-nav-list1">
            <h4>其他婚礼</h4>
            <ul>
              <li><img src="../assets/image/g2.jpg" alt=""></li>
              <li>
                <p>唯美心动欧式婚礼</p>
                <p>古典</p>
                <span>2018年1月3号</span>
              </li>
            </ul>
            <ul>
              <li><img src="../assets/image/g3.jpg" alt=""></li>
              <li>
                <p>浪漫温馨的西式婚礼</p>
                <p>温暖</p>
                <span>2018年1月5号</span>
              </li>
            </ul>
            <ul>
             <li><img src="../assets/image/g4.jpg" alt=""></li>
             <li>
               <p>唯美心动的欧式婚礼</p>
               <p>古典</p>
               <span>2018年1月6号</span>
             </li>
            </ul>
            <ul>
              <li><img src="../assets/image/g1.jpg" alt=""></li>
              <li>
                <p>新颖创意的西式婚礼</p>
                <p>唯美</p>
                <span>2018年2月2号</span>
              </li>
            </ul>
          </div>
          <ul class="pages-nav-list2">
            <h4>创意标签</h4>
            <li>
              <input type="button" value="唯美">
              <input type="button" value="浪漫">
              <input type="button" value="动人">
              <input type="button" value="温馨">
            </li>
            <li>
              <input type="button" value="可爱">
              <input type="button" value="新颖">
              <input type="button" value="创意">
              <input type="button" value="爱意">
            </li>
            <li>
              <input type="button" value="温暖">
              <input type="button" value="美丽">
              <input type="button" value="古典">
              <input type="button" value="洁白">
            </li>
          </ul>
          </div>
      </div>
      <!--页尾-->
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
    },
  }
</script>
