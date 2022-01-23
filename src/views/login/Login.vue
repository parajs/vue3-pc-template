<template>
<CPage>
    <CHeader />
    <el-main>
        <el-row :gutter="10">
            <el-col :xs="22" :sm="20" :md="12" :lg="8" :xl="6" style="margin: 0 auto">
                <el-card class="box-card">
                    <el-form  :model="formInline" class="text-center">
                        <h3>登录</h3>
                        <el-form-item>
                            <el-input size="large" v-model="formInline.username" placeholder="输入账号"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input size="large" v-model="formInline.password" placeholder="输入密码"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <div class="flexItem"></div>
                            <el-button  type="text" color="red">忘记密码？</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button size="large" style="width:100%" type="primary" round @click="onSubmit">登录</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </el-main>
</CPage>
  
</template>

<script lang="ts" setup>
const formInline = reactive({
  username: '',
  password: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
<style scoped>
.box-card {
    margin-top: 100px;
}
</style>