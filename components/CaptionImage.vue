<template>
  <div class="caption-image">
    <img class="caption-image__image" v-bind:src="url" v-bind:title="caption"/>
    <p class="caption-image__caption">{{caption}}</p>
  </div>
</template>

<script>

export default {
  props: {
    url: {
      type: String,
      required: true
    },
    caption: {
      require: true,
      type: String
    }
  },
}
</script>

<style lang="scss">
@import "./styles/tools";

.caption-image {
  max-width: 700px;
  margin: 0 auto;
  @include spacing(padding-top padding-bottom, xl);

  &__image {
    border: 1px solid $shade-1-light;
    @include full-width;
  }

  &__caption {
     text-align: left;
    @include text-mini;
  }
}
</style>
