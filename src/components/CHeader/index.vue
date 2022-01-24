<template>
    <el-header>
        <router-link class="flexItem flex" to="/">
                <embed class="mt-1" :src="logo" width="40" height="40"
                type="image/svg+xml"
               />
                <h2 class="title">KuggaMax</h2>
        </router-link>
        <template v-if="tokenRef">
            <el-button class="ml-8" style="font-size: 16px;font-weight: bold;" type="primary" size="large">创建Lab</el-button>
            <i-ep-bell  style="cursor:pointer" class="ml-8"  width="40" height="40" :inline="true"  />
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
                        <el-dropdown-item @click="userLogout">
                            <div class="dropdown-item">退出</div>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </template>
         <template v-else>
             <el-button @click="loginPage" class="btn-common" type="text" size="large">登录</el-button>
             <el-button @click="regPage" class="btn-common" type="text" size="large">注册</el-button>
         </template>
    </el-header>
</template>
<script lang="ts" setup>
 import logo from "@/assets/logo.svg";
    const tokenRef = ref("");
    const store = useStore();
    const router = useRouter();
    watchEffect(()=>{
        tokenRef.value = store.state.user.token
    })

    const loginPage = ()=>{
        router.push({
            name: "Login"
        });
    }

    const regPage = ()=>{
          router.push({
            name: "Register"
        });
    }

    const userLogout = ()=>{
      store.dispatch({
         type: 'user/userLogout'
      })
   }

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


