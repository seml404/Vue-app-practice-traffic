<template>
  <div class="wrapper">
    <div class="traffic-lights">
      <div
        class="traffic-ligths-item traffic-ligths-item-green"
        :class="{ 'item-active': greenLightStatus }"
      ></div>
      <div class="traffic-ligths-item traffic-ligths-item-yellow"></div>
      <div class="traffic-ligths-item traffic-ligths-item-red"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      counter: 0,
    };
  },
  name: "App",
  components: {},
  methods: {
    ...mapMutations(["toggleLight"]),
    handleWithRed() {
      this.toggleLight({ light: "red" });
      setTimeout(() => this.toggleLight({ light: "red" }), 7000);
      setInterval(() => {
        this.toggleLight({ light: "red" });
      }, 500);
    },

    async working() {
      await this.handleWithRed();
    },
  },
  computed: {
    greenLightStatus() {
      return this.$store.getters.getGreenLight;
    },
    redLightStatus() {
      return this.$store.getters.getRedLight;
    },
    yellowLightStatus() {
      return this.$store.getters.getYellowLight;
    },
  },
  mounted() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  display: flex;
  max-width: 100px;
  margin: 0 auto;
}

.traffic-lights {
  border: 1px solid black;
}

.traffic-ligths-item {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: grey;
}

.traffic-ligths-item-green.item-active {
  background: green;
}
.traffic-ligths-item-yellow.item-active {
  background: yellow;
}
.traffic-ligths-item-red.item-active {
  background: red;
}
</style>
