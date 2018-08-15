<template>
  <div class="moreShow">
    <div class="more-wrap">
      <div class="line">
        <div class="inner">更多精彩</div>
      </div>
      <div class="content">
        <div class="list" v-for="(item, index) in findMore" :key="index">
          <div class="listImg" v-if="item.picList===null">
            <img class="pic" :src="item.itemPicUrl" alt="">
          </div>
          <div class="listImgs" v-if="item.picList!==null">
            <img class="picl" :src="item.picList[0]" alt="">
            <img class="picr" :src="item.picList[1]" alt="">
            <img class="picr" :src="item.picList[2]" alt="">
          </div>
          <div class="decs ellipsis">{{item.title}}</div>
        </div>
       <!-- <div class="list" v-if="item.picList===null" v-for="(item, index) in findMore" :key="index">
          <div class="listImg">
            <img class="pic" :src="item.itemPicUrl" alt="">
          </div>
          <div class="decs">{{item.title}}</div>
        </div>-->


      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      findMore: Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .moreShow
    background-color $bc
  .more-wrap
    width 6.9rem
    margin 0 0.3rem 0.3rem
    .line
      height 1.4rem
      position relative
      .inner
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        font-size 0.28rem
        color #333
        &::after
          position absolute
          top 50%
          right 110%
          content: ' ';
          display: block;
          width: 2.64rem;
          height: 0.02rem;
          background-color: #d9d9d9;
        &::before
          position absolute
          top 50%
          left 110%
          content: ' ';
          display: block;
          width: 2.64rem;
          height: 0.02rem;
          background-color: #d9d9d9;
    .content
      width 100%
      .list
        background-color #fff
        padding 0.24rem
        margin-bottom 0.3rem
        height 4.5rem
        width 6.42rem
        position relative
        .listImg
          width 100%
          height 100%
          overflow hidden
          >.pic
            width 100%
            height 3.6rem

        .listImgs
          width 100%
          >.picl
            display block
            width 4.6rem
            height  3.6rem
            margin-right 0.04rem
            float left
          >.picr
            width 1.78rem
            height 1.78rem
            float right
            margin-bottom 0.04rem
        .decs
          position: absolute
          left 0.3rem
          bottom 0.24rem
          padding 0.28rem 0
          font-size 0.28rem
          width 100%
          height 0.33rem
</style>
