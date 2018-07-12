<template>
  <section class="about-page">
    <two-col class="about-page__content">
      <div slot="first-col" class="foo">
        <h1 class="title">
          Hello!
        </h1>
        <h2 class="subtitle">
          I'm Mehreen Stavri
        </h2>
        <p>Senior User Experience Designer / Information Architect with over 10 years’ experience in UX across multiple industries, including transport, financial services, telecom and government.</p>
        <p class="u-margin-top-l">My experience covers a range of responsibilities, including facilitating workshops, capturing requirements, producing user journeys, and creating high-fidelity, interactive wireframes for mobile, tablet and desktop.</p>
        <p class="u-margin-top-l">I have extensive experience of working on large-scale projects within multi-disciplinary teams and value the importance of each role at all stages of a project.</p>

        <hr/>

        <h2 class="subtitle">I enjoy...</h2>

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
            <cv-icon/>
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
  components: { TwoCol, CvIcon, LinkedinIcon }
};
</script>

<style lang="scss">
@import "./styles/tools.scss";

.about-page {
  margin-top: 65px;
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
    flex: 1 0 33.3333%;
    min-width: 175px;
    @include spacing(padding-left padding-right, xs);
    @include spacing(margin-bottom, xxl);
  }

  &__column-title {
    font-weight: 300;
  }

  &__detail {
    @include spacing(margin-top, s);
  }
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
