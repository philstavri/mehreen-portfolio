<template>
  <div class="u-move-below-header u-align-center">
    <hero-banner title="Airline group" subtitle="UX / Wireframes / Workshop facilitation" :image="require('~/assets/plane-wing.jpg')"></hero-banner>
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
    <detail-section title="Approach">
      <h2 class="c-title--tertiary">Approach phase 1</h2>
      <p>
        Mumblecore lorem church-key leggings sed. Polaroid enim hoodie, fashion axe et prism enamel pin farm-to-table etsy dreamcatcher before they sold out XOXO fixie. Thundercats voluptate beard, pariatur labore master cleanse ut. Sriracha exercitation eiusmod kitsch art party. Palo santo lomo cillum sustainable, literally twee celiac +1 put a bird on it freegan craft beer. Gastropub knausgaard sunt adipisicing, raw denim kinfolk franzen skateboard waistcoat voluptate yuccie meggings raclette.
      </p>

      <h2 class="c-title--tertiary u-margin-top-m">Approach phase 2</h2>
      <p>
        Elit velit qui Lorem quis proident laborum mollit reprehenderit sint nisi occaecat do consequat. Sit incididunt laborum anim incididunt laborum excepteur esse incididunt cillum. Magna ut pariatur est eu.
      </p>

      <two-col class="u-margin-top-xl">
        <div slot="first-col">
          <h2 class="c-title--tertiary">Approach phase 3</h2>
          <p>Commodo amet laborum ipsum tempor commodo amet tempor laborum irure. Ad minim qui incididunt eu esse officia tempor excepteur cupidatat excepteur eiusmod fugiat aliqua. Sit aliqua qui dolor amet elit cupidatat veniam deserunt ullamco. Esse nulla excepteur magna veniam pariatur excepteur qui est. Laboris labore fugiat et consequat ex aliqua Lorem. Deserunt deserunt est minim laboris in eiusmod irure eiusmod nulla reprehenderit cillum.</p>
        </div>
        <div slot="second-col">
          <img src='https://placehold.it/600x300?text=Approach%20phase%203' alt='Apprach phase 3'/>
        </div>
      </two-col>
    </detail-section>
    <detail-section title="Output / Outcomes">
      <ul class="u-margin-bottom-xxl">
        <li>Incididunt anim et officia elit qui.</li>
        <li>Consectetur duis non non exercitation nostrud eiusmod sit nisi irure quis.</li>
        <li>Elit quis dolor ex consequat officia ex.</li>
        <li>Nostrud cillum cillum incididunt ipsum proident proident consectetur qui quis occaecat consequat consequat.</li>
      </ul>
      <img src='https://placehold.it/1200x400?text=Output%20Outcomes' alt='Output and outcomes' class="u-full-width"/>

      <two-col>
        <div slot="first-col">
          <img src='https://placehold.it/600x300?text=Output%201' alt='Output 1' class="u-full-width"/>
          <p>Ipsum proident esse deserunt tempor consectetur laboris commodo ea magna sint dolor quis. Duis ullamco nulla et excepteur in. Ad cillum consequat nostrud ea aliquip tempor anim. Duis tempor adipisicing aliquip ipsum cupidatat aliquip deserunt minim eiusmod sint excepteur. Esse quis deserunt consectetur consequat anim aute deserunt esse velit do aute Lorem laboris. Consequat Lorem esse exercitation laboris.</p>
        </div>
        <div slot="second-col">
          <img src='https://placehold.it/600x300?text=Output%202' alt='Output 2' class="u-full-width"/>
          <p>Adipisicing Lorem eu nostrud non cillum do esse Lorem nostrud. Aute in Lorem nostrud proident proident eu incididunt ipsum sint cillum reprehenderit. Sint quis aute culpa aliqua mollit esse.</p>
        </div>
      </two-col>
    </detail-section>
    <detail-section title="Personal achievements" :hide-separator="true">
      <ul>
        <li>Nulla nulla Lorem esse et.</li>
        <li>Veniam ex incididunt reprehenderit cupidatat laboris deserunt eu.</li>
        <li>Adipisicing elit nisi adipisicing fugiat sint veniam ex est aute irure aliquip nostrud reprehenderit.</li>
      </ul>
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
