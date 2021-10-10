export default function ({ store, redirect }) {
   const isOpen = store.getters['menu/isMenuOpen']
   if (!isOpen) {
      //redirect('/test')
      console.log(store.getters['menu/isMenuOpen'])
   }
   else console.log('you win!')
}
