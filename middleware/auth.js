export default function({store, redirect}) {
  if(!store.getters.canAccessWork) {
    return redirect("/authenticate");
  }
}
