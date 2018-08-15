<template>
  <div>
    <div class="maskWrap" v-if="isMask">
      <div class="mask"></div>
      <i class="iconfont icon-close icon" @click="isMask=false"></i>
      <div class="boxWrap">
        <div class="modal">
          <div class="title">新人专享礼</div>
          <div class="subTitle">为你准备了一份专享礼</div>
          <div class="newUserItem">
            <div class="pic">
              <img src="http://yanxuan.nosdn.127.net/15c8d56c8399c66338ca7a08bbb9ef9e.jpg?imageView&quality=85&thumbnail=232y232" alt="">
            </div>
            <div class="desc">
              <div class="goodTitle">
                <span>埃及进口长绒棉毛巾</span>
              </div>
              <div class="goodTag">
                <span>Ralph Lauren</span>
              </div>
              <div class="price">
                <span class="pl">¥32.00</span>
                <span class="pr">¥199.00</span>
              </div>
            </div>
          </div>
          <div class="btn">
            <div class="item">
              <span>领券立减¥10.00</span>
            </div>
            <div class="item">
              <span>查看更多特惠商品</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isMask: true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .maskWrap
    position: fixed
    top 0
    bottom: 0
    right 0
    left 0
    z-index 9999
    .mask
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      z-index 0
      background-color rgba(0,0,0,0.5)
    .icon
      display block
      top 0.6rem
      right 0.3rem
      width 0.64rem
      height 0.64rem
      font-size 0.56rem
      position fixed
      z-index 2

    .boxWrap
      top 50%
      left 50%
      transform translate(-50%, -50%)
      z-index 1
      position absolute
      .modal
        display flex
        flex-flow column nowrap
        align-items center
        width 5.82rem
        height 6.32rem
        padding 0.3rem 0.24rem
        border-radius 0.3rem
        background-color #fff
        .title
          width: 100%
          height 0.59rem
          position relative
          font-size 0.36rem
          font-weight 700
          color #333
          text-align center
          &:before,&:after
            content ''
            position absolute
            top 0
            bottom 0
            margin auto
            width 0.4rem
            height 1px
            background-color #333
          &:before
            left 25%
          &:after
            right 25%

        .subTitle
          margin-top 0.04rem
          font-size 0.24rem
          width 100%
          height 0.36rem
          text-align center
        .newUserItem
          width 100%
          margin-top 0.5rem
          clearFix()
          .pic
            width 2.32rem
            height 2.32rem
            float left
            >img
              width 100%
          .desc
            background-color $bc
            height 1.46rem
            padding 0.43rem 0
            margin-left 0.08rem
            float right
            display flex
            flex-flow column nowrap
            width 3.42rem
            .goodTitle
              font-size 0.28rem
              color: #333
            .goodTag
              position relative
              margin-top: 0.15rem
              color: #333
              >span
                font-size 0.2rem
                position absolute
                top 0
                left 0
                display block
                border 1px solid #999
                border-radius 0.05rem
            .price
              font-size 0.32rem
              margin-top 0.5rem
              .pl
                color $red
              .pr
                color #999
                position: relative
                display inline-block
                &::before
                  position absolute
                  content: '';
                  top: 50%;
                  left 0
                  width: 100%;
                  background: #999;
                  display block
                  height 0.02rem
        .btn
          margin-top 0.4rem
          width 5.82rem
          height 2.92rem
          .item
            margin-bottom 0.32rem
            text-align center
            line-height 0.88rem
            color #fff
            font-size 0.3rem
            background-color $red
            width 100%
            height 0.88rem
            border 1px solid $red
            border-radius 0.05rem
            &:nth-child(2)
              background-color $bc
              color $red




</style>
