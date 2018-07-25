<template>
  <div class="shade-container">
    <div class="shade-container__wrapper" :style="getWrapperStyle">
      <div class="shade-container__content" v-bind:class="{ 'shade-container__content--shade-text': canShadeText }">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    canShadeText: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
    }
  },
  computed: {
    getWrapperStyle() {
      if(this.backgroundColor) {
        return `background-color: ${this.backgroundColor}`;
      }
    },
  }
}
</script>

<style lang="scss">
@import "./styles/settings";
@import "./styles/tools";

.shade-container {
  @include apply-value-to-props(padding, 3px);
  @include background-shade;

  &__wrapper {
    @include spacing(padding, s);
    background-color: #fff;
  }

  &__content {
    color: $color-highlight;

    &--shade-text{
      @include background-shade;

      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;

      @supports not (-webkit-background-clip: text){
        background: transparent;
      }

      .no-backgroundcliptext & {
        background: transparent;
      }
    }
  }
}
</style>
