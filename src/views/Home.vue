<template>
  <div>
    <HeroMe />
    <SocialMedia />
    <AboutMe />
    <MyPublications />
    <MyCv />
  </div>
</template>

<script>
import HeroMe from '../components/HeroMe.vue';
import SocialMedia from '../components/SocialMedia.vue';
import AboutMe from '../components/AboutMe.vue';
import MyPublications from '../components/MyPublications.vue';
import MyCv from '../components/MyCv.vue';

export default {
  name: 'HomeView',
  components: { HeroMe, SocialMedia, AboutMe, MyPublications, MyCv }
};
</script>

<style scoped>
/* small spacing to separate sections */
div { display: block; }
</style>
