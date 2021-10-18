<template>
  <div class="header__submenu">
    <ul class="header__submenu_container">
      <li class="header__submenu_item" v-for="item in menu_items" :key="item._id">
        <h2 class="header__submenu_title">{{ item.title }}</h2>
        <p class="header__submenu_link" v-for="(link, index) in item.links" :key="index">{{ link }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   data() {
      return {
         menu_items: []
      }
   },
   computed: {
     ...mapGetters({isMenuOpen: 'menu/isMenuOpen'})
   },
   watch: {
     isMenuOpen(newState) {
       if (newState) {
         document.querySelector('.header__submenu').classList.add('opened')
       }
       else document.querySelector('.header__submenu').classList.remove('opened')
     }
   },
   // async asyncData({ $axios }) {
   //    const menu_items = await $axios.$get('http://localhost:3000/api/getMenu')
   //    console.log(menu_items)
   //    return {
   //       menu_items
   //    }
   // },
   async created() {
      this.menu_items = await this.$axios.$get('/api/getMenu')
   }
}
</script>

<style>

</style>
