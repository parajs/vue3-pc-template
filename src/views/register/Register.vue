<template>
  <CPage>
    <CHeader />
    <el-main>
      <el-row :gutter="10">
        <el-col
          :xs="22"
          :sm="20"
          :md="12"
          :lg="8"
          :xl="6"
          style="margin: 0 auto"
        >
          <el-card class="box-card">
            <el-form
              :model="form"
              :rules="rules"
              ref="ruleForm"
              class="text-center"
            >
              <h3>注册</h3>
              <el-form-item prop="email">
                <el-input
                  size="large"
                  v-model="form.email"
                  placeholder="请输入邮箱"
                ></el-input>
              </el-form-item>
              <el-form-item prop="code" class="mt-8">
                <el-input
                  size="large"
                  v-model="form.code"
                  placeholder="请输入验证码"
                ></el-input>
                <div class="getCodeBtn" @click="getVertifyCode">
                  {{ isSending ? '发送验证码中' : '获取验证码' }}
                </div>
              </el-form-item>
              <el-form-item prop="password" class="mt-8">
                <el-input
                  size="large"
                  v-model="form.password"
                  placeholder="请输入密码6-18英文、数字、符号的组合"
                ></el-input>
              </el-form-item>
              <el-form-item class="mt-8">
                <el-button
                  size="large"
                  style="width: 100%"
                  type="primary"
                  round
                  @click="onSubmit"
                  >注册</el-button
                >
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </CPage>
</template>

<script lang="ts" setup>
import { codeGet, readerRegister } from '@/api';
import { ElMessage } from 'element-plus';
import { md5Encryption } from '@/utils';

const router = useRouter();
const store = useStore();
const form = reactive({
  code: '',
  email: '',
  password: ''
});

const isSending = ref(false);
const ruleForm = ref();
const submitRef = ref(false);
const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const validator = (v: string) => {
  return /\S{6,8}/.test(v);
};

const rules = reactive({
  email: [
    {
      validator(rule: any, value: any, callback: any) {
        if (value === '') {
          callback(new Error('请输入邮箱账号'));
        } else if (!reg.test(value)) {
          callback(new Error('邮箱账号不合法'));
        } else {
          callback();
        }
      },
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    }
  ],
  password: [
    {
      validator(rule: any, value: any, callback: any) {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (!validator(value)) {
          callback(new Error('密码6-18英文、数字、符号的组合'));
        } else {
          callback();
        }
      },
      trigger: 'blur'
    }
  ]
});

const getVertifyCode = () => {
  if (!isSending.value) {
    if (form.email == '') {
      ElMessage.error('请输入邮箱账号');
      return;
    }

    if (reg.test(form.email)) {
      isSending.value = true;
      const { data, isFinished } = codeGet({
        email: form.email,
        type: 'register'
      });
      watch(isFinished, () => {
        isSending.value = false;
      });

      watch(data, () => {
        ElMessage.info('邮件发送成功');
      });
    } else {
      ElMessage.error('邮箱账号不合法');
    }
  }
};

const onSubmit = () => {
  ruleForm.value.validate((valid: boolean) => {
    if (valid) {
      form.password = md5Encryption(form.password);
      submitRef.value = true;
      const { data, isFinished } = readerRegister(form);
      watch(data, () => {
        ElMessage.info('注册成功');
        store
          .dispatch('user/loginPassword', {
            username: form.email,
            password: form.password
          })
          .then(() => {
            router.push({ name: 'Home' });
          });
      });

      watch(isFinished, () => {
        submitRef.value = false;
      });
    } else {
      console.log('error submit!!');
      return false;
    }
  });
};
</script>
<style scoped>
.box-card {
  margin-top: 100px;
}

.getCodeBtn {
  transform: translateY(-50%);
  position: absolute;
  padding: 0 20px;
  right: 0;
  top: 50%;
  height: 40px;
  line-height: 40px;
  color: var(--el-color-primary);
  cursor: pointer;
  vertical-align: middle;
}
</style>
