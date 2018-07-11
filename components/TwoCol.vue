<template>
  <div class="two-col">
    <div class="two-col__first-col two-col__column">
      <slot name="first-col"></slot>
    </div>
    <div class="two-col__second-col two-col__column">
      <slot name="second-col"></slot>
    </div>
  </div>
</template>

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

    @media (max-width: $max-width-breakpoint) {
      @include spacing(padding-left, m);
    }
  }

  &__second-col {
    @include spacing(padding-left, l);

    @media (max-width: $max-width-breakpoint) {
      @include spacing(padding-right, m);
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;

    &__column {
      width: 100%;
    }
  }
}
</style>
