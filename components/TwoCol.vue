<template>
  <div class="two-col">
    <div class="two-col__first-col two-col__column" v-bind:class="{ 'two-col__first-col--flush': flush }">
      <slot name="first-col"></slot>
    </div>
    <div class="two-col__second-col two-col__column" v-bind:class="{ 'two-col__second-col--flush': flush }">
      <slot name="second-col"></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    flush: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "./styles/tools";

.two-col {
  @include full-width;
  display: flex;
  flex-direction: row;



  &__column {
    flex: 1;
    width: 50%;
  }

  &__first-col {
    @include spacing(padding-right, l);

    &--flush {
      padding-right: 0;
    }
  }

  &__second-col {
    @include spacing(padding-left, l);

    &--flush {
      padding-left: 0;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;

    &__column {
      width: 100%;
      @include apply-value-to-props(padding-left padding-right, 0);
    }

    &__second-col {
      @include spacing(margin-top, l);
    }
  }
}
</style>
