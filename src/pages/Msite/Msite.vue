<template>
<div>
  <div class="nva-wrap">
    <div class="msite-header">
      <a href="javascript:;" class="logo"></a>
      <div class="msite-search">
        <i class="iconfont icon-sousuo1 icon"></i>
        <span class="placeholder">搜索商品, 共11784款好物</span>
      </div>
    </div>

    <div class="msite-nav-wrap" ref="navScroll">
      <div class="msite-nav">
        <div class="nav-tab" v-for="(list, index) in navList" :key="index" @click="switchTab(index)">
          <span class="nav-text" :class="{active: current===index}">{{list}}</span>
        </div>
      </div>
    </div>
  </div>

  <goods/>

</div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Goods from './components/Goods'
  export default {
    data () {
      return {
        navList: ['推荐', '居家', '鞋包服饰', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'],
        current: 0
      }
    },

    computed: {
      ...mapState(['banner', 'home'])
    },
    mounted () {

      //导航滑动
      this.scroll = new BScroll(this.$refs.navScroll, {
        scrollX: true,
        click: true
      })




    },

    methods: {
      switchTab (index) {
        this.current = index
      }
    },

    components: {
      Goods
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .nva-wrap
    background-color white
    margin-top 0
    width 100%
    position fixed
    left 0
    top 0
    z-index 100
    .msite-header
      background-color  white
      width 100%
      height 0.88rem
      display flex
      flex-flow row nowrap
      align-items center
      padding 0.16rem 0.3rem
      .logo
        background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png") no-repeat center
        width 1.38rem
        height 0.4rem
        margin-right 0.2rem
        display inline-block
        background-size: cover;
      .msite-search
        display: flex
        flex-flow row nowrap
        align-items center
        justify-content center
        height 0.56rem
        width 5.32rem
        font-size 0.28rem
        background-color #ededed
        border-radius 0.1rem
        color #666
        .icon
          font-size 0.32rem
          margin-right 0.1rem


    .msite-nav-wrap
      width 100%
      height 0.6rem
      overflow hidden
      display flex
      flex-flow row nowrap
      background-color white
      .msite-nav
        white-space nowrap
        height 0.6rem
        display flex
        padding 0 0.3rem
        .nav-tab
          margin-left: 0.48rem
          height 0.6rem
          &:nth-child(1)
            margin-left 0
          .nav-text
            position relative
            display inline-block
            padding 0 0.16rem
            font-size 0.28rem
            line-height 0.6rem
            text-align center
            color #333
            height 0.6rem
            &.active
              color: $red
              &::after
                content: ' ';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 0.04rem
                background-color: $red;



</style>
