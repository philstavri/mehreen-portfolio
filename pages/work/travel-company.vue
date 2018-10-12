<template>
  <div class="u-move-below-header u-align-center">
    <hero-banner title="A world-renowned travel company - Excursions"
                 subtitle="Improving the customer’s journey and overall experience of booking an excursion"
                 :image="require('~/assets/tc-beach.jpg')"></hero-banner>
    <detail-section title="The client" :align-center="true" class="u-margin-top-xxxl">
      A large and world-renowned leisure, travel and tourism company.”
    </detail-section>
    <detail-section title="The goal">
      <p>To produce a prototype that simplifies the user’s path to booking an excursion, with an aim to reducing the abandonment rate, and improving conversion.</p>
      <p class="u-margin-top-l">Specifically to,
        <ul>
          <li>simplify and reduce wording;</li>
            <li>remove distractions and keep the user engaged and on the booking path;</li>
            <li>clarify the process and tasks to ensure it is no longer complicated and confusing.</li>
        </ul>
      </p>
    </detail-section>
    <detail-section title="My role" :align-center="true">
      Lead UX Consultant. My responsibility was to work with the client to design a clearer and easy to use booking process, and to create a clickable prototype to demonstrate these improvements.
    </detail-section>
    <detail-section title="Approach">
      <ul>
        <li>Reviewed existing data and documentation.</li>
        <li>Led and presented a full day workshop in Palma to:
          <ul>
            <li>understand the requirements of key stakeholders;</li>
            <li>understand the existing pain-points and areas of concern;</li>
            <li>review the client’s existing documentation, research and guidelines;</li>
            <li>understand their market competitors;</li>
            <li>define opportunities, ideas and concepts for the client.</li>
          </ul>
        </li>
        <li>Developed proposed sitemap</li>
        <li>Produced basic journeys (flow diagrams)</li>
        <li>Identified templates.</li>
        <li>Reviewed with client - selected focal areas and chose key screens to redesign.</li>
        <li>Initially produced low-fidelity wireframes for key areas (single breakpoint). Reviewed with client.</li>
        <li>Iterated and created high-fidelity, clickable wireframes (Axure prototype) for all breakpoints (responsive).</li>
        <li>Stylised and branded wireframes (colour, logos).</li>
        <li>Added page notes and annotations to wireframes. Included a ‘Notes & Guidance’ section for each page.</li>
        <li>Delivered Axure prototype.</li>
      </ul>

      <div class="u-align-center u-margin-top-xxxl">
        <caption-image :url="require('~/assets/tc-workshop-agenda.png')" caption="Workshop agenda"/>

        <caption-image :url="require('~/assets/tc-holiday-timeline.jpg')" caption="Holiday stages / timeline"/>

        <caption-image :url="require('~/assets/tc-booking-flow.jpg')" caption="Booking flow"/>

        <caption-image :url="require('~/assets/tc-sitemap.png')" caption="Sitemap"/>

        <caption-image :url="require('~/assets/tc-booking-sketches.jpg')" caption="Initial screen sketches"/>

        <caption-image :url="require('~/assets/tc-booking-process.jpg')" caption="Booking process"/>

        <caption-image :url="require('~/assets/tc-homepage-lo-fi.png')" caption="Low fidelity wireframe, desktop - Homepage"/>

        <caption-image :url="require('~/assets/tc-excursion-detail-lo-fi-entered.png')" caption="Low fidelity wireframe, desktop - Excursion detail"/>

        <caption-image :url="require('~/assets/tc-homepage-hi-fi-desktop.png')" caption="High fidelity, clickable wireframe, desktop - Homepage"/>

        <caption-image :url="require('~/assets/tc-homepage-tablet-mobile.png')" caption="High fidelity, clickable wireframe, tablet and mobile - Homepage"/>

        <caption-image :url="require('~/assets/tc-excursion-list-hi-fi-notes.png')" caption="Page notes and annotations - Excursion list"/>
      </div>
    </detail-section>
    <detail-section title="Output" :align-center="true">
     <p class="u-margin-bottom-l">A high-fidelity, stylised Axure prototype that demonstrated a simplified booking journey by allowing the client to click through key tasks.</p>
     <p class="u-margin-bottom-xl">The wireframes were modular and produced for desktop, tablet and mobile.</p>

      <caption-image :url="require('~/assets/tc-destination-dropdown.png')" caption="Homepage - Destination dropdown"/>
      <caption-image :url="require('~/assets/tc-excursion-list-filters.png')" caption="Excursion list - Filters"/>
      <caption-image :url="require('~/assets/tc-excursion-list-mobile-filters.png')" caption="Excursion list, mobile - Filters"/>
      <caption-image :url="require('~/assets/tc-excursion-detail-alternative-pickup.png')" caption="Excursion detail - pick up point"/>
      <caption-image :url="require('~/assets/tc-excursion-detail-mobile-pickup.png')" caption="Excursion detail, mobile"/>
      <caption-image :url="require('~/assets/tc-excursion-detail-tablet-pickup.png')" caption="Excursion detail, tablet"/>
    </detail-section>
    <detail-section title="Personal achievements" :hide-separator="true">
      <p class="u-margin-bottom-l">Worked with a large, global client on an interesting and challenging project.</p>
      <p class="u-margin-bottom-l">Responsible for preparing and leading a workshop abroad, where I met and collaborated with key stakeholders.</p>
      <p>Produced high-fidelity, clickable wireframes - I enjoyed the challenge of producing a functional prototype, and greatly enhanced my Axure skills in the process by learning new functionality.</p>

    </detail-section>
    <work-navigation prev="work-star-alliance"/>
  </div>
</template>

<script>
import CaptionImage from "@/components/CaptionImage";
import CoverImage from "@/components/CoverImage";
import DetailSection from "@/components/DetailSection";
import HeroBanner from "@/components/HeroBanner";
import TwoCol from "@/components/TwoCol";
import WorkNavigation from "@/components/WorkNavigation";

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
    WorkNavigation,
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
