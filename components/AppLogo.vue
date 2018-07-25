<template>
  <div class="app-logo">
    <div class="app-logo__wrapper">
      <div class="app-logo__content">
        <span class="app-logo__short">MS</span>
        <span class="app-logo__long"><strong>Mehreen Stavri</strong></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/settings";
@import "./styles/tools";

.app-logo {
  @include apply-value-to-props(padding, 3px);
  @include background-shade;

  &__wrapper {
    @include spacing(padding, s);
    background-color: #fff;
  }

  &__content {
    background: $shade;

    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

    color: $color-highlight;

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
