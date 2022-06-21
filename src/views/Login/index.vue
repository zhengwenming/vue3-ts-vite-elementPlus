<template>
  <div class="login-wrap">

        <div ref="backRef" class="ms-login-back"></div>

        <div ref="titleRef" class="sys-title">爱小心店铺后台管理系统</div>

        <div ref="logoRef" class="ms-logo"></div>

        <div class="ms-login">
            <h2 class="title" style="padding-top: 20px;">系统登录</h2>
           </div>
  </div>
</template>

<style scoped lang="scss">
.login-wrap {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-color: #f5f5f5;

    .ms-logo {
        position: absolute;
        background: url(@/assets/login-logo.jpg) no-repeat;
        width: 118px;
        height: 63px;
        top: 50%;
        left: 50%;
        margin: -300px 0px 0px 560px;
    }

    .ms-login-back {
        position: absolute;
        background: url(@/assets/login-bg.png) no-repeat;
        background-size: cover;
        width: 1366px;
        height: 768px;
        top: 50%;
        left: 50%;
        margin: -384px 0px 0px -684px;
    }

    .sys-title {
        position: absolute;
        font: bold 3em Tahoma, Helvetica, Arial, '宋体', sans-serif;
        color: #ffffff;
        top: 50%;
        left: 50%;
        margin: -300px 0px 0px -656px;
    }

    .ms-login {
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -200px 0px 0px 130px;
        background: rgba(255, 255, 255, 0.9);
        -webkit-border-radius: 15px;
        border-radius: 15px;
        -moz-border-radius: 15px;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;

        .login-container {
            background-clip: padding-box;
            width: 360px;
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
}
</style>