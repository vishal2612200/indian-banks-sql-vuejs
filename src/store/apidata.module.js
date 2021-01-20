export const apidata = {
    state: {
      cacheddata: []
    },
    mutations: {
        addapidata(state, item){
            state.cacheddata = item;
        },
    },
    actions: {
        cachedapidata({ commit }, item) {
          commit("addapidata", item);
        },
      },
  }
