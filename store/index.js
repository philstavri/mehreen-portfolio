export function state() {
  return {
    authenticated: false,
    authSuccessRouteName: "work",
    meta: {},
  }
}

export let mutations = {
  setAuthenticated(state, authenticated) {
    state.authenticated = authenticated || false;
  },
  setAuthSuccessRouteName(state, routeName) {
    state.authSuccessRouteName = routeName || "work";
  },

  setMeta(state, meta) {
    state.meta = meta || {};
  }
}

export let getters = {
  canAccessWork(state) {
    return state.authenticated;
  }
}
