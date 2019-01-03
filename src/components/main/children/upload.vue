<template>
  <div>
    this is upload
    <router-link to="/test/123">aaaa</router-link>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      
    }
  },
  mounted () {
    console.log(this.id)
  }
}
</script>
