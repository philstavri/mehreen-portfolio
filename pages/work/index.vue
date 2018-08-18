<template>
  <section class="work-page u-move-below-header u-full-width">
    <div class="u-align-center u-full-width-content u-margin-top-xxl">
      <h1 class="c-title--secondary">Work</h1>
      <p>This is a collection of my work</p>
      <hr/>
    </div>
    <two-col class="u-full-width-content" :flush="true">
      <div slot="first-col">
        <cover-image :url="require('~/assets/ti-scrapbook-empty.png')" height="400px"/>
      </div>
      <div slot="second-col" class="u-background-color-highlight block-color">
        <h1 class="c-title--secondary">Tourism Ireland - Scrapbook</h1>
        <p>Providing users with a means to save and share items of interest.</p>
        <router-link to="/work/airline-group" class="work-overview__link">
          Read more
        </router-link>
      </div>
    </two-col>
    <div class="work-overview-collection">
      <div class="work-overview work-overview-collection__item">
        <img src="~/assets/ti-scrapbook-empty.png"/>

        <h1 class="c-title--secondary">Tourism Ireland - Scrapbook</h1>
        <p>Providing users with a means to save and share items of interest.</p>
        <router-link to="/work/airline-group" class="work-overview__link">
          Read more
        </router-link>


      </div>
      <div class="work-overview work-overview-collection__item">
        <img src="~/assets/plane-wing.jpg"/>

        <h1 class="c-title--secondary">Corporate travel</h1>
        <p>Cupcake ipsum dolor sit amet oat cake jelly beans gummi bears I love. Croissant bear claw pastry. Powder jujubes tootsie roll sweet roll cupcake jelly-o jelly candy canes. Biscuit pastry bonbon biscuit topping jelly cheesecake.</p>
        <a href="#" class="work-overview__link">
          Read more
        </a>


      </div>
      <div class="work-overview work-overview-collection__item">
        <div class="work-overview__image-container">
          <img src="~/assets/plane-wing.jpg"/>
        </div>
        <h1 class="c-title--secondary">Corporate travel</h1>
        <p>Cupcake ipsum dolor sit amet oat cake jelly beans gummi bears I love. Croissant bear claw pastry. Powder jujubes tootsie roll sweet roll cupcake jelly-o jelly candy canes. Biscuit pastry bonbon biscuit topping jelly cheesecake.</p>
        <a href="#" class="work-overview__link">
          Read more
        </a>


      </div>
    </div>
  </section>
</template>

<script>
import CoverImage from "@/components/CoverImage";
import TwoCol from "@/components/TwoCol";
export default {
  components: {
    CoverImage,
    TwoCol
  },
  meta: {
    linkedMenuRoute: "work"
  },
  middleware: "auth"
}
</script>

<style lang="scss">
@import "./styles/settings";
@import "./styles/tools";

.block-color {
  height: 100%;
  @include spacing(padding, l);
}

.work-overview-collection {
  @include full-width-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  &__item {
    flex: 1 1 50%;
    min-width: 320px;
  }
}

.work-overview {
  position: relative;
  display: block;
  text-decoration: none;
  text-align: center;

  overflow: hidden;
  padding: 40px 20px;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: right top;

  img {
    width: 100%;
  }

  &__image-container {
    max-height: 400px;
    overflow: hidden;
  }

  &__link {
    @include spacing(padding, s);
    @include spacing(margin-top, l);
    border: 1px solid $color-1;
    display: inline-block;

    color: $color-1;
    border-radius: 3px;
    text-decoration: none;

    &:hover {
      text-decoration: none;
      background-color: $color-1;
      color: white;
    }
  }
}
</style>
