<template>
<section class="cart">
  <header class="cart-header">
    <span class="logo">购物车</span>
    <span class="right">领券</span>
  </header>
  <div class="service">
    <ul>
      <li class="item">30天无忧退货</li>
      <li class="item">48小时快速退款</li>
      <li class="item">满88元免邮费</li>
    </ul>
  </div>
  <section class="cart_no_login">
    <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png">
    <h3>去添加点什么吧</h3>
    <button @click="goTo('/profile')">登录</button>
  </section>
</section>
</template>

<script>
  export default {
    methods: {
      goTo (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .cart  //订单
    width 100%
    .cart-header
      padding 0 0.3rem
      background: #fff
      display flex
      flex-flow row nowrap
      align-items center
      width 100%
      box-sizing border-box
      font-size 0.36rem
      height 0.88rem
      position: relative
      justify-content center
      .logo
        display inline-block
      .right
        display inline-block
        position: absolute
        top: 50%
        transform translateY(-50%)
        right: 0.58rem
        color $red
        font-size 0.28rem
    .service
      width 100%
      height: 0.7rem
      >ul
        box-sizing border-box
        padding 0 0.3rem
        width: 100%
        height 100%
        display flex
        flex-flow row nowrap
        justify-content space-between
        line-height 0.7rem
        >li
          font-size 0.24rem
    .cart_no_login
      padding-top 140px
      width 2.48rem
      margin 0 auto
      text-align center
      >img
        display block
        width 2.48rem
        height 2.48rem
      >h3
        padding 10px 0
        font-size 14px
        margin-top -0.3rem
        color #999
      >button
        margin 0.2rem 0 0 -1.16rem
        display inline-block
        background $red
        font-size 14px
        color #fff
        border 0
        width 4.8rem
        height 0.92rem
        padding 10px 20px

</style>
