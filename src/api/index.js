
//api接口
import ajax from './ajax'

//首页轮播图
export const reqBanner = () => ajax('/banner')
//首页轮播图下policyDescList
export const reqPolicy = () => ajax('/policy')

