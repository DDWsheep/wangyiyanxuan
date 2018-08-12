
import {
  RECEIVE_BANNER
} from './mutation-type'
import {
  reqBanner
} from "../api"

export default {
  //异步获取轮播信息
  async getBanner({commit, state}, cb){
    //异步获取商品列表
    const result = await reqBanner();
    if(result.code === 0){
      const banner = result.data;
      commit(RECEIVE_BANNER, {banner})
      //数据更新之后执行回调函数
      cb && cb()
    }
  },
}
