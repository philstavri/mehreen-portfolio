<template>
  <section class="detail-section">
    <h1 class="detail-section__title">{{title}}</h1>
    <div class="detail-section__content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss">
@import "./styles/settings";
@import "./styles/tools";

.detail-section {
  @include spacing(padding-bottom, l);
  @include spacing(padding-top, xxl);
  text-align: center;

  // todo - choose section end: single colour, shade full width, shade short fixed width or none

  //border-bottom: 1px solid $color-shade-bold; //single colour section end

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
    @include spacing(margin-top margin-bottom, xxl);
    display: block;
    content: "";
  }

  &--background-bold {
    background-color: $color-shade-bold;
  }

  &--background-contrast {
    background-color: $color-contrast;
    color: white;
  }

  &--background-highlight {
    background-color: $color-highlight;
    color: white;
  }

  &--background-light {
    background-color: $color-shade-light;
  }

  &__title {
    font-weight: 500;
    font-size: 32px;
    color: $color-highlight;
    display: inline-block;

    @include spacing(margin-bottom, xl);

    // &:after {
    //   content: "";
    //   display: block;
    //   width: 70%;
    //   max-width: 300px;
    //   min-width: 100px;
    //   height: 2px;
    //   @include background-shade;
    //   //border-bottom: 2px solid $color-highlight;
    //   @include spacing(margin-top, s);
    //   @include apply-value-to-props(margin-left margin-right, auto);
    //   @include spacing(margin-bottom, xs);
    // }
  }

  &__content {
    @include full-width-content($responsive: true);
    text-align: left;
  }
}
</style>

