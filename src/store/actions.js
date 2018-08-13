
import {
  RECEIVE_BANNER,
  RECEIVE_HOME
} from './mutation-type'
import {
  reqBanner,
  reqHome
} from "../api"

export default {
  //异步获取轮播信息
  async getBanner({commit, state}, cb){
    const result = await reqBanner();
    if(result.code === 0){
      const banner = result.data;
      commit(RECEIVE_BANNER, {banner})
      //数据更新之后执行回调函数
      cb && cb()
    }
  },
  
  //异步获取home信息
  async getHome({commit, state}, cb){
    const result = await reqHome();
    if(result.code === 0){
      const home = result.data;
      commit(RECEIVE_HOME, {home})
      //数据更新之后执行回调函数
      cb && cb()
    }
  },
}
