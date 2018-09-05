<template>
  <div class="hero-banner" :style="getBackgroundImageCSS()">
    <div class="hero-banner__content">
      <h1 class="hero-banner__title c-title">{{title}}</h1>
      <div class="hero-banner__subtitle">{{subtitle}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    image: String,
  },
  methods: {
    getBackgroundImageCSS() {
      return `background-image: url(${this.image})`;
    }
  }
}
</script>
<style lang="scss">
@import "./styles/settings";
@import "./styles/tools";

.hero-banner {
  text-align: left;
  min-height: 100vh;
  background: no-repeat top left fixed;
  background-size: cover;

  &__content {
    margin-top: 50vh;
    margin-left: 5vw;
    color: $color-3;
    background-color: rgba($shade-1, 0.90);
    display: inline-block;
    @include spacing(padding-top padding-left padding-right, m);
   @include spacing(padding-bottom, xl);
  }

  &__title {
    font-size: 6vh;
    display: table;
    @include spacing(padding-left padding-right, xs)
  }

  &__subtitle {
    font-size: 1.2rem;
  }

  &__tags {
    @include spacing(margin-top, s);
    border-top: 1px solid $color-3;
    display: table;
    width: 100%;
    font-size: 2.5vh;

  }
}
</style>
