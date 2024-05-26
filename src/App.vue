<template>
  <nav>
    <NavigationView />

  </nav>
  <router-view />
  <FooterView />
</template>

<script>


import NavigationView from "./components/common/NavigationView.vue";
import FooterView from "./components/common/FooterView.vue";



export default {
  name: "App",
  components: {
    NavigationView,
    FooterView





  },
};
</script>

<style></style>
