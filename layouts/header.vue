<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__wrapper">
        <nav class="header__nav">
          <menu-btn></menu-btn>
          <ul class="header__contacts">
            <li class="header__restaurants"></li>
            <li class="header__contacts"></li>
            <li class="header__getItem"></li>
          </ul>
          <div class="header__title">Honolulu</div>
          <div class="header__cart"><fa icon="shopping-basket"></fa>Cart</div>
        </nav>
      </div>
    </header>
    <Nuxt></Nuxt>
  </div>
</template>

<script>
import menuBtn from "../components/menu.vue";
export default {
  name: "headerComp",
  components: {
    menuBtn
  }
};
</script>

<style scoped>
@import "../assets/css/null.css";
@import "../assets/css/header.css";
</style>
