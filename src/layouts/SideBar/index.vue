<template>
    <el-menu
    active-text-color="rgb(64, 158, 255)"
    background-color="rgb(48, 65, 86)"
    default-active="/home"
    class="el-menu-vertical-demo"
    text-color="#fff"
    :collapse="isCollapse"
    router
    @open="handleOpen"
    @close="handleClose"
  >
    <div class="web-title">
      <span v-show="!isCollapse">后台管理系统</span>
      <span v-show="isCollapse">Admin</span>
    </div>
    <!-- 菜单 -->
    <el-menu-item index="/home">
      <el-icon><document /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>文章管理</span>
      </template>
        <el-menu-item index="/article">
          <template #title>
            <el-icon><Message /></el-icon>
            <span>文章列表</span>
          </template>
        </el-menu-item>
       
        <el-menu-item index="1-2">
          <template #title>
            <el-icon><Filter /></el-icon>
            <span>item two</span>
          </template>
        </el-menu-item>
        <el-menu-item index="1-3">
          <template #title>
            <el-icon><Finished /></el-icon>
            <span>item three</span>
          </template>
        </el-menu-item>
      <el-sub-menu index="1-4">
        <template #title>
          <el-icon><ZoomIn /></el-icon>
          <span>item four</span>
        </template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><IconMenu /></el-icon>
        <span>轮播图管理</span>
      </template>

      <el-menu-item index="2-1">
        <template #title>
          <el-icon><UserFilled /></el-icon>
        <span>item one</span>
        </template>
      </el-menu-item>
      
      <el-menu-item index="2-2">
        <template #title>
          <el-icon><HelpFilled /></el-icon>
          <span>item two</span>
        </template>
      </el-menu-item>
    </el-sub-menu>
    
    <el-menu-item index="/setting">
      <el-icon><Setting /></el-icon>
      <template #title>系统设置</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref,defineProps } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

// 声明 props
const props = defineProps({
  isCollapse:{
   type:Boolean,
   default:false
  }
})
// 将 props.isCollapse 转为响应式变量
const isCollapse = ref(props.isCollapse)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const setIsCollapse = (collapse: boolean) => {
  // 修改 isCollapse
  isCollapse.value = collapse
}
// 暴露属性和方法，提供父组件访问
defineExpose({ setIsCollapse })
</script>

<style lang="scss" scoped>
/* 网站名称 */
.web-title {
  height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  border-bottom: 0.5px solid var(--el-menu-border-color);
  background-color: rgb(48, 65, 86);
  color: white;
}

.el-menu-vertical-demo {
  height: 100%;
}

.el-menu-vertical-demo.el-menu--collapse {
  width: 63px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>