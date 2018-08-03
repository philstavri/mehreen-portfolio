<template>
  <section class="about-page u-move-below-header">
    <two-col class="about-page__content">
      <div slot="first-col" class="u-padding-left-m u-padding-right-m">
        <h1 class="c-title">
          Hello!
        </h1>
        <h2 class="c-title--secondary">
          I'm Mehreen
        </h2>
        <p>I'm a Senior User Experience Designer / Information Architect with over 10 years’ experience in UX across multiple industries, including transport, financial services, telecom and government.</p>
        <p class="u-margin-top-l">My experience covers a range of responsibilities, including facilitating workshops, capturing requirements, producing user journeys, and creating high-fidelity, interactive wireframes for mobile, tablet and desktop.</p>
        <p class="u-margin-top-l">I have extensive experience of working on large-scale projects within multi-disciplinary teams and value the importance of each role at all stages of a project.</p>

        <hr/>

        <h2 class="c-title--secondary">I enjoy...</h2>

        <div class="enjoy-feature">
          <div class="enjoy-feature__column">
            <h3 class="enjoy-feature__column-title">Exploring</h3>
            <p class="enjoy-feature__detail">Lorem ipsum dolor sizzle amet, consectetuer adipiscing my shizz. We gonna chung dope velizzle, the bizzle volutpat, suscipizzle quizzle, gravida funky fresh, i saw beyonces tizzles and my pizzle went crizzle.</p>
          </div>
          <div class="enjoy-feature__column">
            <h3 class="enjoy-feature__column-title">Analysing</h3>
            <p class="enjoy-feature__detail">Pellentesque izzle tortor. Sed bow wow wow. Cool izzle yo dapibus phat tempizzle tempor. Hizzle pellentesque nibh izzle shut the shizzle up. Vestibulum check it out tortizzle. Mofo gizzle that's the shizzle doggy. </p>
          </div>
          <div class="enjoy-feature__column">
            <h3 class="enjoy-feature__column-title">Creating</h3>
            <p class="enjoy-feature__detail"> In hac habitasse platea dictumst. Yippiyo dapibizzle. Curabitur tellus gangsta, pretium brizzle, mattizzle boom shackalack, eleifend ma nizzle, gangster. Bizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle. Integizzle sempizzle velit gangster dope.</p>
          </div>
        </div>

        <hr/>
        <div class="u-align-center">
          <a href="https://www.linkedin.com/in/mehreenstavri" title="Mehreen Stavri - Linkedin" class="footer-bar__link">
            <linkedin-icon/>
          </a>

          <a href="/Mehreen-Stavri-2018.pdf" title="Mehreen Stavri - CV" target="_blank" class="footer-bar__link">
            CV
          </a>
        </div>

      </div>
      <div slot="second-col">&nbsp;</div>
    </two-col>
  </section>
</template>

<script>
import CvIcon from "vue-material-design-icons/file-pdf.vue";
import LinkedinIcon from "vue-material-design-icons/linkedin.vue";

import TwoCol from "@/components/TwoCol";

export default {
  components: { TwoCol, CvIcon, LinkedinIcon },
  meta: {
    linkedMenuRoute: "index"
  },
};
</script>

<style lang="scss">
@import "./styles/tools.scss";

.about-page {
  min-height: 100vh;
  background-color: $color-shade-light;
  background-image: url(~/assets/about-background.jpg);
  background-repeat: no-repeat;
  background-position: left 50vw center;
  background-size: cover;
  padding-bottom: 100px;

  &__content {
    @include full-width-content;
    height: 100%;
    @include spacing(margin-bottom, xxxl);
  }

  @media (max-width: 700px) {
    padding-top: 200px;
    background-position: left top;
    background-size: contain;
    display: flex;
    flex-direction: column-reverse;

    &__content {
      background-color: $color-shade-light;
    }
  }
}

.enjoy-feature {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &__column {
    flex: 1 0 33.333%;
    min-width: 175px;
    @include spacing(padding-right, l);
    @include spacing(margin-bottom, xxl);
  }

  &__column-title {
    font-weight: 300;
  }

  &__detail {
    @include spacing(margin-top, s);
  }
}

.links {
  padding-top: 15px;
}
</style>
