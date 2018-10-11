<template>
  <div>
    <a href="https://www.linkedin.com/in/mehreenstavri" title="Mehreen Stavri - Linkedin" class="c-contact-link u-margin-right-l" target="_blank">
      <linkedin-icon/>
    </a>

    <a href="/Mehreen-Stavri-2018.pdf" title="Mehreen Stavri - CV" target="_blank" class="c-contact-link">
      CV
    </a>
  </div>
</template>

<script>
  import LinkedinIcon from "vue-material-design-icons/linkedin.vue";

  export default {
    components: { LinkedinIcon },
  };
</script>

<style lang="scss">
@import "./styles/settings";
@import "./styles/tools";

.c-contact-link {
  vertical-align: bottom;
  color: $highlight-2;

  &:hover,
  &:active,
  &:focus{
    color: $shade-1;
  }
}
</style>
