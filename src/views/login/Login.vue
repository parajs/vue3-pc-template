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
              ref="ruleForm"
              :rules="rules"
              :model="form"
              class="text-center"
            >
              <h3>登录</h3>
              <el-form-item prop="username">
                <el-input
                  size="large"
                  v-model="form.username"
                  placeholder="输入账号"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password" class="mt-8">
                <el-input
                  type="password"
                  show-password
                  size="large"
                  v-model="form.password"
                  placeholder="输入密码"
                  @click="onSubmit"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <div class="flexItem"></div>
                <el-button type="text" color="red">忘记密码？</el-button>
              </el-form-item>
              <el-form-item>
                <el-button
                  :disabled="isLoadingRef"
                  size="large"
                  style="width: 100%"
                  type="primary"
                  round
                  @click="onSubmit"
                  >登录</el-button
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
import { md5Encryption } from '@/utils';
const form = reactive({
  username: '',
  password: ''
});
const isLoadingRef = ref(false);
const ruleForm = ref();
const route = useRoute();
const router = useRouter();
const store = useStore();
const rules = reactive({
  username: [
    {
      required: true,
      message: '请输入邮箱账号',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
});

const onSubmit = () => {
  ruleForm.value.validate((valid: boolean) => {
    if (valid) {
      const pwd = md5Encryption(form.password);
      form.password = pwd;

      store.dispatch('user/loginPassword', form).then(() => {
        const { redirect } = route.query;
        if (redirect) {
          router.push(redirect as string);
        } else {
          router.push({ name: 'Home' });
        }
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
</style>
