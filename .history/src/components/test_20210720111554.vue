<template>
  <div @click="click" class = 'test'>
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
    click() {
      alert('click!'+ e)
    }
  }
};
</script>

<style scoped>
  .test{
    color: red;
  }
</style>
