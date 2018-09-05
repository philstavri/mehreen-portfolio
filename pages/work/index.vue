<template>
  <section class="work-page u-move-below-header u-full-width">
    <div class="u-align-center u-full-width-content u-margin-top-xxl">
      <h1 class="c-title--secondary">Work</h1>
      <p>This is a collection of some of my work</p>
      <hr/>
    </div>
    <work-overview class="u-margin-bottom-xxl"
                   :url="require('~/assets/ti-header-sketch.jpg')"
                   title="Tourism Ireland - Scrapbook"
                   description="Providing users with a means to save and share items of interest."
                   link="/work/airline-group">
    </work-overview>

    <work-overview class="u-margin-bottom-xxl"
                   :url="require('~/assets/tc-homepage-tablet-mobile.png')"
                   title="A world-renowned travel company - Excursions"
                   description="Improving the customer’s journey and overall experience of booking an excursion."
                   link="/work/airline-group"
                   :content-first="true">
    </work-overview>

    <work-overview :url="require('~/assets/sa-logo.png')"
                   :stretch-image="true"
                   image-background-color="#000"
                   title="Star Alliance - Website redesign"
                   description="Creating a seamless and premium digital experience for millions of travellers across the network."
                   link="/work/airline-group">
    </work-overview>

  </section>
</template>

<script>
import WorkOverview from "@/components/WorkOverview";
export default {
  components: {
    WorkOverview
  },
  meta: {
    linkedMenuRoute: "work"
  },
  middleware: "auth"
}
</script>

<style lang="scss" scoped>
@import "./styles/settings";
@import "./styles/tools";

.work-summary {
  @include spacing(padding-left padding-right, xxl);
  @include spacing(padding-top padding-bottom, xxxl);

  background-color: $color-1;
  height: 100%;
}

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

.work-overview-old {
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
