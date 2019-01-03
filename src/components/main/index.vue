<template>
  <div class="main">
    <header-component class="header-com"></header-component>
    <router-view></router-view>
  </div>
</template>
<script>
import headerComponent from '@/components/header'

export default {
  components: {
    headerComponent,
  }
}
</script>
<style>
  .main{
    padding: 10px;
    position: absolute;
    left: 201px;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgb(232, 232, 235);
  }
  .header-com{
    padding:15px 0;
  }
</style>


