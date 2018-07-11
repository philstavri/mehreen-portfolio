<template>
  <div>
    <header class="header-nav">
      <div class="header-nav__content">
        <div class="logo">
          <span class="logo--short">MS</span>
          <span class="logo--long">Mehreen Stavri</span>
        </div>

          <ul class="main-menu">
            <li class="main-menu__item"><router-link to="/" class="main-menu__link">About</router-link></li>
            <li class="main-menu__item"><a href="/Mehreen-Stavri-2018.pdf" title="Mehreen Stavri - CV" target="_blank" class="main-menu__link">CV</a></li>
          </ul>
      </div>
    </header>
    <nuxt/>
    <footer class="footer-bar">
      <div class="footer-bar__links">
        <a href="https://www.linkedin.com/in/mehreenstavri" title="Mehreen Stavri - Linkedin" class="footer-bar__link">
          <linkedin-icon/>
        </a>

        <a href="/Mehreen-Stavri-2018.pdf" title="Mehreen Stavri - CV" target="_blank" class="footer-bar__link" >
          <cv-icon/>
        </a>
      </div>


    </footer>
  </div>
</template>

<script>

import CvIcon from "vue-material-design-icons/file-pdf.vue";
import LinkedinIcon from "vue-material-design-icons/linkedin.vue";


export default {
  components: {
    CvIcon,
    LinkedinIcon,
  }
}
</script>

<style lang="scss">
@import "./styles/tools.scss";
.footer-bar {
  @include full-width;

  background-color: $color-shade-light;
  text-align: center;
  //border-top: 1px solid $color-highlight; //TODO - adds thin border along top of footer

  &__links {
    $border-size: 4px;
    @include spacing(padding-top padding-bottom, m);
    @include spacing(padding-left padding-right, xxl);
    border-top: $border-size solid $color-highlight;
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
    color: $color-highlight;

    &:hover {
      color: $color-contrast;
    }

    & + & {
      @include spacing(margin-left, s);
    }
  }

  .material-design-icon__svg {
    fill: currentColor;
  }

}

.header-nav {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  border-bottom: 2px solid #d7cec7;
  height: 65px;

  @include full-width;

  &__content {
    display: flex;
    justify-content: space-between;

    @include full-width-content;

    @include spacing(padding-left padding-right, m);
    @include spacing(padding-top padding-bottom, xl);
  }
}

.logo {
  color: #565656;

  &--long {
    display: none;
  }

  @media (min-width: 400px) {
    &--long {
      display: block;
    }

    &--short {
      display: none;
    }
  }
}

.main-menu {
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &__link {
    color: #76323f;
    text-decoration: none;
  }

  &__item + &__item {
    @include spacing(margin-left, l);
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
