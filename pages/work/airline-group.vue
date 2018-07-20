<template>
  <div class="u-move-below-header u-align-center">
    <detail-section title="The client">Pitchfork disrupt four dollar toast neutra elit blue bottle waistcoat in hashtag. Cupidatat tilde kinfolk, umami biodiesel VHS leggings fugiat do ethical PBR&B celiac lumbersexual cray fanny pack. Church-key chambray franzen letterpress mustache godard. Jean shorts ut try-hard banjo pug, VHS enamel pin pop-up adaptogen street art.</detail-section>
    <detail-section title="The goal/challenge">Nisi neutra edison bulb eu, single-origin coffee green juice occupy. Typewriter officia dolore YOLO quinoa ramps skateboard hexagon excepteur. In +1 occaecat lo-fi cronut, wayfarers pop-up ramps organic pitchfork. Street art hashtag bitters ugh chicharrones vexillologist shoreditch fingerstache trust fund yuccie velit. Waistcoat plaid readymade, incididunt gochujang post-ironic hoodie. Aliquip cardigan green juice la croix heirloom elit sriracha echo park pickled semiotics swag ad ex flexitarian biodiesel.</detail-section>
    <detail-section title="My role">
      <two-col>
        <div slot="first-col">
          Dolore raclette twee narwhal pariatur enim, leggings quinoa chartreuse iceland. Hella waistcoat portland food truck normcore. Cred cliche vaporware vape mumblecore fashion axe, tattooed cray microdosing magna. Four dollar toast hexagon la croix sustainable wolf deserunt church-key poke.
        </div>
        <div slot="second-col"><img src='https://placehold.it/600x300?text=My%20Role' alt='My role' class="u-full-width"/></div>
      </two-col>
    </detail-section>
    <detail-section title="Approach">Mumblecore lorem church-key leggings sed. Polaroid enim hoodie, fashion axe et prism enamel pin farm-to-table etsy dreamcatcher before they sold out XOXO fixie. Thundercats voluptate beard, pariatur labore master cleanse ut. Sriracha exercitation eiusmod kitsch art party. Palo santo lomo cillum sustainable, literally twee celiac +1 put a bird on it freegan craft beer. Gastropub knausgaard sunt adipisicing, raw denim kinfolk franzen skateboard waistcoat voluptate yuccie meggings raclette.</detail-section>
  </div>
</template>

<script>
import DetailSection from "@/components/DetailSection";
import TwoCol from "@/components/TwoCol";

export default {
  middleware: "auth",
  components: {
    DetailSection,
    TwoCol,
  }
}
</script>

<style lang="scss"></style>
