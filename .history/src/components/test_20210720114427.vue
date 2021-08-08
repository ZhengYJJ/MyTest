<template>
  <!-- <div @click="click" v-bind:class = "bindclass"> -->
  <div @click="click" :class="class" :id="id">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      message: "TEST",
      flag: true,
      id: "div",
      class: "bindclass",
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
