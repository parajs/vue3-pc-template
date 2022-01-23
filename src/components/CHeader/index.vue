<template>
    <el-header>
        <router-link class="flexItem flex" to="/">
                <embed :src="logo"
                type="image/svg+xml"
               />
                <h2 class="title">KuggaMax</h2>
        </router-link>
        <template v-if="tokenRef">
            <el-button class="ml-8" style="font-size: 16px;font-weight: bold;" type="primary" size="large">创建Lab</el-button>
            <el-icon style="cursor:pointer" class="ml-8" size="40"><bell /></el-icon>
            <el-dropdown  class="ml-8">
                <CAvatar size="40" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
                <template #dropdown>
                    <el-dropdown-menu style="width: 140px;">
                        <el-dropdown-item>
                            <div class="dropdown-item">工作台</div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div class="dropdown-item">已订阅</div>
                            </el-dropdown-item>
                        <el-dropdown-item>
                            <div class="dropdown-item">设置</div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div class="dropdown-item">退出</div>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </template>
         <template v-else>
             <el-button class="btn-common" type="text" size="large">登录</el-button>
             <el-button class="btn-common" type="text" size="large">注册</el-button>
         </template>
    </el-header>
</template>
<script lang="ts" setup>
 import logo from "@/assets/logo.svg";
 import { Bell } from '@element-plus/icons-vue';

    const tokenRef = ref("");
    const store = useStore();
    watchEffect(()=>{
        tokenRef.value = store.state.user.token
    })

</script>
<style scoped>
.el-header {
    border-bottom: 1px solid #dddd;
    background-color: #fff;
    display: flex;
    align-items: center;
}
.title {
    margin: 0;
    margin-left: 10px;
    font-size: 22px;
    color: black;
    text-decoration: none;
}
.btn-common {
    color: black;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 18px;
    font-weight: bold;
}
.dropdown-item {
    padding: 8px 0;
    text-align: center;
    flex: 1
}
</style>


