<template>
  <div class="u-move-below-header u-align-center">
    <hero-banner title="Tourism Ireland - Scrapbook" subtitle="Providing users with a means to save and share items of interest" :image="require('~/assets/ireland.jpg')"></hero-banner>
    <detail-section title="The client" :align-center="true" class="u-margin-top-xxxl">Tourism Ireland - “Tourism Ireland is responsible for marketing the island of Ireland overseas as a holiday and business tourism destination.”</detail-section>
    <detail-section title="The goal">To design a Scrapbook functionality that allows users to save and share content, such as destinations and trip ideas, on Ireland.com, a tourism site. The feature needs to be simple to use and manage - users should be able to easily create a scrapbook, and add, view, and delete items within a scrapbook. It is also important that users have the ability to share their scrapbooks with friends. Furthermore, consideration must be given to registered/logged in users, and users who are not logged in to the the site.</detail-section>
    <detail-section title="My role" :align-center="true">Senior UX Architect. My responsibility was to design and document a new Scrapbook feature for the Ireland.com site.</detail-section>
    <detail-section title="Approach">
      <ul>
        <li>Created personas and user scenarios.</li>
        <li>Developed user journeys and use cases, for:
          <ul>
            <li>registered/logged in users and users not registered;</li>
            <li>individual and multiple views of scrapbooks.</li>
          </ul>
        </li>
        <li>Sketched ideas and concepts, and shared with the wider team (designers and front end developers) to discuss features, functionality and feasibility.</li>
        <li>Designed a tutorial for first-time visitors to the site.</li>
        <li>Produced high-fidelity, annotated wireframes to cover all key user journeys.</li>
        <li>Documented and presented user journeys and wireframes.</li>
        <li>Worked alongside designers and front end developers to produce the Scrapbook functionality on Ireland.com.</li>
      </ul>

      <div class="u-align-center u-margin-top-xxxl">
        <caption-image :url="require('~/assets/ti-user-scenarios.png')" caption="User scenarios"/>

        <caption-image :url="require('~/assets/ti-user-journey-add.png')" caption="Scrapbook User journey - Add to Scrapbook"/>

        <caption-image :url="require('~/assets/ti-user-flows.png')" caption="User flows - Multiple vs Individual view of scrapbooks"/>

        <caption-image :url="require('~/assets/ti-not-signed-in-adding-item.png')" caption="Adding first item - signed in/not signed in"/>

        <caption-image :url="require('~/assets/ti-signed-in-adding-item.png')" caption="Adding an item to a particular scrapbook - signed in"/>

        <caption-image :url="require('~/assets/ti-signed-in-scrapbook-overview.png')" caption="Scrapbook overview - signed in"/>

        <caption-image :url="require('~/assets/ti-signed-in-single-scrapbook.png')" caption="Single scrapbook - signed in"/>
      </div>
    </detail-section>
    <detail-section title="Output" :align-center="true">
     <p class="u-margin-bottom-xl">An easy to use, responsive Scrapbook tool that allows users to collect and share content on Ireland.com, to assist them in planning a trip.</p>
     <p><a href="https://www.ireland.com/en-gb/" class="highlight">Ireland.com homepage</a></p>
     <p><a href="https://www.ireland.com/en-gb/scrapbook/" class="highlight">Ireland.com My Scrapbook</a></p>

     <p class="u-margin-top-l u-text-mini">* Note: screenshots taken from website.</p>

      <caption-image :url="require('~/assets/ti-tutorial.png')" caption="Scrapbook tutorial"/>
      <caption-image :url="require('~/assets/ti-create-new.png')" caption="Create a new scrapbook"/>
      <caption-image :url="require('~/assets/ti-multiple-items.png')" caption="My Scrapbooks - multiple items saved"/>
      <caption-image :url="require('~/assets/ti-multiple-items-fb.png')" caption="Sharing scrapbook - Facebook message"/>
    </detail-section>
    <detail-section title="Personal achievements" :hide-separator="true" :align-center="true">
      <p class="u-margin-bottom-l">Worked collaboratively alongside designers and developers to deliver a key functionality that is live and aims to increase user engagement and interaction.</p>

      <p>Produced and delivered high standard user journeys, wireframes and documentation within tight timescales.</p>

    </detail-section>

  </div>
</template>

<script>
import CaptionImage from "@/components/CaptionImage";
import CoverImage from "@/components/CoverImage";
import DetailSection from "@/components/DetailSection";
import HeroBanner from "@/components/HeroBanner";
import TwoCol from "@/components/TwoCol";

export default {
  meta: {
    linkedMenuRoute: "work"
  },
  middleware: "auth",
  components: {
    CaptionImage,
    CoverImage,
    DetailSection,
    HeroBanner,
    TwoCol,
  }
}
</script>

<style lang="scss">
@import "./styles/settings";
@import "./styles/tools";

.caption {
  background-color: $color-2;
  color: #fff;
  text-align: center;
  @include spacing(margin-bottom, xxxl);
  @include spacing(padding, s);

  position: relative;
  top: -3px;
}
</style>
