<template>
  <transition>
    <div id="notice" v-show="flag">
      <span class="notice-content">{{content}}</span>
      <a @click.stop="handleClose">X</a>
    </div>
  </transition>
</template>

<script>
export default {
 
      name: 'notice',
      props: {
        content: {
          type: String,
          required: true
        }
      },
      
  data () {
    return {
      flag: true
    }
  },

  methods: {
    handleClose(){
      this.flag = false
      this.$emit('close')
      console.log('sdsdsds')
    }
  }
}
</script>

<style>
  #notice{
    width: 400px;
    padding: 20px 15px;
    position: fixed;
    top: 50%;
    /* bottom: 0; */
    left: 50%;
    /* right: 0; */
    margin-left: -200px;
    background: white;
  }
</style>

