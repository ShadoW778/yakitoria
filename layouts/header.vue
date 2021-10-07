<template>
  <div class="wrapper">
    <header>
      <nav class="header__nav">
        <menu-btn></menu-btn>
      </nav>
    </header>
    <Nuxt></Nuxt>
  </div>
</template>

<script>
import menuBtn from "../components/menu.vue";
export default {
  name: "header",
  components: {
    menuBtn
  }
};
</script>

<style scoped>
@import '../assets/css/null.css';
header {
   min-width: 100%;
   height: 150px;
   background-color: black;
}
</style>
