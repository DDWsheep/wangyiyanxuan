<template>
  <div>
    <div class="tenFifteen-wrap">
      <header class="tenFifteen-header">
        <span>十点一刻</span>
      </header>
      <div class="tenFifteen">
        <div class="wrapper">
          <div class="list">
            <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png" alt="">
            <div class="topicWrap">
              <div class="topic">今日话题</div>
              <div class="mainTitle">生活中哪些瞬间</div>
              <div class="desc">曾经让你热泪盈眶</div>
              <div class="people">
                <div class="avatar">
                  <img src="//yanxuan.nosdn.127.net/42169ce3298aaf43b924f787acc923ef?imageView&thumbnail=48y48" alt="">
                  <img src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48" alt="">
                  <img src="//nos.netease.com/mail-online/8e810f7d0b188fb65ed45baf39e52566/mail180x180.jpg?imageView&thumbnail=48y48" alt="">
                  <img src="//yanxuan.nosdn.127.net/42169ce3298aaf43b924f787acc923ef?imageView&thumbnail=48y48" alt="">
                  <span>475人参与话题</span>
                </div>
              </div>
            </div>
          </div>
          <div class="list">
            <div class="all">
              <div class="more-text">
                <span>查看全部话题</span>
                <i class="iconfont icon-rightarrow icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Split/>
  </div>


</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props: {
      tenfifteen: Array
    },
    mounted () {
      this.$nextTick(() => {
        this.scroll = new BScroll('.tenFifteen', {
          scrollX: true,
          click: true
        })
      })

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .tenFifteen-wrap
    box-sizing border-box
    padding 0 0.3rem
    width 100%
    .tenFifteen-header
      display flex
      flex-flow row nowrap
      align-items center
      justify-content center
      width 100%
      font-size 0.32rem
      height 1.2rem
      span
        margin-right 0.1rem


    .tenFifteen
      width 100%
      display flex
      .wrapper
        display flex
        flex-flow row nowrap
      .list
        position relative
        box-sizing border-box
        pading 0.38rem 0.4rem 0.79rem
        margin-right 0.3rem
        height 4.41rem
        width 5.8rem
        .topicWrap
          position absolute
          left 0
          top 0
          bottom 0
          right 0
          display flex
          align-items center
          flex-direction column
          box-sizing border-box
          padding 0.38rem 0.4rem 0.79rem
          margin-right 0.3rem
          .topic
            position relative
            font-size 0.2rem
            color #7f7f7f
            line-height 0.3rem
            padding  0 0.08rem
            &:before,&:after
              content ''
              position absolute
              top 0
              bottom 0
              margin auto
              width 0.24rem
              height 1px
              background-color #999999
            &:before
              left -0.24rem
            &:after
              right -0.24rem
          .mainTitle
            font-size 0.36rem
            line-height 0.48rem
            color #333333
            margin-top 0.4rem
            font-weight 700
          .desc
            font-size 0.24rem
            color #333333
            line-height 0.36rem
            margin-top 0.16rem
          .people
            width 100%
            height 0.48rem
            line-height 0.48rem
            position absolute
            left 0
            bottom 1.2rem
            text-align center
            img
              margin-right -0.15rem
              border-radius 50%
              padding 0
              width 0.48rem
              height 0.48rem
            span
              font-size 0.24rem


        >img
          width 5.8rem !important

        .all
          box-sizing border-box
          width 5.6rem
          height 3.8rem
          border 0.1rem solid #e6e6e6
          background-color #fafafa
          .more-text
            box-sizing border-box
            width 100%
            height 100%
            display flex
            justify-content center
            padding 1.28rem 0
            color #666
            >span
              font-size 0.32rem
            >.icon
              margin-left 0.1rem
              display inline-block
              font-size 0.36rem



</style>
