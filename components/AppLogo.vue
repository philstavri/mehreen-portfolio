<template>
  <shade-container :can-shade-text="true">
    <div class="app-logo">
      <span class="app-logo__short">MS</span>
      <span class="app-logo__long"><strong>Mehreen Stavri</strong></span>
    </div>
  </shade-container>
</template>

<script>
import ShadeContainer from "@/components/ShadeContainer";

export default {
  components: {
    ShadeContainer,
  }
}
</script>

<style lang="scss">
@import "./styles/settings";
@import "./styles/tools";

.app-logo {
  &__long {
    display: none;
  }

  @media (min-width: 400px) {
    &__long {
      display: block;
    }

    &__short {
      display: none;
    }
  }
}
</style>
