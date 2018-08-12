
import {RECEIVE_BANNER} from './mutation-type'

export default {
  [RECEIVE_BANNER](state, {banner}) {
    state.banner = banner
  }
}
