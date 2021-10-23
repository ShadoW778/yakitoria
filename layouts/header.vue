<template>
  <div class="wrapper">
    <div class="content" v-show="isOpened">
      <header class="header">
      <div class="header__wrapper">
        <nav class="header__nav">
          <menu-btn></menu-btn>
          <ul class="header__contacts">
            <li class="header__restaurants header__contacts_item">
              <span @click="isRestaurantsChecking"
                >Рестораны <fa :icon="caretRest"></fa
              ></span>
              <div class="header__restaurants_menu" v-if="isRestaurants">
                <h3 class="header__restaurants_title">Наши Рестораны</h3>
                <ul class="header__restaurants_list">
                  <li class="header__restaurants_rest">Улица Козака, 3</li>
                  <li class="header__restaurants_rest">Проспект Бубки, 9А</li>
                  <li class="header__restaurants_rest">
                    Бульвар Каштанский, 12
                  </li>
                </ul>
              </div>
            </li>
            <li class="header__contacts header__contacts_item">
              <span @click="isContactsChecking">Контакты <fa :icon="caretCont"></fa></span>
              <div class="header__contacts_menu" v-if="isContacts">
                <h3 class="header__contacts_title">Наши Контакты</h3>
                <ul class="header__contacts_list">
                  <li class="header__contacts_contact"><a href="tel:+38(066)9521840">(066) 952-18-40</a></li>
                  <li class="header__contacts_contact">di759026@gmail.com</li>
                </ul>
              </div>
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
    <div class="preloader" v-show="!isOpened">
      <h1>HI</h1>
    </div>
  </div>
</template>

<script>
import menuBtn from "../components/menu.vue";
import mainMenu from "../components/main-menu.vue";

export default {
  name: "headerComp",
  data() {
    return {
      isOpened: false,
      isRestaurants: false,
      isContacts: false,
      caretRest: "caret-down",
      caretCont: "caret-down"
    };
  },
  methods: {
    isRestaurantsChecking() {
      this.isRestaurants = this.isRestaurants ? false : true;
      if (this.isContacts) {
        this.isContacts = false,
        this.caretCont = 'caret-down'
      }
      if (this.isRestaurants) {
        this.caretRest = "caret-up";
      } else {
        this.caretRest = "caret-down";
      }
    },
    isContactsChecking() {
      this.isContacts = this.isContacts ? false : true;
      if (this.isRestaurants) {
        this.isRestaurants = false,
        this.caretRest = 'caret-down'
      }
      if (this.isContacts) {
        this.caretCont = "caret-up";
      } else {
        this.caretCont = "caret-down";
      }
    }
  },
  components: {
    menuBtn,
    mainMenu
  },
  mounted() {
    window.addEventListener('load', function() {
      let helloScript = document.createElement('script')
      helloScript.setAttribute('src', '~/assets/js/hello.js')
      document.head.appendChild(helloScript)
    }) 
  }
};
</script>

<style>
@import "../assets/css/null.css";
@import "../assets/css/header.css";
</style>
