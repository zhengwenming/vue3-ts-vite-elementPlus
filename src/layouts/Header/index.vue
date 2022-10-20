<template>
    <el-header class="top-header">
        <div @click="switchFoldChange" class="switch-btn">
            <el-icon v-if="showFold"><Fold /></el-icon>
            <el-icon v-else><Expand /></el-icon>
        </div>
        
    </el-header>
</template>
<script setup lang='ts'>

import {ref,defineEmits } from 'vue'
const emit = defineEmits(['foldChange'])
let showFold = ref(false)
 const switchFoldChange = ()=>{
    showFold.value =!showFold.value
    emit('foldChange',showFold.value)
}


</script>
<style lang="scss" scoped>
    .top-header {
        background-color: antiquewhite;
        .switch-btn{
            cursor: pointer;
            font-size: 24px;
            float: left;
            margin-top: 20px;
        }
    }
</style>