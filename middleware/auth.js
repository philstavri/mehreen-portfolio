export default function({redirect, route = {}, store}) {
  if(!store.getters.canAccessWork) {
    store.commit("setAuthSuccessRouteName", route.name);
    return redirect("/authenticate");
  }
}
