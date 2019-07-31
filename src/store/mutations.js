import * as types from "./mutation-types";

export default {
  increment(state, payload) {
    // 变更状态
    state.nums = state.nums + payload;
  },
  changeNamedata(state, payload) {
    state.namedata = { ...state.namedata, ...payload };
  },
  [types.SET_NUMS](state, nums) {
    // state必写
    state.nums = nums;
  }
};
