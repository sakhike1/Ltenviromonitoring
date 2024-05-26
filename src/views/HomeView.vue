<template>
  <div class="home">
    <HeroView />
    <HeroTwo />
    <CallToAction />
    <projectsView />
    <BannerView />
    <ContactView />
    <router-view />
  </div>
</template>

<script>
import HeroView from "@/components/common/HeroView.vue";
import HeroTwo from "@/components/common/HeroTwo.vue";
import CallToAction from "@/components/common/CallToAction.vue"
import projectsView from "@/components/common/projectsView.vue"
import BannerView from "@/components/common/BannerView.vue"
import ContactView from "@/components/common/ContactView.vue"


export default {
  name: 'HomeView',
  components: {
    HeroView,
    HeroTwo,
    CallToAction,
    projectsView,
    BannerView,
    ContactView
  }
}
</script>
