<template>
  <div class="preloader" v-if="opened">
    <h1>HI</h1>
  </div>
</template>

<script>
export default {
   name: 'mainloader',
   data() {
      return {
         opened: false
      }
   },
   methods: {
      start() {
         this.opened = true
      },
      finish() {
         this.opened = false
      }
   }
};
</script>

<style scoped>
.preloader {
   position: fixed;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   background-color: #fff;
   color: black;
}
</style>
