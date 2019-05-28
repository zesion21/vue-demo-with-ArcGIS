<template>
  <div>
    <!-- hello world -->
    <Button type="primary" @click="jump()">登录</Button>
    <!-- <Icon type="ios-add-circle-outline"/> -->
    <div>你好{{name}}</div>

    <div v-for="(item,i) in arr" :key="i">{{item}}</div>

    <hello :parentToChild="value1" @fnFromChild="getMsg" ref="child"></hello>
    <button @click="msgBus">msgBusButton</button>
    <input type="text" v-model="item">
    {{fullName}}
  </div>
</template>
<script>
import axios from "../../toprs/axios";
import store from "../../store";
import HelloWorldVue from "../HelloWorld.vue";
import MsgBus from "../../msgBus";
export default {
  name: "Login",
  components: {
    hello: HelloWorldVue
  },
  data() {
    return {
      arr: [1, 2, 2, 1, 2, 1, 2],
      value1: "父组件的值传给子组件",
      name: "11",
      item: "hello",
      fullName: "123"
    };
  },
  watch: {
    item: function(item) {
      this.fullName = item;
      console.log(this.name);
    }
  },
  // computed: {
  //   thisitem: () => {
  //     return "123";
  //   }
  // },
  methods: {
    getitem(i) {
      if (i == 1) {
        return "A";
      } else {
        return "B";
      }
    },
    jump() {
      console.log(store.state.cout);
      this.$router.push({ path: "/home" });
      // axios.
    },
    msgBus: () => {
      console.log("msgbus");
      MsgBus.$emit("msg", "MGSBUS");
    },
    getMsg(i) {
      console.log(i);
      this.name = i;
      this.$refs.child.myalert();
    }
  }
};
</script>
