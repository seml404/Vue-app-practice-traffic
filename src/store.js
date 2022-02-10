import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      yellowIsActive: false,
      redIsActive: false,
      greenIsActive: false,
    };
  },
  getters: {
    getGreenLight(state) {
      return state.greenIsActive;
    },
    getYellowLight(state) {
      return state.yellowIsActive;
    },
    getRedLight(state) {
      return state.redIsActive;
    },
  },
  mutations: {
    toggleLight(state, values) {
      //   console.log(state, values);
      switch (values.light) {
        case "green":
          this.state.greenIsActive = !state.greenIsActive;
          break;
        case "red":
          this.state.redIsActive = !state.redIsActive;
          break;
        case "yellow":
          this.state.yellowIsActive = !state.yellowIsActive;
          break;
      }
    },
  },
  actions: {},
});

export default store;
