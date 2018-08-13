<template>
  <div>
    <div class="GoodsSale">
      <header class="sub-header">
        <span>专题精选</span>
        <i class="iconfont icon-rightarrow icon"></i>
      </header>
      <div class="subjects">
        <div class="subjects-warp">
          <div class="slide" v-for="topic in topicList" :key="topic.id">
            <img :src="topic.itemPicUrl" alt="">
            <div class="description">
              <h4 class="title ellipsis">{{topic.title}}</h4>
              <span class="price">{{topic.priceInfo}}元起</span>
            </div>
            <div class="text ellipsis">{{topic.subtitle}}</div>
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
      topicList: Array
    },
    mounted () {
      this.$nextTick(() => {
        new BScroll('.subjects', {
          scrollX: true,
          click: true
        })
      })
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' >
  @import '../../../common/stylus/mixins.styl'
  .GoodsSale
    width 100%
    height 5.63rem
    background-color #fff
  .sub-header
    display flex
    flex-flow row nowrap
    align-items center
    justify-content center
    width 100%
    font-size 0.32rem
    height 1.1rem
    span
      margin-right 0.1rem
  .subjects
      margin-left: auto;
      margin-right: auto;
      position: relative;
      overflow: hidden;
      display flex
      padding-left  0.3rem
      padding-bottom 0.36rem
      .subjects-warp
        padding-right 0.3rem
        display flex
        flex-flow row nowrap
        align-items center
        justify-content center
        .slide
          width 5.75rem
          box-sizing border-box
          padding-right 0.21rem
          img
            width 100%
            height 3.22rem
            border-radius 0.08rem
            margin-bottom 0.16rem
          .description
            height 0.41rem
            margin-bottom 0.02rem
            font-size 0.28rem
            .title
              width 4.1rem
              float left
              color #333333
            .price
              float right
              color $red
          .text
            height 0.36rem
            font-size 0.24rem
            color #7f7f7f
</style>
