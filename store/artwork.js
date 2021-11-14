export const state = () => ({
  artworks: [],
})

export const mutations = {
  SET_ARTWORKS(state, artworks) {
    state.artworks = artworks
  },
}

export const actions = {
  async getArtworks({ commit }) {
    const res = await this.$api.artwork.all();
    if (res.status === 200 && res.data) {
      commit('SET_ARTWORKS', res.data)
    } else {
      console.error('There was an error while fetching artworks');
    }
  },
}