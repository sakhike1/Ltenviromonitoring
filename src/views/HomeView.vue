<template>
  <div class="home">
    <HeroView />


    <projectsView />

    
    <router-view />
  </div>
</template>

<script>
import HeroView from "@/components/common/HeroView.vue";


import projectsView from "@/components/common/projectsView.vue"




export default {
  name: 'HomeView',
  components: {
    HeroView,


    projectsView,

    
  }
}
</script>
