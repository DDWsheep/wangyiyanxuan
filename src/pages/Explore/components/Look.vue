<template>
  <div>
    <header class="explore-header">
      <span>严选LOOK</span>
    </header>
    <div class="look-content">
      <img src="//yanxuan.nosdn.127.net/ee71b291048ab4e84a003e4f8451531c.jpg?imageView&quality=75" alt="">
      <div class="lookInfo">
        <div class="author">
          <img src="//yanxuan.nosdn.127.net/3a7d911bd60ddd75b7dab5758d8c879b.jpg?imageView&quality=75&thumbnail=48y48" alt="">
          <span>g**h</span>
        </div>
        <div class="text">上次买了一瓶尝了一下，满意。这次买六瓶装，可可为很浓，不过偏甜。口感浓稠，有可咀嚼的颗粒。喜欢这个味道。</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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

  .look-content
    width 100%
    >img
      width 100%
    .look-content
      float left
      width 3.58rem
      height 2.72rem
      padding 0 0.3rem 0 0.2rem
      display flex
      justify-content center
      flex-flow column nowrap
    .lookInfo
      width 6.9rem
      height 2.04rem
      padding 0.24rem 0.3rem 0.46rem
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

      .text
        line-height 1.6
        font-size 0.32rem

</style>
