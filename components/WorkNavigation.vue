<template>
  <div class="work-navigation u-clearfix">
    <button @click="onPrev" v-if="prevRoute" class="work-navigation__prev">Prev</button>
    <button @click="onNext" v-if="nextRoute" class="work-navigation__next">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    next: { type: String, required: false },
    prev: { type: String, required: false },
  },
  data() {
    return {
      prevRoute: null,
      nextRoute: null,
    };
  },
  created() {
    if (this.next) {
      this.nextRoute = findRoute(this.$router, this.next);
    }

    if (this.prev) {
      this.prevRoute = findRoute(this.$router, this.prev);
    }
  },
  methods: {
    onPrev() {
      this.$router.push(this.prevRoute);
    },
    onNext() {
      this.$router.push(this.nextRoute);
    },
  }
}

function findRoute(router, routeName) {
  return router.options.routes.find( route => route.name === routeName);
}
</script>

<style lang="scss">
@import "./styles/tools";

.work-navigation {
  @include full-width-content;

  &__prev {
    float: left;
  }

  &__next {
    float: right;
  }
}
</style>