<template>
  <section class="detail-section" v-bind:class="{ 'detail-section--hide-separator': hideSeparator }">
    <h1 class="detail-section__title">{{title}}</h1>
    <div class="detail-section__content" v-bind:class="{'detail-section__content--align-center': alignCenter }">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    hideSeparator: Boolean,
    alignCenter: Boolean
  }
}
</script>

<style lang="scss">
@import "./styles/settings";
@import "./styles/tools";

.detail-section {
  @include spacing(padding-bottom, xxxl);
  @include spacing(padding-top, l);
  text-align: center;

  // todo - choose section end: single colour, shade full width, shade short fixed width or none

  //border-bottom: 1px solid $color-3; //single colour section end

  // shade section end
  // &:after {
  //   @include background-shade;
  //   height: 2px;
  //   width: 100%;
  //   display: block;
  //   content: "";
  // }

  // shade section end fixed width - paired with no underline on title
  &:after {
    @include background-shade;
    height: 3px;
    width: 100px;
    @include apply-value-to-props(margin-left margin-right, auto);
    @include spacing(margin-top, xxxl);
    display: block;
    content: "";
  }

  &--hide-separator {
    &:after {
      height: 0;
    }
  }

  &--background-bold {
    background-color: $color-3;
  }

  &--background-contrast {
    background-color: $color-2;
    color: white;
  }

  &--background-highlight {
    background-color: $color-1;
    color: white;
  }

  &--background-light {
    background-color: $color-4;
  }

  &__title {
    font-weight: 500;
    font-size: 32px;
    color: $color-1;
    display: inline-block;

    @include spacing(margin-bottom, xxxl);

    // &:after {
    //   content: "";
    //   display: block;
    //   width: 70%;
    //   max-width: 300px;
    //   min-width: 100px;
    //   height: 2px;
    //   @include background-shade;
    //   //border-bottom: 2px solid $color-1;
    //   @include spacing(margin-top, s);
    //   @include apply-value-to-props(margin-left margin-right, auto);
    //   @include spacing(margin-bottom, xs);
    // }
  }

  &__content {
    @include full-width-content($responsive: true);
    text-align: left;

    &--align-center {
      text-align: center;
    }
  }
}
</style>

