<template>
  <two-col class="u-full-width-content work-overview" :flush="true">
    <div :slot="imageCol">
      <cover-image :url="url" height="400px" :is-contain="stretchImage" :background-color="imageBackgroundColor"/>
    </div>
    <div :slot="contentCol" class="work-overview__content">
      <h1 class="work-overview__title">{{title}}</h1>
      <p class="work-overview__description">{{description}}</p>
      <router-link :to="link" class="highlight-on-color">
        Read more
      </router-link>
    </div>
  </two-col>
</template>

<script>
  import CoverImage from "@/components/CoverImage";
  import TwoCol from "@/components/TwoCol";

  export default {
    components: {
      CoverImage,
      TwoCol
    },
    props: {
      url: { type: String, require: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      link: { type: String, required: true },
      contentFirst: { type: Boolean, required: false, default: false },
      stretchImage: { type: Boolean, required: false, default: false },
      imageBackgroundColor: { type: String, required: false, default: null },
    },
    data: function() {
      return {
        imageCol: this.contentFirst ? "second-col" : "first-col",
        contentCol: this.contentFirst ? "first-col" : "second-col"
      }
    }
  };
</script>

<style lang="scss">
  @import "./styles/settings";
  @import "./styles/tools";

  .work-overview {
    &__content {
     @include spacing(padding-left padding-right, xxl);
     @include spacing(padding-top padding-bottom, xxxl);

     background-color: $color-1;
     height: 100%;
    }

    &__title {
      @include title("secondary");
    }

    &__description {
      @include spacing(margin-bottom, xl);
    }
  }
</style>
