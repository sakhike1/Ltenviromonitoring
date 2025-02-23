<template>
  <div class="home">
    <HeroView />


    <projectsView />

<div class="container  mx-auto md:px-6 mt-20" data-aos="fade-up" data-aos-duration="3000">
        <!-- Section: Design Block -->
        <section class="mb-32 mt-20">
            



            <h1 class="mt-10 text-3xl font-bold">
                Vision
            </h1>

            <p>To contribute towards the reduction of negative environmental impacts <br>  by enhancing the positive
                impacts.
            </p>

            <h1 class="mt-10 text-3xl font-bold">
                Mission
            </h1>
            <p>
                Through the detailed impact assessments, monitoring and auditing, we keep abreast with <br> the industry’s
                environmental impacts and assist them in managing the impacts and fulfilling heir compliance obligations

            </p>
        </section>
        <!-- Section: Design Block -->
    </div>
    
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
