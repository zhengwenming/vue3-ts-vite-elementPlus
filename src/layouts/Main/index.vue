<template>
    <el-container class="container">
      <el-aside class="left-aside">
        <!-- 侧边栏 -->
        <SideBar ref="sidebar" :isCollapse="isCollapse"></SideBar>
      </el-aside>
      <el-container>
        <Header @foldChange="foldChangeAction"></Header>
        <el-main class="main-container">
          <router-view></router-view>
        </el-main>
        <el-footer class="bottom-footer">Footer</el-footer>
        
        <!-- <Footer></Footer> -->
      </el-container>
    </el-container>
</template>

<script setup lang="ts">
  import { ref ,onMounted} from "vue";
  import SideBar from "@/layouts/SideBar/index.vue";
  import Header from "@/layouts/Header/index.vue";
  // import Footer from "@/layouts/Footer/index.vue";
  import { useRouter,onBeforeRouteLeave,onBeforeRouteUpdate } from 'vue-router';
    const isCollapse = ref(false)
    // 获取 SideBar 组件的引用，注意变量名和你要获取的 ref 名一致
    const sidebar = ref<InstanceType<typeof SideBar>>();
    const router =  useRouter()
    onMounted(()=>{
        console.log('onMounted');
    })
    onBeforeRouteLeave ((to, from)=> {
    })
    onBeforeRouteUpdate (async (to, from) => {
    })
    const foldChangeAction = (val:boolean) => {
      isCollapse.value = val;
      sidebar.value?.setIsCollapse(isCollapse.value)
    }
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
      background:moccasin;
    }
  }
</style>
