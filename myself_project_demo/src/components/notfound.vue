<template>
  <div style="width:500px;margin:0 auto;text-align:center">
   <h1>404 Page Not Found</h1>
   <h3>{{count}}s秒钟自动返回上一页</h3>
  </div>
</template>

<script>
  export default {
    mounted(){
      this.timer=setInterval(()=>{
        this.count--;
        //判断是否到了0结点
        if(this.count<1){
          clearInterval(this.timer);
          this.timer=null
          this.$router.go(-1)
        }
      },1000)
    },
    beforeDestroy(){
      if(this.timer){
        clearInterval(this.timer)
      }
    },
    data(){
      return {
        count:10,
        timer:null
      }
    }
  }
</script>
