<template>
  <div class="goods-wrap" ref="goodScroll">
    <div class="goods" >
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in banner" :key="index">
            <img :src="item.picUrl" alt="">
          </div>
        </div>
        <!-- Add Scrollbar -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="policy-desc">
        <div class="desc" v-for="(item, index) in home.policyDescList" :key="index">
          <img :src="item.icon">
          <span>{{item.desc}}</span>
        </div>
      </div>
      <Split/>

      <div class="brand-container">
        <header class="brand-header">
          <span>品牌制造商直供</span>
          <i class="iconfont icon-rightarrow icon"></i>
        </header>
        <div class="brand">
          <div class="brand-item">
            <h4>CK制造商</h4>
            <div class="price">
              <span>25</span><span class="right">元起</span>
            </div>
            <i class="icon"></i>
            <img src="http://yanxuan.nosdn.127.net/e57c3fb16c4633c292d8c0e7cb053a6f.png?imageView&thumbnail=355x0&quality=65">
          </div>
          <div class="brand-item">
            <h4>Nine West制造商</h4>
            <div class="price">
              <span>209</span><span class="right">元起</span>
            </div>
            <i class="icon"></i>
            <img src="http://yanxuan.nosdn.127.net/cc056d931b009298769d65b94175d696.png?imageView&thumbnail=355x0&quality=65">
          </div>
          <div class="brand-item">
            <h4>海外制造商</h4>
            <div class="price">
              <span>9.9</span><span class="right">元起</span>
            </div>
            <i class="icon"></i>
            <img src="http://yanxuan.nosdn.127.net/5e2f6d68ca4cf25b18d6573eafa2a4d4.png?imageView&thumbnail=355x0&quality=65">
          </div>
          <div class="brand-item">
            <h4>Ralph Lauren制造商</h4>
            <div class="price">
              <span>19</span><span class="right">元起</span>
            </div>
            <img src="http://yanxuan.nosdn.127.net/7f55f337f98a198ac3d629847171d5d2.png?imageView&thumbnail=355x0&quality=65">
          </div>

        </div>
      </div>
      <Split/>

      <div class="newGoods">
        <header class="newHeader">
          <span class="newFirst">新品首发</span>
          <div class="all">
            <span>查看全部</span>
            <i class="iconfont icon-arrow-right-copy-copy icon"></i>
          </div>
        </header>
        <div class="goodGrid">
          <div class="list">
            <div class="goodGrid-item" v-for="item in home.newItemNewUserList" :key="item.id">
              <div class="wraper">
                <img :src="item.primaryPicUrl">
              </div>
              <div class="title">
                七夕推荐
              </div>
              <div class="name ellipsis">{{item.name}}</div>
              <div class="newItemDesc ellipsis">{{item.simpleDesc}}</div>
              <div class="price">￥{{item.retailPrice}}</div>
            </div>
            <div class="more">
              <div class="more-text">
                <span>查看全部</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Split/>

      <div class="newGoods">
        <header class="hotHeader">
          <span class="hotRecm">人气推荐.好物精选</span>
          <div class="all">
            <span>查看全部</span>
            <i class="iconfont icon-arrow-right-copy-copy icon"></i>
          </div>
        </header>
        <div class="goodGrid hotGrid">
          <div class="list">
            <div class="goodGrid-item" v-for="item in home.popularItemList" :key="item.id">
              <div class="wraper">
                <img :src="item.primaryPicUrl">
              </div>
              <div class="title">
                七夕推荐
              </div>
              <div class="name ellipsis">{{item.name}}</div>
              <div class="newItemDesc ellipsis">{{item.simpleDesc}}</div>
              <div class="price">￥{{item.retailPrice}}</div>
            </div>
            <div class="more">
              <div class="more-text">
                <span>查看全部</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Split/>

      <Timing/>

      <div class="sale">
        <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="">
      </div>
      <Split/>

      <Subject :topicList="home.topicList"/>
      <GoodsList :cateList="home.cateList"/>

      <div class="copyright">
        <div class="content">
          <div class="bd">
            <a href="javascript:;" class="goApp">下载APP</a>
            <a href="javascript:;">电脑版</a>
          </div>
          <p class="desc">
            <span>网易公司版权所有 © 1997-2018</span>
            <br>
            <span>食品经营许可证：JY13301080111719</span>
          </p>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  import 'swiper/dist/css/swiper.min.css'
  import Timing from './Timing'
  import Subject from './Subject'
  import GoodsList from './GoodsList'
  export default {
    computed: {
      ...mapState(['home','banner'])
    },
    mounted () {
      //轮播
      this.$store.dispatch('getBanner', () => {

        this.$nextTick(() => {
          new BScroll('.goodGrid', {
            scrollX: true,
            click: true
          })
          new BScroll('.hotGrid', {
            scrollX: true,
            click: true
          })

          new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true,
            autoplay: true
          });


        })
        //home
        this.$store.dispatch('getHome', () => {
        this.$nextTick(() => {
          this.goodScroll = new BScroll(this.$refs.goodScroll, {
            click: true
          })
        })
      })

      })
    },

    components: {
      Timing,
      Subject,
      GoodsList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .goods-wrap
    width 100vw
    height 10.56rem
    margin-top 1.8rem
   .goods
     width 100%

    .swiper-container
      width: 100%
      img
        width: 100%
    .policy-desc
      background-color white
      width 100%
      height 0.72rem
      display flex
      flex-flow row nowrap
      align-items center
      .desc
        font-size 0.24rem
        height 100%
        padding 0 0.25rem
        line-height 0.72rem
        text-align center
        img
          width 0.32rem
          height 0.32rem
          vertical-align middle
    .brand-container
      width 100%
      background-color #fff
      .brand-header
        display flex
        flex-flow row nowrap
        align-items center
        justify-content center
        width 100%
        font-size 0.32rem
        height 1.1rem
        span
          margin-right 0.1rem
      .brand
        width 100%
        display flex
        flex-flow row wrap
        padding 0 0.16rem
        .brand-item
          background-color $bc
          position: relative
          width 3.55rem
          height 2.36rem
          margin 0 0.08rem 0.08rem 0
          h4
            color #333
            font-size 0.28rem
            margin-bottom 0.06rem
            padding 0.2rem 0 0 0.2rem
            height 0.33rem
          .price
            font-size 0.28rem
            margin-bottom 0.06rem
            padding-left 0.2rem
            span
              font-size 0.30rem
            .right
              font-size 0.24rem
          img
            width 3.55rem
            top 0
            left 0
            position: absolute

          .icon
            display block
            background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/new-5e42f2db1f.png") no-repeat center
            background-size: 100% 100%;
            width 0.64rem
            height 0.32rem
            margin-left 0.2rem


    .newGoods
      width 100%
      background-color white
      .hotHeader
        height 2.6rem
        margin-bottom 0.32rem
        position: relative
        background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png) no-repeat
        background-size: 100% 2.6rem
        .hotRecm
          top 40%
          left 30%
          transform translateY(-50%)
          color #B4A078
          font-size 0.36rem
          font-weight bold
          position: absolute

        .all
          height 0.56rem
          width 2.4rem
          top 60%
          left 35%
          line-height 0.56rem
          text-align center
          margin-top 0.16rem
          transform translateY(-50%)
          color #B4A078
          background-color #F4E9CB
          font-size 0.30rem
          font-weight bold
          position: absolute


      .newHeader
        height 2.6rem
        margin-bottom 0.32rem
        position: relative
        background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png) no-repeat
        background-size: 100% 2.6rem
        .newFirst
          top 40%
          left 40%
          transform translateY(-50%)
          color #8BA0B6
          font-size 0.36rem
          font-weight bold
          position: absolute

        .all
          height 0.56rem
          width 2.4rem
          top 60%
          left 35%
          line-height 0.56rem
          text-align center
          margin-top 0.16rem
          transform translateY(-50%)
          color #8BA0B6
          background-color #D8E5F1
          font-size 0.30rem
          font-weight bold
          position: absolute


      .goodGrid
        height 4.8rem
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        display flex
        .list
          display flex
          flex-flow row nowrap
          justify-content center
          .goodGrid-item
            margin-left 0.3rem
            width 2.8rem
            .wraper
              width 2.8rem
              background-color $bc
              img
                width 100%
            .title
              z-index: 1;
              padding 0.05rem
              margin 0.1rem 0 0.16rem 0.12rem
              height: 0.2rem
              background-color: #e5686d
              line-height: 0.2rem
              text-align: center;
              color: #fff;
              font-size: 0.18rem
              border-radius: 0.05rem
              display: inline-block;
              vertical-align: middle
            .name
              font-size 0.30rem
              height 0.33rem
              padding 0 0.1rem
              line-height 0.33rem
              margin-bottom 0.14rem
              color #333
            .newItemDesc
              font-size 0.24rem
              height 0.30rem
              padding 0 0.1rem
              line-height 0.33rem
              color #7f7f7f
              margin-bottom 0.14rem
            .price
              color $red
              padding 0 0.1rem
              font-size 0.30rem


          .more
            width 2.8rem
            height 2.8rem
            border 0.1rem solid $bc
            box-sizing border-box
            background-color #fff
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



    .sale
        width 100%
        height: 3rem
        img
          width 100%
    .copyright
      border-top 1px solid rgba(0,0,0,.15);
      background-color #414141
      .content
        text-align center
        padding 0.54rem 0.2rem 0.28rem 0.2rem
        .bd
          a
            display inline-block
            width 1.7rem
            height 0.6rem
            border: 1px solid #999;
            color #ffffff
            font-size 0.24rem
            line-height 0.62rem
            &.goApp
              margin-right 0.5rem
        .desc
          margin-top 0.36rem
          color #999999
          line-height 0.32rem
          span
            font-size 0.24rem
</style>
