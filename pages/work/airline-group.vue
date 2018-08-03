<template>
  <div class="u-move-below-header u-align-center">
    <hero-banner title="Tourism Ireland - Scrapbook" subtitle="Providing users with a means to save and share items of interest" :image="require('~/assets/ireland.jpg')"></hero-banner>
    <detail-section title="The client" :align-center="true">Tourism Ireland - “Tourism Ireland is responsible for marketing the island of Ireland overseas as a holiday and business tourism destination.”</detail-section>
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
      <two-col class="">
        <div slot="first-col"></div>
        <div slot="second-col">
          <img src='https://placehold.it/600x300?text=Approach%20phase%203' alt='Apprach phase 3'/>
        </div>
      </two-col>
    </detail-section>
    <detail-section title="Output / Outcomes" :align-center="true">
     <p class="u-margin-bottom-xl">An easy to use, responsive Scrapbook tool that allows users to collect and share content on Ireland.com, to assist them in planning a trip.</p>
     <p><a href="https://www.ireland.com/en-gb/">https://www.ireland.com/en-gb/</a></p>
     <p><a href="https://www.ireland.com/en-gb/scrapbook/">https://www.ireland.com/en-gb/scrapbook/</a></p>

     <p class="u-margin-top-l">* Note: screenshots taken from website.</p>


    </detail-section>
    <detail-section title="Personal achievements" :hide-separator="true" :align-center="true">
      <p class="u-margin-bottom-l">Worked collaboratively alongside designers and developers to deliver a key functionality that is live and aims to increase user engagement and interaction.</p>

      <p>Produced and delivered high standard user journeys, wireframes and documentation within tight timescales.</p>

    </detail-section>

  </div>
</template>

<script>
import DetailSection from "@/components/DetailSection";
import HeroBanner from "@/components/HeroBanner";
import TwoCol from "@/components/TwoCol";

export default {
  meta: {
    linkedMenuRoute: "work"
  },
  middleware: "auth",
  components: {
    DetailSection,
    HeroBanner,
    TwoCol,
  }
}
</script>

<style lang="scss"></style>
