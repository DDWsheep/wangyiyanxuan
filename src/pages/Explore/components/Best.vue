<template>
  <div>
    <div class="explore-rcmd" v-if="zhen">
      <div class="container">
        <header class="explore-header">
          <span>{{zhen.name}}</span>
        </header>
        <div class="mainPos">
          <img :src="zhen.Item[0].picUrl" alt="">
          <div class="topicTag">{{zhen.Item[0].nickname}}</div>
          <div class="title">
            <span>{{zhen.Item[0].title}}</span>
          </div>
        </div>


        <div class="mainPos">
          <div class="topicInfo">
            <div class="topicTitle">{{zhen.Item[1].title}}</div>
          </div>
          <div class="topicPic">
            <img :src="zhen.Item[1].picUrl" alt="">
            <div>{{zhen.Item[1].typeName}}</div>
          </div>
        </div>

        <div class="mainPos">
          <div class="topicInfo">
            <div class="topicTitle">{{zhen.Item[2].title}}</div>
          </div>
          <div class="topicPic">
            <img :src="zhen.Item[2].picUrl" alt="">
            <div>{{zhen.Item[2].typeName}}</div>
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
      zhen: Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
