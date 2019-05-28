<template>
  <div>
    <div>{{parentToChild}}</div>
    <button @click="getmsg">click</button>
  </div>
</template>

<script>
import MsgBus from "../msgBus.js";
export default {
  name: "HelloWorld",
  // props: ["parentToChild"]
  props: {
    parentToChild: String
  },
  created() {
    MsgBus.$on("msg", e => {
      // this.examineNum = e;
      console.log(e);
    });
  },
  methods: {
    getmsg() {
      // console.log("lll");
      this.$emit("fnFromChild", 23);
    },
    myalert() {
      alert("hello world");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
