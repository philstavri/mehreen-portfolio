<template>
  <section class="about-page u-move-below-header">
    <two-col class="about-page__content">
      <div slot="first-col" class="u-padding-left-m u-padding-right-m">
        <h1 class="c-title u-margin-bottom-l u-margin-top-xxl u-color-highlight-2">
          Hello, I'm Mehreen
        </h1>
        <p>I'm a Senior User Experience Designer / Information Architect with over 10 years’ experience in UX across multiple industries, including transport, financial services, telecom and government.</p>
        <p class="u-margin-top-xl">My experience covers a range of responsibilities, including facilitating workshops, capturing requirements, producing user journeys, and creating high-fidelity, interactive wireframes for mobile, tablet and desktop.</p>
        <p class="u-margin-top-xl">I have extensive experience of working on large-scale projects within multi-disciplinary teams and value the importance of each role at all stages of a project.</p>

        <hr/>

        <h2 class="c-title--secondary">I enjoy...</h2>

        <div class="enjoy-feature">
          <div class="enjoy-feature__column">
            <h3 class="enjoy-feature__column-title c-title--tertiary">Exploring</h3>
            <p class="enjoy-feature__detail">Discover new opportunities to improve usability.</p>
          </div>
          <div class="enjoy-feature__column">
            <h3 class="enjoy-feature__column-title c-title--tertiary">Analysing</h3>
            <p class="enjoy-feature__detail">Drill down, investigate and understand the user’s needs.</p>
          </div>
          <div class="enjoy-feature__column">
            <h3 class="enjoy-feature__column-title c-title--tertiary">Creating</h3>
            <p class="enjoy-feature__detail">Sketch, design and create the best user experience.</p>
          </div>
        </div>

        <hr/>
        <contact-links class="u-align-center"></contact-links>

      </div>
      <div slot="second-col">&nbsp;</div>
    </two-col>
  </section>
</template>

<script>
  import ContactLinks from "@/components/ContactLinks";
  import TwoCol from "@/components/TwoCol";

  export default {
    components: { ContactLinks, TwoCol },
    meta: {
      linkedMenuRoute: "index"
    },
  };
</script>

<style lang="scss">
@import "./styles/tools.scss";
.about-page {
  min-height: 100vh;
  background-color: $color-1;
  padding-bottom: 100px;
  position: relative;

  &:after {
    position: absolute;
    width: 50%;
    height: 100%;
    content: " ";
    top: 0;
    right: 0;
    background-image: url(~/assets/mehreen-headshot.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
  }

  &__content {
    @include full-width-content;
    height: 100%;
    @include spacing(margin-bottom, xxxl);
  }

  @media (max-width: 700px) {
    padding-top: 300px;
    background-position: left top;
    background-size: contain;
    display: flex;
    flex-direction: column-reverse;

    &__content {
      background-color: $color-1;
    }

    &:after {
      top: $header-height;
      width: 100%;
      height: 250px;
      background-position: center bottom -110px;
    }
  }

  @media (max-width: 520px) {

    &:after {
     background-position: center bottom -40px;
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
