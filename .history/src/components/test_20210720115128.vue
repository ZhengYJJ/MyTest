<template>
  <!-- <div @click="click" v-bind:class = "bindclass"> -->
  <div @click="click" :class ="className" :id ="id">
    {{flag ? message : 'test'}}
  </div>
</template>

<script>
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
      alert("click!" + e);
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
