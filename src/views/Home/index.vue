<template>
    <el-container class="container">
      <el-aside class="left-aside">
        <side-bar></side-bar>
      </el-aside>
      <el-container>
        <el-header class="top-header">Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer class="bottom-footer">Footer</el-footer>
      </el-container>
    </el-container>
</template>

<script setup lang="ts">
  import SideBar from "@/layouts/SideBar/index.vue"
</script>

<style  scoped lang="scss">
  .container{
    height:100%;
    .left-aside{
      background:rgb(48, 65, 86);
      max-width:200px;
    }
    .top-header{
      background:cyan;
    }
    .bottom-footer{
      background:red;
    }
  }
</style>
