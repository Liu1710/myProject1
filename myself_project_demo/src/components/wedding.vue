<template>
  <div>
    <!--页头-->
    <my_header/>
    <!--背景图-->
    <div class="title">
      <div class="snow-container">
      <div class="snow foreground"></div>
      <div class="snow foreground layered"></div>
      <div class="snow middleground"></div>
      <div class="snow middleground layered"></div>
      <div class="snow background"></div>
      <div class="snow background layered"></div>
    </div>
    </div>
    <!--样照相册-->
    <div>
      <!--样照上面的标签-->
      <div class="tabs">
        <ul class="tab">
          <h1>婚纱样照展</h1>
          <!--<li data-target="#container1"><a href="">全部</a></li>
          <li data-target="#container2"><a href="">组别一</a></li>
          <li data-target="#container3"><a href="">组别二</a></li>
          <li data-target="#container4"><a href="">组别三</a></li>-->
        </ul>
      </div>
      <!--样照-->
      <div class="tabs-container">
        <div style="z-index: 10" id="container1">
          <ul>
            <li><img src="../assets/image/o1.png" alt=""></li>
            <li><img src="../assets/image/o2.png" alt=""></li>
            <li><img src="../assets/image/o3.png" alt=""></li>
            <li><img src="../assets/image/o4.png" alt=""></li>
          </ul>
          <ul>
            <li><img src="../assets/image/o5.png" alt=""></li>
            <li><img src="../assets/image/o6.png" alt=""></li>
            <li><img src="../assets/image/o7.jpg" alt=""></li>
            <li><img src="../assets/image/o8.jpg" alt=""></li>
          </ul>
          <ul>
            <li><img src="../assets/image/o9.jpg" alt=""></li>
            <li><img src="../assets/image/o10.jpg" alt=""></li>
            <li><img src="../assets/image/o11.jpg" alt=""></li>
            <li><img src="../assets/image/o12.jpg" alt=""></li>
          </ul>
          <ul>
            <li><img src="../assets/image/o13.jpg" alt=""></li>
            <li><img src="../assets/image/o14.jpg" alt=""></li>
            <li><img src="../assets/image/o15.jpg" alt=""></li>
            <li><img src="../assets/image/o16.jpg" alt=""></li>
          </ul>
        </div>
        <div id="container2">
          <ul>
            <li><img src="../assets/image/o12.jpg" alt=""></li>
            <li><img src="../assets/image/o14.jpg" alt=""></li>
            <li><img src="../assets/image/o8.jpg" alt=""></li>
            <li><img src="../assets/image/o15.jpg" alt=""></li>
            <li><img src="../assets/image/o10.jpg" alt=""></li>
            <li><img src="../assets/image/o11.jpg" alt=""></li>
            <li><img src="../assets/image/o3.png" alt=""></li>
            <li><img src="../assets/image/o4.png" alt=""></li>
          </ul>
        </div>
        <div id="container3">
          <ul>
            <li><img src="../assets/image/o10.jpg" alt=""></li>
            <li><img src="../assets/image/o12.jpg" alt=""></li>
            <li><img src="../assets/image/o2.png" alt=""></li>
            <li><img src="../assets/image/o3.png" alt=""></li>
          </ul>
        </div>
        <div id="container4">
          <ul>
            <li><img src="../assets/image/o10.jpg" alt=""></li>
            <li><img src="../assets/image/o10.jpg" alt=""></li>
            <li><img src="../assets/image/o10.jpg" alt=""></li>
            <li><img src="../assets/image/o10.jpg" alt=""></li>
          </ul>
        </div>
        <div class="pages">

        </div>
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
    }
  }
</script>
