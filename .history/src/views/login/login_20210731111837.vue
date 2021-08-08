<template>
  <div class="root">
    <div class="login">
      <div class="item-input">
        <el-input v-model="username" placeholder="请输入用户名"></el-input>
        <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
        <el-button type='primary' v-on:click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import server from '../../utils/request'
export default {
  data() {
    return {
      username: '',
      pwd: ''
    };
  },
  methods:{
    login(){
      const params = {
        name: this.$data.username,
        pwd: this.$data.pwd,
      }
      server.get('/login',{params: params}).then(res => {
        if(res.data.status === '0'){
          alert('success!')
          this.$router.push('/home')
        }
      }).catch(e => {
        alert(e)
      })

    }
  }
};
</script>

<style scoped>
  .root{
    width: 100%;
    height: 100%;
    /* background-color: rgba(168, 191, 255, 1); */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login{
    width: 200px;
    height: 200px
  }
</style>