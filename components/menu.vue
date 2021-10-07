<template>
  <div class="header__menu" @click="changeMenuButton"></div>
</template>

<script>
import menuPNG from "~/assets/img/menu.png";
import cancelPNG from "~/assets/img/cancel.png";
export default {
  data() {
    return {
      menuPNG: menuPNG,
      cancelPNG: cancelPNG
    };
  },
  methods: {
    changeMenuButton(event) {
      const target = event.target;
      if (!target.classList.contains("active")) {
        document.querySelector(
          ".header__menu"
        ).style.backgroundImage = `url(${cancelPNG})`;
        document.querySelector(".header__menu").classList.add("active");
      } else {
        document.querySelector(
          ".header__menu"
        ).style.backgroundImage = `url(${menuPNG})`;
        document.querySelector(".header__menu").classList.remove("active");
      }
    }
  }
};
</script>

<style scoped>
.header__menu {
  background-image: url("../assets/img/menu.png");
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
</style>
