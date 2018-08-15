# wangyiyanxuan

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


day01
## 创建脚手架
## 创建路由组件
## footer在组件中的显示
  在导入footer组件标签添加v-show="$route.meta.showFooter"
  在路由器模块中要显示footer的路由中添加
      meta: {
        showFooter: true
      }

day02
   1. swiper 滑动的外层容器小于内层内容容器形成滑动,
   2. 导航栏固定不动, 下面内容滑动, 如要设置导航栏的层级必须让导航栏脱离文档流
   3. 异步请求回来的数据渲染到页面, 需要等页面加载完毕, 两种方式
      1). 分发函数的回调函数+this.$nextTick()
      2). watch监视+this.$nextTick()
      个人喜欢用第一种, 但是一定要在action异步请求数据的函数写上回调函数


day03
  1. 页面首次加载报错, 一般都是三级表达式带来的问题, 用v-if解决
  2. swiper两翼留白滑动设置
      new Swiper('.swiper-container', {
                 slidesPerView : 1.15,  //显示的轮播的数量
                 spaceBetween: 20, //两翼留白的宽度
                 loop: true,
                 autoplay: true,
                 centeredSlides : true, //居中显示
               });


day04
  1. 同样的结构, 显示不同的效果, 用v-if判断
  2. 遍历的 :key 值写遍历到的数据的id值会报错
  3. 定时器不显示问题, 将时分秒单独放在data中



