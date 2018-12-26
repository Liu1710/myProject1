<template>
  <div id="app">
    <!--<My_header/>-->
    <router-view/>
    <!--<My_footer/>-->
  </div>
</template>
<script>
  //引入页头和页尾
  //import Header from "@/components/Header"
  //import Footer from "@/components/Footer"
export default {
  //components:{
    //My_header:Header,
   // My_footer:Footer
 // }
}
</script>

<style>
@import "./assets/css/normalize.css";
@import "./assets/css/common.css";
@import "./assets/css/pages.css";
@import "./assets/css/about.css";
@import "./assets/css/contact.css";
@import "./assets/css/home.css";
@import "./assets/css/header.css";
@import "./assets/css/footer.css";
@import "./assets/css/wedding.css";
@import "./assets/css/sign-up.css";
@import "./assets/css/sign-in.css";
</style>
