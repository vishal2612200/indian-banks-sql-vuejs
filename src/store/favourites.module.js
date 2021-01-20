export const favourites = {
    state: {
      favouritedata: []
    },
    mutations: {
        addfavourite(state, item){
            state.favouritedata.push(item);
        },
        clearfavourite(state, item){
            state.favouritedata = state.favouritedata.filter(row_data => row_data.ifsc != item.ifsc);
        },     
    },
    actions: {
        addFavouriteRow({ commit }, item) {
          commit("addfavourite", item);
        },
        deleteFaouriteRow({ commit }, item) {
          commit("clearfavourite", item);
        },
      },
  }
