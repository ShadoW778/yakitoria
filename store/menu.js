export const state = () => ({
   isMenuOpen: false
})

export const getters = {
   isMenuOpen(state) {
      return state.isMenuOpen
   }
}

export const mutations = {
   CHANGE_MENU_CONDITION(state, payload) {
      state.isMenuOpen = payload
   }
}

export const actions = {
   changeMenu({ commit }, payload) {
      commit('CHANGE_MENU_CONDITION', payload)
      console.log('hey')
   }
}