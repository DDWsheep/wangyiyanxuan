
import {
  RECEIVE_BANNER,
  RECEIVE_HOME,
  RECEIVE_EXPLORE,
  RECEIVE_CATEGORY
} from './mutation-type'
import {
  reqBanner,
  reqHome,
  reqExplore,
  reqCategory
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
  
  //异步获取explore信息
  async getExplore({commit, state}, cb){
    const result = await reqExplore();
    if(result.code === 0){
      const explore = result.data;
      commit(RECEIVE_EXPLORE, {explore})
      //数据更新之后执行回调函数
      cb && cb()
    }
  },
  
  //异步获取category信息
  async getCategory({commit, state}, cb){
    const result = await reqCategory();
    if(result.code === 0){
      const category = result.data;
      commit(RECEIVE_CATEGORY, {category})
      //数据更新之后执行回调函数
      cb && cb()
    }
  },
}
