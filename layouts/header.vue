<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__wrapper">
        <nav class="header__nav">
          <menu-btn></menu-btn>
          <ul class="header__contacts">
            <li class="header__restaurants header__contacts_item">
              <span>Рестораны <fa icon="caret-down"></fa></span>
            </li>
            <li class="header__contacts header__contacts_item">
              <span>Контакты <fa icon="caret-down"></fa></span>
            </li>
            <li class="header__getItem header__contacts_item">
              <span>Заберу сам</span>
            </li>
          </ul>
          <div class="header__title">
            <nuxt-link class="header__link" to="/test">
              Honolulu
              <img class="header__logo" src="../assets/img/sunset.jpg" alt="" />
            </nuxt-link>
          </div>
          <div class="header__management">
            <div class="header__in">
              <span><fa icon="sign-in-alt"></fa> Войти</span>
            </div>
            <div class="header__cart">
              <span><fa icon="shopping-basket"></fa> Корзина</span>
            </div>
          </div>
        </nav>
        <main-menu></main-menu>
      </div>
    </header>
    <Nuxt></Nuxt>
  </div>
</template>

<script>
import menuBtn from "../components/menu.vue";
import mainMenu from "../components/main-menu.vue";
export default {
  name: "headerComp",
  components: {
    menuBtn,
    mainMenu
  }
};
</script>

<style>
@import "../assets/css/null.css";
@import "../assets/css/header.css";
</style>
