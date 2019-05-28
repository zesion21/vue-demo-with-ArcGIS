<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="jupm()">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    // HelloWorld
  },
  methods: {
    jupm() {
      // console.log("6");
      this.$router.push({ path: "login" });
    }
  }
};
</script>
