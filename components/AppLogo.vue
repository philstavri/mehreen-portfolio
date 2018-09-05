<template>
    <router-link class="app-logo" to="/">
      <span class="app-logo__short">MS</span>
      <span class="app-logo__long">Mehreen Stavri</span>
    </router-link>
</template>

<style lang="scss">
@import "./styles/settings";
@import "./styles/tools";

.app-logo {
  font-family: "Playfair Display", serif;
  font-size: 20px;
  font-weight: normal;

  &:hover {
    color: $shade-1;
  }

  &__long {
    display: none;
  }

  @media (min-width: 400px) {
    &__long {
      display: block;
    }

    &__short {
      display: none;
    }
  }
}
</style>
