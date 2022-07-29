<template>
    <el-menu
    active-text-color="rgb(64, 158, 255)"
    background-color="rgb(48, 65, 86)"
    default-active="0"
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
    <el-menu-item index="0">
      <el-icon><document /></el-icon>
      <template #title>仪表盘</template>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
/* 网站名称 */
.web-title {
  height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  border-bottom: 1px solid var(--el-menu-border-color);
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