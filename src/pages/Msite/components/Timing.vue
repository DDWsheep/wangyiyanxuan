<template>
  <div>
    <div class="timing-wrap">
      <div class="timing-container">
        <div class="timing-left">
          <div class="title">严选限时购</div>
          <div class="countdown">
            <!--<input type="text" class="hours time" v-model="timerArr[0]">-->
            <span class="hours time">{{hour}}</span>
            <span class="colon">:</span>
            <span class="mins time">{{min}}</span>
            <span class="colon">:</span>
            <span class="secs time">{{sec}}</span>
          </div>
          <div class="next-title">下一场{{nextTime}}:00开始</div>
        </div>
        <div class="timing-right">
          <img src="http://yanxuan.nosdn.127.net/25c7279ef37c6836bb6010d03f8a5caf.png?imageView&quality=85&thumbnail=330x330" alt="">
          <div class="price">
            <span class="pl">¥98</span>
            <span class="pr">¥139</span>
          </div>
        </div>
      </div>
    </div>
    <Split/>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        nextTime: 20,
        hour: null,
        min: null,
        sec: null,
        countTime: '2018-08-16 20:00:00'
      }
    },
    mounted () {
      this.$nextTick(() => {
        this._getTime()
        console.log(this.hour, this.min, this.sec);
      })
    },
    methods: {
      _getTime () {


        //获取当前时间
        let data = new Date();
        let now = data.getTime();
       /* let hour = data.getHours()//获取时
        let minutes = data.getMinutes()
        let second = data.getSeconds()
*/
        //设置截止时间
        let time  = this.countTime
        let endDate = new Date(time);
        let end = endDate.getTime();
        //时间差
        let leftTime = end-now;
        //定义变量 d,h,m,s保存倒计时的时间
        let h,m,s;
        if (leftTime>=0) {
          //d = Math.floor(leftTime/1000/60/60/24);
          h = Math.floor(leftTime/1000/60/60%24);
          m = Math.floor(leftTime/1000/60%60);
          s = Math.floor(leftTime/1000%60);
          if (h < 10) {
            h = '0' + h
          }
          if (m < 10) {
            m = '0' + m
          }
          if (s < 10) {
            s = '0' + s
          }

        } else {
          this.nextTime += 24
          if (this.nextTime >= 24) {
            this.nextTime = this.nextTime - 24 * parseInt(this.nextTime/24)
          }
        }


        this.hour = h
        this.min = m
        this.sec = s

        setInterval(this._getTime ,500);

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .timing-wrap
    width 100%
    background-color white
    .timing-container
      box-sizing border-box
      width 100%
      height 3.8rem
      padding 0.3rem 0.56rem 0.4rem
      display flex
      flex-flow row nowrap
      .timing-left
        padding-top 0.8rem
        height 2.4rem
        width 3.34rem
        .title
          color #333
          letter-spacing 0.12rem
          font-size 0.36rem
          line-height 0.36rem
          margin-bottom 0.24rem

        .countdown
          height 0.56rem
          .time
            display inline-block
            border-radius 0.05rem
            background-color #444
            text-align center
            line-height 0.56rem
            color #fff
            width 0.62rem
            height 0.56rem
        .next-title
          color #333
          font-size 0.24rem
          height 0.24rem
          margin-top 0.4rem

      .timing-right
        width 3.2rem
        height 3.2rem
        position: relative
        img
          width 100%
        .price
          width 0.96rem
          height: 0.96rem
          top 1.88rem
          right 0.2rem
          border-radius 0.48rem
          color #fff
          font-size 0.24rem
          text-align center
          background-color rgba(244,143,24,.95)
          position absolute
          .pl
            display block
            margin-top 0.2rem
          .pr
            &::before
              position absolute
              content: '';
              top: 20%;
              bottom: 0;
              margin: auto;
              width: 100%;
              left: -0.05rem;
              background: #fff;
              display block
              height 0.02rem

</style>
