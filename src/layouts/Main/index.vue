<template>
    <el-container class="container">
      <el-aside class="left-aside"><SideBar/></el-aside>
      <el-container>
        <Header/>
        <el-main class="main-container">
          <router-view/>
        </el-main>
        <el-footer class="bottom-footer">Footer</el-footer>
      </el-container>
    </el-container>
</template>

<script setup lang="ts">
  import SideBar from "@/layouts/SideBar/index.vue";
import Header from "@/layouts/Header/index.vue";

  import { onMounted } from "vue-demi";
  import { useRouter,onBeforeRouteLeave,onBeforeRouteUpdate } from 'vue-router';
    const router =  useRouter();
    onMounted(()=>{
        console.log('onMounted');
    }),
    onBeforeRouteLeave ((to, from)=> {
    })
    onBeforeRouteUpdate (async (to, from) => {
    })
</script>

<style  scoped lang="scss">
  .container{
    height:100%;
    .left-aside{
      background:rgb(48, 65, 86);
      width: auto;
    }
    .main-container{
      padding:0;
    }
    .bottom-footer{
      background:red;
    }
  }
</style>
