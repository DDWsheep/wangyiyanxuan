<template>
<div>
  <Header/>
  <div class="explore-wrapper">
    <div class="explore">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(banner, index) in explore.banner" :key="index">
            <img :src="banner.picUrl" alt="">
            <div class="content">
              <div class="tag">{{banner.subTitle}}</div>
              <div class="mainTitle">{{banner.title}}</div>
              <div class="desc">{{banner.desc}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="explore-tap">
        <div class="tap-wrap">
          <div class="tap" v-for="(item, index) in explore.column" :key="index">
            <img :src="item.picUrl" alt="">
            <div class="count">{{item.articleCount}}</div>
            <div class="title ellipsis">{{item.title}}</div>
          </div>
        </div>
      </div>
      <Split></Split>

      <Recommend :recommend="explore.recommend"></Recommend>
      <TenFifteen :tenfifteen="explore.tenfifteen"></TenFifteen>
      <Best :zhen="explore.zhen"></Best>
      <Look></Look>
      <MoreShows :findMore="explore.findMore"></MoreShows>
    </div>
    <div class="backTop">
      <i class="iconfont icon-unie624 icon" @click="backTop"></i>
    </div>
  </div>
</div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import Header from '../../components/Header/Header'
  import Recommend from './components/Recommend'
  import TenFifteen from './components/TenFifteen'
  import Best from './components/Best'
  import Look from './components/Look'
  import MoreShows from './components/MoreShows'
  export default {
    computed: {
      ...mapState(['explore'])
    },
    mounted () {
      this.$store.dispatch('getExplore', () => {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            slidesPerView : 1.15,
            spaceBetween: 15,
            loop: true,
            autoplay: true,
            centeredSlides : true,
          });
        })

        new BScroll('.explore-tap', {
          scrollX: true,
          click: true
        })
      })

      this.exploreScroll = new BScroll('.explore-wrapper', {
        click: true
      })


    },
    methods: {
      backTop () {
        this.exploreScroll.scrollTo(0, 0, 300)

      }
    },
    components: {
      Header,
      Recommend,
      TenFifteen,
      Best,
      Look,
      MoreShows
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .explore-wrapper
    width 100vw
    height 10.56rem
    margin-top 0.88rem
  .explore
    width 100%
    background-color #fff
    .swiper-container
      width: 100%
      height 4.32rem
      display flex
      align-items center
      .swiper-wrapper
        line-height 4.32rem
        height 3.9rem
        width: 6.7rem
        .swiper-slide
          position relative
          width 6.7rem
          height 3.85rem
          img
            border-radius 0.1rem
            height 3.85rem
            width: 6.7rem
          .content
            position absolute
            top 0
            left 0
            bottom 0
            right 0
            margin auto
            display flex
            align-items center
            justify-content center
            flex-direction column
            width 4.66rem
            height 1.98rem
            background-color rgba(255, 255, 255, .9)
            .tag
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
              font-size 0.32rem
              line-height 0.48rem
              color #333333
              margin-top 0.16rem
              font-weight 700
            .desc
              font-size 0.24rem
              color #333333
              line-height 0.36rem
              margin-top 0.04rem


    .explore-tap
      display flex
      padding 0.32rem 0.3rem 0.28rem
      width 6.9rem
      height 2.26rem
      .tap-wrap
        display flex
        flex-flow row nowrap
        >.tap
          height 2.1rem
          width 1.64rem
          margin-right 0.24rem
          position relative
          img
            display block
            width 100%
          .count
            top 0
            right 0.1rem
            width 1.32rem
            height 0.32rem
            font-size 0.24rem
            color #fff
            text-align right
            background-color rgba(0, 0, 0, 0.1)
            position absolute
          .title
            width 100%
            text-align center
            line-height 1
            font-size 0.18rem
            margin-top 0.22rem

  .backTop
    bottom 1.12rem
    right 0.1rem
    position fixed
    z-index 1
    >i
      background-color rgba(255,255,255,0.7)
      border-radius 50%
      color #666
      font-size 0.88rem
      line-height 1rem
      text-align center
      width 1rem
      height 1rem
      display block

</style>
