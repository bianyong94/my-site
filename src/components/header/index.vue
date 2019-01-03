<template>
  <div class="header">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/filmSearch' }">filmSearch</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/table' }">table</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/upload' }">upload</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'asdasd'
    }
  }
}
</script>

