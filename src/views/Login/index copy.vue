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
// 像El-Message这样的是不能自动引入的使用的时候还是要导入，
// import { ElMessage } from 'element-plus' ，而且样式会失效，在main.ts文件中加入以下代码，引入消息的样式文件（如果文件路径报错，在node_modules/element-plus目录下找找看）
// 参考链接：https://www.jianshu.com/p/13c405104ed8
// import {ElMessage } from 'element-plus'
// 备注：我发现文章中的说法有误，可以实现自动导入，样式也可以实现自动导入。在vite.config.ts中配置了自动导入后，直接使用ElMessage({message: '登录成功',type: 'success',})，无需import，无需关注样式，且样式不会丢失

// import IconBaseline5g from '~icons/ic/baseline-5g'
// import ArrowAlignTop from '~icons/line-md/arrow-align-top'
// import {Avatar} from 'element-plus'

const hello = () => {
  // ElMessageBox('测试')
ElMessage({
  message: '登录成功',
  type: 'success',
})
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
