<template>
  <div class="ms-login-back flex">
    <div class="sys-title">爱心云健康后台管理系统</div>
    <div class="ms-logo"></div>
  </div>
  <div class="ms-login">
     <div class="login">
            <div :ref="refform" class="title">
                <div>爱心云健康</div>
                <div>后台管理系统</div>
            </div>
            <el-form  :model="form" :rules="rules" class="form" size="default" status-icon :hide-required-asterisk="false">
                <!-- <el-form-item prop="userName" :rules="{required: true, message: '账号不能为空', trigger: 'blur'}"> -->
                <el-form-item prop="userName" label="账号">
                    <el-input maxlength="20" prefix-icon="user" placeholder="请输入账号" clearable :disabled="loading" v-model="form.userName"></el-input>
                </el-form-item>

                <el-form-item prop="password" label="密码">
                    <el-input type="password" prefix-icon="lock" placeholder="请输入密码" clearable maxlength="20"  :disabled="loading" v-model="form.password" @keyup.enter.native="onSubmit"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button :loading="loading" class="submit" type="primary" @click="onSubmit(ruleFormRef)">{{loading ? '登录中，请稍候...' : '登录'}}</el-button>
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
  </div>
</template>
<script setup lang="ts">
import {ref,reactive,getCurrentInstance} from 'vue'
import type {FormRules,FormInstance } from 'element-plus'
import storage from '@/utils/storage';
import { useStore } from "vuex";
import { useRouter } from 'vue-router';

    const router =  useRouter();
    const form = reactive({userName: 'admin',password: '123456'});
    let loading = ref(false);
    let isVisibleRoleSelection = ref(false);
    let roleToLogin = ref('');
    let userInfoList: Array<any> = reactive([]);
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  userName: [
    {required: true, message: '账号不能为空', trigger: 'blur'},
    { min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur' },
  ],
  password: [
    {required: true, message: '密码不能为空', trigger: 'blur'},
    { min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur' },
  ],
})



     let refform = (el)=>{ 
      console.log(el)
      }
    const onSubmit =  (formEl: FormInstance | undefined)=>{

// ruleForm.validate().then((valid: boolean) => {
//                 if (valid) {
//                     if (state.form.email === 'admin') {
//                         router.push({ path: '/' });
//                     }
//                 }
//             });




      debugger
        if (!formEl) return
          formEl.validate((valid, fields) => {
             if (valid) {
                 console.log('submit!')
             } else {
                 console.log('error submit!', fields)
             }
          })
        loading.value = true;
        storage.setItem('password', form.password);
        storage.setItem('userName', form.userName);

        loading.value = false;
        // $router.replace({ path: '/', query: {} });
        router.push('home');
    }
   
  
   const handleCancel =()=>{
            isVisibleRoleSelection.value = false;
   }
   const handleConfirm =()=>{
    if (roleToLogin && userInfoList) {
            userInfoList.find(
                    (el) => el.systemRole ===roleToLogin
                )
        }
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
