<template>
  <div class="header__menu" @click="changeMenuButton"></div>
</template>

<script>
import menuPNG from "~/assets/img/out.png";
import cancelPNG from "~/assets/img/close-menu.png";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      menuPNG: menuPNG,
      cancelPNG: cancelPNG
    };
  },
  computed: {
    ...mapGetters({isN: 'menu/isMenuOpen'})
  },
  watch: {
    isN(newIS) {
      console.log(newIS, 'right')
    }
  },
  methods: {
    ...mapActions({ changeMenu: "menu/changeMenu" }),
    changeMenuButton(event) {
      const target = event.target;
      if (!target.classList.contains("active")) {
        document.querySelector(".header__menu").classList.add("active");
        document.querySelector(
          ".header__menu"
        ).style.backgroundImage = `url(${cancelPNG})`;
        this.changeMenu(true);
      } else {
        document.querySelector(".header__menu").classList.remove("active");
        document.querySelector(
          ".header__menu"
        ).style.backgroundImage = `url(${menuPNG})`;
        this.changeMenu(false);
      }
    }
  }
};
</script>

<style>
.header__menu {
  background-image: url("../assets/img/out.png");
  cursor: pointer;
  background-repeat: no-repeat;
  transition: all 0.12s ease 0s;
  background-position: center center;
  width: 30px;
  height: 28px;
  position: relative;
  display: block;
}
</style>
