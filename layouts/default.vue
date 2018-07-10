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
            <li class="main-menu__item"><a href="/Mehreen-Stavri-2018.pdf" target="_blank" class="main-menu__link">CV</a></li>
          </ul>
      </div>
    </header>
    <nuxt/>
  </div>
</template>

<style lang="scss">
@import "./styles/common.scss";

.header-nav {
  position: fixed;
  top: 0;
  left: 0;
  //background-color: #d7cec7;
  border-bottom: 2px solid #d7cec7;

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
