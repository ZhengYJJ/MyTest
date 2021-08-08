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
    click:function(e) {
      alert('click!')
    }
  }
};
</script>

<style scoped>
  .test{
    color: red;
  }
</style>
