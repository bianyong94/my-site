<template>
  <div class="index">
      <el-container>
        <el-aside style="width:200px;position:absolute;top:0;bottom:0;background:rgb(84, 92, 100);">
        <el-menu
            :router="true"
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="filmSearch">
              <i class="el-icon-service"></i>
              <span slot="title">Music</span>
            </el-menu-item>
            <el-menu-item index="table">
              <i class="el-icon-view"></i>
              <span slot="title">Table</span>
            </el-menu-item>
            <el-menu-item index="upload">
              <i class="el-icon-setting"></i>
              <span slot="title">upload</span>
            </el-menu-item>
             <el-menu-item index="test">
              <i class="el-icon-setting"></i>
              <span slot="title">test</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
      </el-container>

  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style>

</style>



