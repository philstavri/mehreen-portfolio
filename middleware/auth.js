export default function({redirect, route = {}, store}) {
  console.log("here");
  if(!store.getters.canAccessWork) {
    console.log("ROUTE", route);
    store.commit("setAuthSuccessRouteName", route.name);
    return redirect("/authenticate");
  }
}
