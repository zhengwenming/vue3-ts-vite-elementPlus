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
            <el-form ref="refform" :model="form" class="form">
                <el-form-item prop="loginName" :rules="{ required: true, message: '请输入手机号', trigger: 'blur' }">
                    <el-input maxlength="11" type="text" prefix-icon="user" placeholder="请输入手机号" clearable :disabled="loading" v-model="form.loginName">
                    </el-input>
                </el-form-item>
                <el-form-item prop="password" :rules="{ required: true, message: '请输入验证码', trigger: 'blur' }">
                    <el-input type="text" prefix-icon="lock" placeholder="请输入验证码" maxlength="4" clearable :disabled="loading" v-model="form.password" @keyup.enter.native="onSubmit">
                      <template v-slot:append>
                        <el-button  v-text="btnText" :loading="codeLoading"  @click.native="toSendSMSCode"></el-button>
                      </template>
                    </el-input>

                </el-form-item>

                <el-form-item>
                    <el-button :loading="loading" class="submit" type="primary" @click="onSubmit">{{loading ? '登录中，请稍候...' : '登录'}}</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="build-version">
            当前版本：<span v-text="$projectVersion"></span>
        </div>
        <el-dialog v-model="isVisibleRoleSelection" :close-on-click-modal="false" width="25%" title="请选择登录角色" custom-class="dialog-select-role" top="30vh">
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
import {ref,reactive,getCurrentInstance} from 'vue'
import storage from '@/utils/storage';
import tokenkey from '@/utils/token-key';
import { log } from 'console';
import { useStore } from "vuex";


    let timer: any = null;
    let codeLoading: Boolean = false;
    let btnText = ref('发送短信验证码');
    let form = reactive({loginName: '',password: ''});
    let loading = ref(false);
    let isVisibleRoleSelection = ref(false);
    let roleToLogin = ref('');
    let userInfoList: Array<any> = reactive([]);
    const store = useStore();
   const onSubmit = ()=>{
    const refform = ref(null)
    // const {proxy} = getCurrentInstance();
    debugger
    console.log(refform.value);
    
        let formData: any = $refs['refform'];
        loading.value = true;
        formData.validate((valid: Boolean) => {
            if (valid) {
                login({ ...form })
                    .then((res) => {
                        if (!res.data) return;
                        if (Array.isArray(res.data)) {
                            const tempUserInfoList = res.data;
                            if (tempUserInfoList.length > 0) {
                                userInfoList = tempUserInfoList;
                                if (tempUserInfoList.length === 1) {
                                    handleLoginSuccess(tempUserInfoList[0]);
                                } else {
                                    isVisibleRoleSelection.value = true;
                                }
                            }
                        } else {
                            handleLoginSuccess(res.data);
                        }
                    })
                    .catch((err) => {
                        form = {
                            loginName: form.loginName,
                            password: '',
                        };
                    })
                    .finally(() => {
                        loading.value = false;
                    });
            } else {
                loading.value = false;
            }
        });
    }
   
  const handleLoginSuccess = (userInfo: any)=>{
        storage.setItem(tokenkey, userInfo.token);
        storage.setItem('permision', JSON.stringify(userInfo.permision));
        storage.setItem('userImId', userInfo.imId);
        setUserInfo(userInfo);
        loading.value = false;
        // $router.replace({ path: '/', query: {} });
   }
   const handleCancel =()=>{
            isVisibleRoleSelection.value = false;
   }
   const handleConfirm =()=>{
    if (roleToLogin && userInfoList) {
            handleLoginSuccess(
                userInfoList.find(
                    (el) => el.systemRole ===roleToLogin
                )
            );
        }
   }
   const onBeforeUnmount =()=>{
      clearInterval(timer);
        timer = null;
    }
   const toSendSMSCode =()=>{
    console.log('toSendSMSCode');
    
        if (timer !== null) return;

        if (!form.loginName || form.loginName.length != 11) {
            ElMessage({
                type: 'error',
                message: '请输入正确的手机号',
            });
            return
        }
        window.localStorage.removeItem('token');
        codeLoading = true;
        store.sendSMSCode({
            phone: form.loginName,
            type: 'Login',
        })
            .then((res) => {
                codeLoading = false;
                let seconds = 60;
                btnText = `${seconds}s后重新发送`;
                timer = setInterval(() => {
                    seconds--;
                    if (seconds <= 0) {
                        clearInterval(timer);
                        timer = null;
                        btnText = '重新发送验证码';
                    } else {
                        btnText = `${seconds}s后重新发送`;
                    }
                }, 1000);
            })
            .catch((err) => {
                codeLoading = false;
            });
    }
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
    color: orange;
    position: absolute;
    top: calc(50% + 210px);
    left: 40%;
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
