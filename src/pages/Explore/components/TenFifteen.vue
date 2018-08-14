<template>
  <div>
    <div class="tenFifteen-wrap">
      <header class="tenFifteen-header">
        <span>十点一刻</span>
      </header>
      <div class="swiper-container tenFifteen">
        <div class="swiper-wrapper">
          <div class="swiper-slide list">
            <div class="topic">今日话题</div>
            <div>你有哪些租房经历</div>
            <div>聊聊租房神器</div>
            <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png" alt="">
            <div class="people">
              <div class="avatar">
                <img src="//yanxuan.nosdn.127.net/42169ce3298aaf43b924f787acc923ef?imageView&thumbnail=48y48" alt="">
                <img src="//yanxuan.nosdn.127.net/42169ce3298aaf43b924f787acc923ef?imageView&thumbnail=48y48" alt="">
                <img src="//yanxuan.nosdn.127.net/42169ce3298aaf43b924f787acc923ef?imageView&thumbnail=48y48" alt="">
                <img src="//yanxuan.nosdn.127.net/42169ce3298aaf43b924f787acc923ef?imageView&thumbnail=48y48" alt="">
                <span>475人参与话题</span>
              </div>
            </div>
          </div>
          <div class="swiper-slide list">
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
  export default {
    mounted () {
      new Swiper('.swiper-container', {
        slidesPerView : 1.15,
        spaceBetween: 20,
        loop: true,
        //autoplay: true,
        //centeredSlides : true,
      });
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
      background-color antiquewhite
      .list
        box-sizing border-box
        pading 0.38rem 0.4rem 0.79rem
        margin-right 0.3rem
        height 4.41rem
        width 5.8rem

        >img
          width 5.8rem !important

        .all
          box-sizing border-box
          width 5.6rem
          height 3.64rem
          border 0.1rem solid #e6e6e6
          background-color #fafafa
          margin-left 0.15rem
          .more-text
            display flex
            flex-flow column nowrap
            width 100%
            text-align center
            padding 1.28rem 0
            color #333
            >span
              display block
              margin-bottom 0.4rem
              font-size 0.32rem
            >.icon
              display block
              font-size 0.67rem



</style>
