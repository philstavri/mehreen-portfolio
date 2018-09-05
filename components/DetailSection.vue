<template>
  <section class="detail-section">
    <h1 class="c-title--secondary">{{title}}</h1>
    <div class="detail-section__content" v-bind:class="{'detail-section__content--align-center': alignCenter }">
      <slot></slot>
    </div>
    <hr v-if="!hideSeparator" class="narrow detail-section__separator"/>
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

  &__content {
    @include full-width-content($responsive: true);
    text-align: left;

    &--align-center {
      text-align: center;
    }
  }

  &__separator {
    @include spacing(padding-top, xxl);
  }
}
</style>

