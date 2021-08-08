<template>
  <!-- <div @click="click" v-bind:class = "bindclass"> -->
  <div @click="click" :class ="className" :id ="id">
    {{this.$store.count}}
  </div>
</template>

<script>
import server from '../utils/request'
export default {
  name: "Test",
  data() {
    return {
      message: "TEST",
      flag: false,
      id: "div",
      className: "bindclass",
    };
  },
  methods: {
    click: function (e) {
      server.post('/verify/generate')
    },
  },
};
</script>

<style scoped>
.test {
  color: red;
}
.bindclass {
  color: green;
}
#div {
  color: blue;
}
</style>
