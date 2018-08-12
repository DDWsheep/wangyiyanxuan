<!--开机组件-->
<template>
<div class="inter_wrap">
  <div class="inter_img">
    <img src="//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg" alt="">
    <img src="//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg" alt="">
  </div>
  <div class="inter_app">
    <img src="//yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg" alt="">
    <div class="btn"></div>
    <div @click="goTo('/msite')" class="inter_msite"></div>
  </div>
</div>
</template>

<script>
  export default {
    methods: {
      goTo (path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .inter_wrap
    height 100%
    background #eee
    display flex
    flex-direction column
    .inter_img
      width 100%
      margin-top 1.86rem
      img
        width 100%
    .inter_app
      width 100%
      margin-top -0.06rem
      position relative
      img
        vertical-align top
        width 100%
      .btn
        position absolute
        width 4.32rem
        height 0.98rem
        left 1.6rem
        top 0.98rem
        font-size 0.24rem
      .inter_msite
        display block
        position absolute
        left 2.4rem
        top 2.3rem
        width 2.54rem
        height 0.3rem


</style>
