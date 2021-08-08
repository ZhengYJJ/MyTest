<template>
  <!-- <div @click="click" v-bind:class = "bindclass"> -->
  <div @click="click" :class="{ bindclass: flag }" v-bind:id="dynamicId">
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
#dynamicId{
  color: blue
}
</style>
