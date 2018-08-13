<template>
  <div>
    <div class="wrap" v-for="cate in cateList" :key="cate.id">
      <header class="list-header">
        <span>{{cate.name}}好物</span>
      </header>
      <div class="goods">
        <div class="goods-warp">
          <div class="list" v-if="index<7" v-for="(item, index) in cate.itemList" :key="index">
            <div class="goods-img">
              <img :src="item.primaryPicUrl" alt="">
            </div>
            <div class="description ellipsis">{{item.simpleDesc}}</div>
            <div class="tag" v-if="item.promTag">
              <span>{{item.promTag}}</span>
            </div>
            <div class="name ellipsis">{{item.name}}</div>
            <div class="price">¥{{item.retailPrice}}</div>
          </div>
          <div class="more">
            <div class="more-text">
              <span>更多{{cate.name}}好物</span>
              <i class="iconfont icon-icon-- icon"></i>
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
    props: {
      cateList: Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  .wrap
    width 100%
    background-color #fff
  .list-header
    display flex
    flex-flow row nowrap
    align-items center
    justify-content center
    width 100%
    font-size 0.32rem
    height 1.1rem
    span
      margin-right 0.1rem
  .goods

    width 100%
    background #ffffff
    .goods-warp
      padding-left 0.2rem
      display flex
      flex-flow row wrap
      .list
        width 3.45rem
        height 5.54rem
        margin-right 0.2rem
        .goods-img
          width 3.45rem
          height 3.45rem
          background #f4f4f4
          z-index 0
          img
            width 100%
            height 100%
        .name
          margin 0.1rem 0
          padding 0 0.1rem
          color #333333
          font-size 0.28rem
          line-height 0.34rem
        .tag
          width 100%
          padding-left 0.1rem
          height 0.3rem
          margin 0.2rem 0 0  0.04rem
          span
            display inline-block
            background-color #f48f18
            color #fff
            border-radius 2px
            padding 0.05rem 0.16rem
            margin-bottom 0.01rem
            text-align center
            height 0.2rem
            line-height 0.2rem
            font-size 0.24rem
        .description
          width 3.45rem
          box-sizing border-box
          margin-bottom 0.14rem
          line-height 0.68rem
          font-size 0.24rem
          padding 0 0.1rem
          color #9F8A60
          background-color #f1ece2
        .price
          padding 0 0.1rem
          color $red
          line-height 1
          font-size 0.28rem
        &:last-of-type
          border 0.08rem solid #f4f4f4
          height 2.64rem
          line-height 2.64rem
          text-align center
          span
            font-size 0.28rem
            color #333333
      .more
        width 3.45rem
        height 4.13rem
        background-color $bc
        margin-right 0.2rem
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
