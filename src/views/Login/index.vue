<template>
  <div class="ms-login-back flex">
    <div class="sys-title">爱心云健康后台管理系统</div>
    <div class="ms-logo"></div>
  </div>
  <div class="ms-login">
     <div class="login">
            <div class="title">
                爱心云健康<br />
                后台管理系统
            </div>
            <el-form ref="form" :model="form" class="form">
                <el-form-item prop="loginName" :rules="{ required: true, message: '请输入手机号', trigger: 'blur' }">
                    <el-input maxlength="11" type="text" prefix-icon="el-icon-mobile-loginName" placeholder="请输入手机号" clearable :disabled="loading" v-model="form.loginName">
                    </el-input>
                </el-form-item>
                <el-form-item prop="password" :rules="{ required: true, message: '请输入验证码', trigger: 'blur' }">
                    <el-input type="text" prefix-icon="el-icon-lock" placeholder="请输入验证码" maxlength="4" clearable :disabled="loading" v-model="form.password" @keyup.enter.native="onSubmit">
                        <el-button slot="append" :loading="codeLoading" v-text="btnText" @click.native="toSendSMSCode"></el-button>
                    </el-input>
                </el-form-item>

                <el-form-item>
                    <el-button :loading="loading" class="submit" type="primary" @click="onSubmit">{{loading ? '登录中，请稍候...' : '登录'}}</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="build-version">
            当前版本：<span v-text="projectVersion"></span>
        </div>
        <el-dialog :visible.sync="isVisibleRoleSelection" :close-on-click-modal="false" width="25%" title="请选择登录角色" custom-class="dialog-select-role" top="30vh">
            <el-row class="dialog-body">
                <el-radio-group v-model="roleToLogin">
                    <el-radio v-for="info in userInfoList" :key="info.systemRole" :label="info.systemRole">{{ info.externalName }}</el-radio>
                </el-radio-group>
            </el-row>
            <el-row slot="footer" class="dialog-footer">
                <el-button @click.native="handleCancel">取消</el-button>
                <el-button type="primary" @click.native="handleConfirm" :loading="loading">确定</el-button>
            </el-row>
        </el-dialog>
    <!-- <el-button type="primary" @click="hello">登 录</el-button> -->
    

  </div>
</template>
<script setup lang="ts">
  let  timer: any = null;
  let codeLoading: Boolean = false;
  let  btnText: String = '发送短信验证码';
  let form = {loginName: '',password: '',};
  let  loading: Boolean = false;
   let isVisibleRoleSelection: boolean = false;
   let roleToLogin: string = '';
   let  userInfoList: Array<any> = [];
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

  .login {
    background: rgba(255, 255, 255, 0.9);
    width: 410px;
    max-height: 360px;
    // border: 1px solid #e6e6e6;
    padding: 24px;
    box-shadow: 1px 2px 12px rgba(0, 0, 0, 0.2);
    .title {
      line-height: 32px;
      font-size: 28px;
      color: $primaryColor;
      margin-bottom: 30px;
      text-align: center;
    }
    .form {
      width: 70%;
      margin: 0 auto;
      .submit {
        margin-top: 10px;
        width: 100%;
      }
    }
  }
  .build-version {
    color: #949494;
    position: absolute;
    top: calc(50% + 210px);
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .checkbox-as-manager {
    justify-content: flex-start;
    margin-bottom: 10px;
    padding-right: 10px;
    .checkbox {
     .el-checkbox__input {
        vertical-align: middle;
      }
       .el-checkbox__label {
        color: #666;
      }
    }
  }
}
</style>
