<template>
  <div class="root">
    <div class="login">
      <div class="item-input">
        用户名：<el-input v-model="input" placeholder="请输入用户名"></el-input>
        密  码：<el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      pwd: ''
    };
  },
};
</script>

<style scoped>
  .root{
    width: 100%;
    height: 100%;
    /* background-color: rgba(168, 191, 255, 1); */
  }
</style>