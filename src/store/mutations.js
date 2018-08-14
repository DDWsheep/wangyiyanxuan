
import {
  RECEIVE_BANNER,
  RECEIVE_HOME,
  RECEIVE_EXPLORE,
  RECEIVE_CATEGORY
} from './mutation-type'

export default {
  [RECEIVE_BANNER](state, {banner}) {
    state.banner = banner
  },
  [RECEIVE_HOME](state, {home}) {
    state.home = home
  },
  [RECEIVE_EXPLORE](state, {explore}) {
    state.explore = explore
  },
  [RECEIVE_CATEGORY](state, {category}) {
    state.category = category
  }
}
