<template>
<div class="category-wrap">
  <div class="category-header">
    <div class="search">
      <i class="iconfont icon-sousuo2 icon"></i>
      <span class="placeholder">搜索商品, 共11784款好物</span>
    </div>
  </div>
  <div class="cateNavWrap">
    <ul class="nav">
      <li class="item" :class="{active: current === index}"
          v-for="(item, index) in category"
          :key="index" @click="gitTab(index)">{{item.name}}</li>
    </ul>
  </div>

  <div class="subCateList" v-if="category[current]">
    <div class="pic">
      <img :src="category[current].bannerUrl" alt="">
    </div>
    <div class="cateList">
      <div class="hd">
        <div class="inner">{{category[current].name}}分类</div>
      </div>
      <ul class="list">
        <li class="cateItem" v-for="(item, index) in category[current].subCateList" :key="index">
          <img :src="item.wapBannerUrl" alt="">
          <span>{{item.name}}</span>
        </li>

      </ul>
    </div>
  </div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data () {
      return{
        current: 0
      }
    },
    computed: {
      ...mapState(['category'])
    },
    mounted(){
      this.$store.dispatch('getCategory', () =>{
        this.$nextTick(() => {
          new BScroll('.cateNavWrap', {
            click: true
          })
        })

      })

    },
    methods: {
      gitTab (index) {
        this.current = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .category-wrap
    width 100%
    height 11.48rem
    background-color #fff
    .category-header
      bottom-border-1px(#d9d9d9)
      background-color  white
      width 100%
      height 0.88rem
      display flex
      flex-flow row nowrap
      align-items center
      padding 0.16rem 0.3rem
      box-sizing border-box
      .search
        display: flex
        flex-flow row nowrap
        align-items center
        justify-content center
        height 0.56rem
        width 6.9rem
        font-size 0.28rem
        background-color #ededed
        border-radius 0.1rem
        color #666
        .icon
          display inline-block
          width 0.32rem
          height 0.32rem
          font-size 0.32rem
          margin-right 0.1rem


    .cateNavWrap
      clearFix()
      float left
      position relative
      width 1.62rem
      .nav
        width 100%
        padding 0.4rem 0 1.38rem
        .item
          width 100%
          height 0.5rem
          text-align center
          line-height 0.5rem
          margin-top 0.4rem
          &:nth-child(1)
            margin-top 0
          &.active
            color $red
            font-size 0.36rem
            position: relative
            &::before
              content: ' ';
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              width: 0.06rem;
              background-color: $red;
      &::after
        content: '';
        position: absolute;
        background-color: rgba(0,0,0,.15);
        top: 0;
        bottom: 0;
        width: 1px;
        transform-origin: 100% 50% 0;
        right: 0;

    .subCateList
      margin-left 1.62rem
      padding 0.3rem 0.3rem 0.21rem
      width 5.28rem
      .pic
        width 100%
        >img
          width 100%
      .cateList
        clearFix()
        width 100%
        .hd
          height 1.08rem
          position relative
          .inner
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
            font-size 0.24rem
            color #333
            &::after
              position absolute
              top 50%
              right 110%
              content: ' ';
              display: block;
              width: 0.4rem;
              height: 0.02rem;
              background-color: #d9d9d9;
            &::before
              position absolute
              top 50%
              left 110%
              content: ' ';
              display: block;
              width: 0.4rem;
              height: 0.02rem;
              background-color: #d9d9d9;

        .list
          width 100%
          .cateItem
            width 33.33%
            float left
            height 2.16rem
            text-align center
            img
              width 1.44rem
              height 1.44rem
            span
              font-size 0.24rem

</style>
