<template>
  <div class="test">
    <child-com>
      <div slot="slot1" slot-scope="scope"> <span>{{scope.title}}</span></div>
      <!-- <div slot="slot2">22222</div> -->
    </child-com>
    <div>
    <notice content="这是关闭的内容"></notice>
    </div>

  </div>
</template>

<script>
import childCom from '@/components/test1'
export default {
  components: {
    childCom
  }
}
</script>

<style scoped>
  .test div{
    border:1px solid blue;
    width: 100px;
    height: 100px;
  }
</style>


