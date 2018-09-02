<template>
  <div>
    <div class="cover-image" :style="imageStyles">&nbsp;</div>
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
    }
  },
  computed: {
    imageStyles() {
      let backgroundImageStyle = `background-image: url(${this.url}); `;
      let heightStyle;

      if(this.height) {
        heightStyle = `height: ${this.height};`;
      }

      return backgroundImageStyle + heightStyle;
    }
  }
}
</script>

<style lang="scss">
@import "./styles/tools";

.cover-image {
  background-position: top center;
  background-size: cover;
}
</style>
