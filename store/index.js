export function state() {
  return {
    authenticated: false
  }
}

export let mutations = {
  setAuthenticated( state, authenticated) {
    state.authenticated = authenticated || false;
  }
}

export let getters = {
  canAccessWork(state) {
    return state.authenticated;
  }
}
