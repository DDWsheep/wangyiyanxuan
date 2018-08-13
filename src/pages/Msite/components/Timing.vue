<template>
  <div>
    <div class="timing-wrap">
      <div class="timing-container">
        <div class="timing-left">
          <div class="title">严选限时购</div>
          <div class="countdown">
            <span class="hours time">00</span>
            <span class="colon">:</span>
            <span class="mins time">00</span>
            <span class="colon">:</span>
            <span class="secs time">00</span>
          </div>
          <div class="next-title">下一场14:00开始</div>
        </div>
        <div class="timing-right">
          <img src="http://yanxuan.nosdn.127.net/25c7279ef37c6836bb6010d03f8a5caf.png?imageView&quality=85&thumbnail=330x330" alt="">
          <div class="price">
            <span class="pl">¥98</span>
            <span class="pr">¥139</span>
          </div>
        </div>
      </div>
    </div>
    <Split/>
  </div>

</template>

<script>
  export default {
    name: ""
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .timing-wrap
    width 100%
    background-color white
    .timing-container
      box-sizing border-box
      width 100%
      height 3.8rem
      padding 0.3rem 0.56rem 0.4rem
      display flex
      flex-flow row nowrap
      .timing-left
        padding-top 0.8rem
        height 2.4rem
        width 3.34rem
        .title
          color #333
          letter-spacing 0.12rem
          font-size 0.36rem
          line-height 0.36rem
          margin-bottom 0.24rem

        .countdown
          height 0.56rem
          .time
            display inline-block
            border-radius 0.05rem
            background-color #444
            text-align center
            line-height 0.56rem
            color #fff
            width 0.62rem
            height 0.56rem
        .next-title
          color #333
          font-size 0.24rem
          height 0.24rem
          margin-top 0.4rem

      .timing-right
        width 3.2rem
        height 3.2rem
        position: relative
        img
          width 100%
        .price
          width 0.96rem
          height: 0.96rem
          top 1.88rem
          right 0.2rem
          border-radius 0.48rem
          color #fff
          font-size 0.24rem
          text-align center
          background-color rgba(244,143,24,.95)
          position absolute
          .pl
            display block
            margin-top 0.2rem
          .pr
            &::before
              position absolute
              content: '';
              top: 20%;
              bottom: 0;
              margin: auto;
              width: 100%;
              left: -0.05rem;
              background: #fff;
              display block
              height 0.02rem

</style>
