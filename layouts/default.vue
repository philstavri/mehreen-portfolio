<template>
  <div>
    <header class="header-nav">
      <div class="header-nav__content">
        <app-logo/>

        <ul class="main-menu">
          <li class="main-menu__item"><router-link to="/" class="main-menu__link" v-bind:class="{'main-menu__link--current': isCurrentRoute('index')}">About</router-link></li>
          <li class="main-menu__item"><router-link to="/work" class="main-menu__link" v-bind:class="{'main-menu__link--current': isCurrentRoute('work')}">Work</router-link></li>
          <li class="main-menu__item"><a href="/Mehreen-Stavri-2018.pdf" title="Mehreen Stavri - CV" target="_blank" class="main-menu__link">CV</a></li>
        </ul>
      </div>
    </header>
    <div class="c-page">
      <nuxt/>
    </div>
    <footer class="footer-bar">
      <div class="footer-bar__links">
        <a href="https://www.linkedin.com/in/mehreenstavri" title="Mehreen Stavri - Linkedin" class="footer-bar__link">
          <linkedin-icon/>
        </a>

        <a href="/Mehreen-Stavri-2018.pdf" title="Mehreen Stavri - CV" target="_blank" class="footer-bar__link" >
          CV
        </a>
      </div>


    </footer>
  </div>
</template>

<script>
import AppLogo from "@/components/AppLogo";
import CvIcon from "vue-material-design-icons/file-pdf.vue";
import LinkedinIcon from "vue-material-design-icons/linkedin.vue";


export default {
  components: {
    AppLogo,
    CvIcon,
    LinkedinIcon,
  },
  methods: {
    isCurrentRoute(route) {
      return this.$store.state.meta.linkedMenuRoute === route;
    }
  }
}
</script>

<style lang="scss">
@import "./styles/settings";
@import "./styles/tools";

.footer-bar {
  @include full-width;

  margin-top: -$footer-height;
  background-color: $color-4;
  text-align: center;
  //border-top: 1px solid $color-1; //TODO - adds thin border along top of footer

  &__links {
    $border-size: 4px;
    @include spacing(padding-top padding-bottom, m);
    @include spacing(padding-left padding-right, xxl);
    border-top: $border-size solid $color-1;
    position: relative;
    top: $border-size / -2;

    @media (min-width: 400px) {
      display: inline-block;
      width: 30%;
      min-width: 350px;
    }
  }

  &__link {
    text-decoration: none;
    color: $color-1;

    &:hover {
      color: $color-2;
    }

    & + & {
      @include spacing(margin-left, s);
    }
  }
}

.header-nav {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  background-color: #fff;
  height: $header-height;

  //todo - choose header edge style: color line, shadow or none
  box-shadow: 0 0 10px -5px #000;
  //border-bottom: 2px solid $color-4;

  @include full-width;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    @include full-width-content;

    @include spacing(padding-left padding-right, m);
  }
}

.main-menu {
  $link-color: #373737;

  list-style: none;
  display: flex;
  justify-content: flex-end;

  &__link {
    color: $link-color!important;
    text-decoration: none;
    outline: none;

    &:after {
        content: "";
        height: 2px;
        width: 100%;
        display: block;
      }

    &:hover,
    &:focus,
    &:active {
      &:after {
        background-color: $highlight-2;
      }
    }

    &--current {
      &:after {
         background-color: $highlight-1;
      }
    }

  }

  &__item {
    & + & {
      @include spacing(margin-left, l);
    }
  }
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
