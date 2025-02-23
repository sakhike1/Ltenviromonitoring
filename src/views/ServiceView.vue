<template>
  <div class="home">
    


    <projectsView />

    
    <router-view />
  </div>
</template>

<script>



import projectsView from "@/components/common/projectsView.vue"




export default {
  name: 'HomeView',
  components: {
    


    projectsView,

    
  }
}
</script>
