<template>
<div>
  <Header/>
  <div class="proWrap">
    <div :class="{on: loginWay}">
      <div class="cont">
        <div class="logo">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
      </div>
      <div class="btn">
        <div class="login" @click.prevent="handleClick">
          <i class="iconfont icon-shouji icon"></i>
          <span>手机号码登录</span>
        </div>
        <div class="login">
          <i class="iconfont icon-xinfeng icon"></i>
          <span>邮箱账号登录</span>
        </div>
        <div class="register">
          <span>手机号码快捷注册</span>
          <i class="iconfont icon-arrow-right-copy-copy icon"></i>
        </div>
      </div>
      <div class="other">
        <div class="item">
          <i class="iconfont icon-weixin icon"></i>
          <span>微信</span>
        </div>
        <div class="item">
          <i class="iconfont icon-qq icon"></i>
          <span>QQ</span>
        </div>
        <div class="item">
          <i class="iconfont icon-weibo icon"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
    <div :class="{on: !loginWay}">
      <div class="phoneLogin">
        <div class="logo1">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <form class="inptWrap">
          <div class="msg">
            <input type="text" placeholder="请输入手机号码">
          </div>
          <div class="msg">
            <input type="text" placeholder="请输入短信验证码">
            <a href="#">获取验证码</a>
          </div>
          <div class="question">
            <span>遇到问题?</span>
            <span>使用密码验证登录</span>
          </div>
        </form>
        <div class="btn">
          <div class="login">
            <span>登录</span>
          </div>
          <div class="login">
            <span>其他登录方式</span>
          </div>
          <div class="register">
            <span>注册账号</span>
            <i class="iconfont icon-arrow-right-copy-copy icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import Header from '../../components/Header/Header'
  export default {
    data () {
      return {
        loginWay: true, //true登录界面 false手机登录
        phone: ''
      }
    },
    methods: {
      handleClick () {
        this.loginWay = false
      }
    },
    components: {
      Header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .proWrap
    width 100%
    margin-top 0.88rem
    position relative
    .btn
      margin-bottom 2.05rem
      padding 0 0.4rem
      width 6.7rem
      height 2.92rem
      .login
        margin-bottom 0.32rem
        text-align center
        line-height 0.9rem
        color #fff
        font-size 0.32rem
        background-color $red
        width 100%
        height 0.9rem
        border 1px solid $red
        border-radius 0.05rem
        &:nth-child(2)
          background-color $bc
          color $red
        >i
          display inline-block
          margin-right 0.05rem
          font-size 0.40rem
          width 0.42rem
          height 0.42rem


      .register
        font-size 0.28rem
        color #333
        text-align center


    .other
      top 11.3rem
      left 0
      width 100%
      display flex
      flex-flow row nowrap
      justify-content center
      position absolute
      .item
        padding 0 0.3rem
        border-right 1px solid #979797
        color #7f7f7f
        font-size 0.28rem
        width 1.12rem
        height 0.4rem
        &:nth-child(3)
          border-right 0

    >div
      display none
      &.on
        display block
      .cont
        flex-flow column nowrap
        width 100%
        display flex
        align-items center
        .logo
          padding 1.6rem 0
          width 100%
          height  0.9rem
          text-align center
          >img
            height 100%


      .phoneLogin
        background-color white
        flex-flow column nowrap
        width 100%
        height 100%
        display flex
        align-items center
        .logo1
          margin-top 0.36rem
          width 100%
          height  0.64rem
          text-align center
          >img
            height 100%
        .inptWrap
          box-sizing border-box
          padding 0.8rem 0 0 0.4rem
          width 100%
          height 4.6rem
          .msg
            bottom-border-1px(#666)
            height 0.9rem
            width 6.7rem
            line-height 0.9rem
            display flex
            align-items center
            margin-bottom: 0.32rem
            >a
              display inline-block
              margin-left 0.4rem
              padding 0 0.15rem
              border 1px solid #333
              border-radius 0.1rem
              height 0.5rem
              line-height 0.5rem
              font-size 0.24rem
            input
              outline none
              height 0.5rem
          .question
            height 0.9rem
            width 6.7rem
            line-height 0.9rem
            display flex
            align-items center
            margin-bottom: 0.32rem
            justify-content space-between
            >span
              font-size 0.28rem
              color #666
        .logo
          padding 1.6rem 0
          width 100%
          height  0.9rem
          text-align center
          >img
            height 100%
        .btn
          margin-bottom 2.05rem
          padding 0 0.4rem
          width 6.7rem
          height 2.92rem
          .login
            margin-bottom 0.32rem
            text-align center
            line-height 0.9rem
            color #fff
            font-size 0.32rem
            background-color $red
            width 100%
            height 0.9rem
            border 1px solid $red
            border-radius 0.05rem
            &:nth-child(2)
              background-color $bc
              color $red
            >i
              display inline-block
              margin-right 0.05rem
              font-size 0.40rem
              width 0.42rem
              height 0.42rem


          .register
            font-size 0.28rem
            color #333
            text-align center

        .other
          top 11.3rem
          left 0
          width 100%
          display flex
          flex-flow row nowrap
          justify-content center
          position absolute
          .item
            padding 0 0.3rem
            border-right 1px solid #979797
            color #7f7f7f
            font-size 0.28rem
            width 1.12rem
            height 0.4rem
            &:nth-child(3)
              border-right 0
</style>
