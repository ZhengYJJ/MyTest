<template>
<!-- <div>1</div> -->
  <el-menu :default-openeds="['1', '3']">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>菜单</template>
      <el-menu-item-group>
        <el-menu-item index="1-1" @click="click('/home/test')">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>

export default {
  methods:{
    click(path){
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>

</style>
