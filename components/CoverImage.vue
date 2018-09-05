<template>
  <div>
    <div class="cover-image" v-bind:class="{ 'cover-image--is-contain': isContain }" :style="imageStyles">&nbsp;</div>
    <p v-if="description">{{description}}</p>
  </div>
</template>

<script>

export default {
  props: {
    url: {
      type: String,
      required: true
    },
    height: {
      type: String
    },
    description: {
      type: String
    },
    isContain: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: null
    }

  },
  computed: {
    imageStyles() {
      let imageStyles = `background-image: url(${this.url});`;
      let heightStyle;

      if(this.height) {
        imageStyles += ` height: ${this.height};`;
      }

      if(this.backgroundColor) {
        imageStyles += ` background-color: ${this.backgroundColor};`;
      }

      return imageStyles;
    }
  }
}
</script>

<style lang="scss">
@import "./styles/tools";

.cover-image {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  &--is-contain {
     background-size: contain;
  }
}
</style>
