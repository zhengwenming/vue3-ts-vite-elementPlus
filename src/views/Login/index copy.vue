<template>
  <div class="ms-login-back flex">
    <div class="sys-title">爱心云健康后台管理系统</div>
    <div class="ms-logo"></div>
  </div>
  <div class="ms-login">
    <div class="login-container">
      <h2 class="title" style="padding-top: 20px">系统登录</h2>
    </div>
    <el-button type="primary" @click="hello">登 录</el-button>
     <el-icon><i-ep-aim /></el-icon>
    <el-icon :size="20"><i-carbon-accessibility /></el-icon>
     <el-icon :size="20"><i-ic-baseline-5g /></el-icon>
      <el-icon :size="20"><i-line-md-arrow-align-top /></el-icon>

    <!-- <el-progress :percentage="50">
      <el-button type="success">Content</el-button>
    </el-progress>
    <el-icon :size="88" color="red">
       <ArrowAlignTop/>
    </el-icon>
    <IconBaseline5g />
     <el-icon :size="20">
         <i-carbon-accessibility />
      </el-icon> -->
  </div>
</template>
<script setup lang="ts">
// import {ElMessage } from 'element-plus'
// import IconBaseline5g from '~icons/ic/baseline-5g'
// import ArrowAlignTop from '~icons/line-md/arrow-align-top'
// import {Avatar} from 'element-plus'

const hello = () => {
  // ElMessageBox('测试')
// ElMessage({
//   message: '登录成功',
//   type: 'success',
// })
};
</script>
<style scoped lang="scss">
.ms-login-back {
  background: url(@/assets/login-bg.png) no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  align-items: flex-start;

  .sys-title {
    font: bold 3em Tahoma, Helvetica, Arial, "宋体", sans-serif;
    color: #ffffff;
    flex: 1;
    text-align: left;
    margin-top: 6%;
    margin-left: 6%;
  }
  .ms-logo {
    background: url(@/assets/login-logo.jpg) no-repeat;
    width: 118px;
    height: 63px;
  }
}

.ms-login {
  position: absolute;
  right: 5%;
  top: 40%;
  background: rgba(255, 255, 255, 0.9);
  -webkit-border-radius: 15px;
  border-radius: 15px;
  -moz-border-radius: 15px;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;

  .login-container {
    background-clip: padding-box;
    width: 560px;
    padding: 10px 20px 0px 20px;
    // background: #fff;

    .title {
      margin: 0px auto 30px auto;
      text-align: center;
      color: #505458;
    }

    /*控制发送短信验证码按钮被点击后的按钮背景色*/
    .disabled {
      background-color: #ddd;
      border-color: #ddd;
      color: #57a3f3;
      cursor: not-allowed; // 鼠标变化
    }
  }
}
</style>
