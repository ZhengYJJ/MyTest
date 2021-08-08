<template>
  <div @click="click" class= "test">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      message: "TEST",
    };
  },
  methods: {
    click:function(e) {
      alert('click!'+ e)
    }
  }
};
</script>

<style scoped>
  .test{
    color: red;
  }
  .bindclass{
    color: green;
  }
</style>
