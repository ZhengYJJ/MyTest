<template>
  <div className = 'test'>
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
};
</script>

<style scoped>
  .test{
    color: red;
  }
</style>
