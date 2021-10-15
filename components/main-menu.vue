<template>
  <div class="header__menu">
    <ul class="header__menu_container">
      <li class="header__menu_item" v-for="item in menu_items" :key="item._id">
        <h2 class="header__menu_title">{{ item.title }}</h2>
        <p class="header__menu_link" v-for="(link, index) in item.links" :key="index">{{ link }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
   data() {
      return {
         menu_items: []
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
