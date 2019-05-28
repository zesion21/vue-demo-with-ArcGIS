<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <div>
      <p>
        If iView is successfully added to this project, you'll see an
        <code v-text="'<Button>'"></code>
        below
      </p>
      <Button type="primary">Button</Button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <router-view/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
  },
  created() {
    let storage = window.localStorage;
    if (storage.getItem("userId") == null) {
      if (!window.location.href.includes("login")) {
        this.$router.push({ path: "login" });
        alert("请登录！");
      }
    } else {
      const thisTime = new Date().getTime();
      const thatTime = storage.getItem("timer");
      if (thisTime - thatTime > 86400000) {
        storage.clear();
        this.$router.push({ path: "login" });
        alert("身份认证已经过期，请重新登录");
      }
    }
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>

