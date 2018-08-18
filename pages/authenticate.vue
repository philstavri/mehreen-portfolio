<template>
  <form class="u-move-below-header u-full-width-content u-align-center" @submit.prevent="authenticate()">
    <h1 class="u-margin-top-xxxl c-title--secondary">Log in to see my work</h1>
    <p>Due to privacy reasons, please <a href="https://www.linkedin.com/in/mehreenstavri">contact me</a> for login details to view samples of my work.</p>
    <p>Thank you, Mehreen</p>
    <div class="u-margin-top-xl u-margin-bottom-xl" v-if="loginError">
      <div class="login__error-message">
        <alert-outline-icon/> The password you entered was incorrect
      </div>
    </div>
    <input type="password" v-model="password" class="login__password u-margin-top-xl" placeholder="Enter the password"/>
    <button class="login__submit u-margin-top-m">Log in</button>
  </form>
</template>

<script>
import AlertOutlineIcon from "vue-material-design-icons/alert-circle-outline.vue";

export default {
  components: {
    AlertOutlineIcon
  },
  data: function(){
    return {
      password: null,
      loginError: false,
    };
  },
  meta: {
    linkedMenuRoute: "work"
  },
  methods: {
    authenticate() {
      //TODO move to service i.e. Auth) or similar
      if(this.password === "u$er.1s-K!n9") {
        this.$store.commit("setAuthenticated", true);
        this.$router.push({ name: this.$store.state.authSuccessRouteName });
      } else {
        this.password = null;
        this.loginError = true;
      }
    }
  }
}
</script>

<style lang="scss">
@import "./styles/settings";
@import "./styles/tools";


.login {
  &__error-message {
    display: inline-block;
    border: 1px solid $color-1;
    border-radius: 3px;
    background-color: $color-4;
    color: $color-1;
    @include spacing(padding-top padding-bottom, s);
    @include spacing(padding-left padding-right, l);
  }

  &__password,
  &__submit {
    display: block;
    @include apply-value-to-props(margin-left margin-right, auto);
  }

  &__submit {
    font-weight: bold;
  }
}

</style>
