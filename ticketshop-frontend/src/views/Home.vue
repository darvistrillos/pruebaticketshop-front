<template>
  <div class="home">
     <navigation/>
    <h1>Home</h1>
    <p v-if="userLogged">Usuario Logueado</p>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import auth from "@/logic/auth.js";
export default {
  name: "Home",
  components: {
    navigation: Navigation
  },
  computed: {
    userLogged() {
      return auth.getUserLogged();
    }
  }
};
</script>

<style>
</style>