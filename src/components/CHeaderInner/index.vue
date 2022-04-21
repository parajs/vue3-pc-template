<template>
  <el-affix>
    <el-header class="flex">
      <slot name="left"></slot>
      <div class="flexItem">
        <slot></slot>
      </div>
      <slot name="right"></slot>
    </el-header>
  </el-affix>
</template>

<style scoped>
.el-header {
  background-color: #fff;
  border-bottom: 1px solid #dddd;
  display: flex;
  align-items: center;
}
</style>
