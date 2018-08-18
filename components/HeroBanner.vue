<template>
  <div class="hero-banner" :style="getBackgroundImageCSS()">
    <div class="hero-banner__content ">
      <h1 class="hero-banner__title">{{title}}</h1>
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
  background: url(~/assets/plane-wing.jpg) no-repeat top left fixed;
  background-size: cover;

  &__content {
    position: relative;
    top: 50vh;
    left: 5vw;
    color: $color-3;
    background-color: rgba($color-1, 0.4);
    display: inline-block;
    @include spacing(padding, m);
  }

  &__title {
    font-weight: 500;
    font-size: 8vh;
    display: table;
    @include spacing(padding-left padding-right, xs)
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
