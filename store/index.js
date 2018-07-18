export function state() {
  return {
    authenticated: false,
    authSuccessRouteName: "work",
  }
}

export let mutations = {
  setAuthenticated(state, authenticated) {
    state.authenticated = authenticated || false;
  },
  setAuthSuccessRouteName(state, routeName) {
    state.authSuccessRouteName = routeName || "work";
  },
}

export let getters = {
  canAccessWork(state) {
    return state.authenticated;
  }
}
