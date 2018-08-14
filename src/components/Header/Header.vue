<template>
  <div class="header-wrap">
    <header class="header">
      <i class="iconfont icon-shouye icon shouye" @click="goTo('/msite')"></i>
      <a href="javascript:;" class="logo"></a>
      <div>
        <i class="iconfont icon-sousuo2 icon sousuo"></i>
        <i class="iconfont icon-gouwuche icon gouwuche"></i>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    methods: {
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header-wrap
    width 100%
    height 0.88rem
    position fixed
    left 0
    top 0
    z-index 100
    .header
      display: flex
      background-color #fafafa
      flex-flow row nowrap
      align-items center
      justify-content space-between
      position: relative
      padding 0 0.16rem 0 0.24rem
      height 0.88rem
      box-sizing border-box
      width 100%
      >a
        background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
        width 1.8rem
        height 0.48rem
        margin-left 0.4rem
        display inline-block
        background-size: cover;
      >div
        display flex
        flex-flow row nowrap
        align-content center
        margin-right 0.05rem
        >i
          margin-left 0.24rem
      .icon
        display block
        font-size 0.56rem
        text-align center
        line-height 0.64rem
        width 0.64rem
        height 0.64rem


</style>
