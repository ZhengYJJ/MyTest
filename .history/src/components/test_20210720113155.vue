<template>
  <div @click="click" :id= "bindclass">
     <!-- <div @click="click" :class= "{bindclass: flag}"> -->
    {{message}}
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      message: "TEST",
      flag: true
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
  #bindclass{
    color: green;
  }
</style>
