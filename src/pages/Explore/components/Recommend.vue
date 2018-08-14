<template>
  <div>
    <div class="explore-rcmd" v-if="recommend">
      <div class="container">
        <header class="explore-header">
          <span>{{recommend.name}}</span>
        </header>
        <div class="mainPos">
          <img :src="recommend.Item[0].picUrl" alt="">
          <div class="topicTag">{{recommend.Item[0].nickname}}</div>
          <div class="title">
            <span>{{recommend.Item[0].title}}</span>
            <span>{{recommend.Item[0].priceInfo}}元起</span>
          </div>
        </div>

        <div class="mainPos">
          <div class="topicInfo">
            <div class="author">
              <img :src="recommend.Item[1].picUrl" alt="">
              <span>{{recommend.Item[1].nickname}}</span>
            </div>
            <div class="topicTitle">{{recommend.Item[1].title}}</div>
          </div>
          <div class="topicPic">
            <img :src="recommend.Item[1].avatar" alt="">
            <div>{{recommend.Item[1].typeName}}</div>
          </div>
        </div>

        <div class="mainPos">
          <div class="topicInfo">
            <div class="author">
              <img :src="recommend.Item[2].picUrl" alt="">
              <span>{{recommend.Item[2].nickname}}</span>
            </div>
            <div class="topicTitle">{{recommend.Item[2].title}}</div>
          </div>
          <div class="topicPic">
            <img :src="recommend.Item[2].avatar" alt="">
            <div>{{recommend.Item[2].typeName}}</div>
          </div>
        </div>

        <div class="mainPos">
          <img src="//yanxuan.nosdn.127.net/3ca3fd809d7c2a42035934a3b82e0e6e.jpg?imageView&quality=75" alt="">
          <div class="topicTag">严选推荐</div>
          <div class="title">
            <span>海边度假必看攻略</span>
            <span>19.9元起</span>
          </div>
        </div>

        <div class="mainPos">
          <div class="topicInfo">
            <div class="author">
              <img src="//yanxuan.nosdn.127.net/9ce9e886414139b30e80d0614c671585.png?imageView&quality=75&thumbnail=48y48" alt="">
              <span>配件组: 羊羊</span>
            </div>
            <div class="topicTitle">鞋柜里独宠的舒适好鞋</div>
          </div>
          <div class="topicPic">
            <img src="//yanxuan.nosdn.127.net/2517fed0f43656af095aeadf473fb900.jpg" alt="">
            <div>挑款师推荐</div>
          </div>
        </div>
        <div class="mainPos">
          <div class="topicInfo">
            <div class="author">
              <img src="//yanxuan.nosdn.127.net/275bdc66f4d3f841c8879933f2593a27.png?imageView&quality=75&thumbnail=48y48" alt="">
              <span>饮食组: 肉肉</span>
            </div>
            <div class="topicTitle">半价吃到鲜爽小龙虾</div>
          </div>
          <div class="topicPic">
            <img src="//yanxuan.nosdn.127.net/64360c9a450908a76411b5db9eb1efd9.jpg" alt="">
            <div>挑款师推荐</div>
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
      recommend: Object
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .explore-rcmd
    box-sizing border-box
    padding 0 0.3rem
    width 100%
    .container
      width 6.9rem
      .explore-header
        display flex
        flex-flow row nowrap
        align-items center
        justify-content center
        width 100%
        font-size 0.32rem
        height 1.2rem
        span
          margin-right 0.1rem

      .mainPos
        box-sizing border-box
        border 0.01rem solid #d9d9d9
        color #333
        margin-bottom 0.3rem
        border-radius 0.05rem
        width 100%
        position relative
        >img
          width 100%
        .title
          padding 0.24rem 0.2rem 0.67rem
          display flex
          font-size 0.32rem
          flex-flow row nowrap
          align-items center
          justify-content space-between
          box-sizing border-box
        .topicTag
          padding 0.05rem 0.2rem
          top 0.2rem
          left 0.2rem
          background-color #fff
          border-radius 0.24rem
          font-size 0.24rem
          position: absolute

        .topicInfo
          float left
          width 3.58rem
          height 2.72rem
          padding 0 0.3rem 0 0.2rem
          display flex
          justify-content center
          flex-flow column nowrap
          .author
            width 100%
            margin-bottom 0.25rem
            font-size 0.2rem
            >img
              width 0.48rem
              height 0.48rem
              border-radius 0.28rem
              vertical-align middle

          .topicTitle
            font-size 0.32rem
        .topicPic
          display inline-block
          height 2.72rem
          width 2.8rem
          position relative
          >img
            width 100%
          >div
            padding 0.05rem 0.2rem
            top 0.2rem
            left 0.2rem
            background-color #fff
            border-radius 0.24rem
            font-size 0.24rem
            position absolute



</style>
