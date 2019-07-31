<template>
  <div class="hello">
    <h1>{{nums}}*{{price}}={{ count }}</h1>
    <button @click="add()">+</button>
    <button @click="changeName()">修改changeName</button>
    <button @click="addTwo()">常量替代mutation触发+</button>
    <div>{{namedata}}</div>
    <div v-for="getItem in doneTodos" :key="getItem.value">{{getItem.text}}</div>
  </div>
</template>

<script>
import * as types from "../store/mutation-types";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    // 1.通过对象子面量的方式访问  此处的store需在当前文件引入
    //  count() {
    //   return store.state.count;
    // },

    // 2.通过根组件注册store选项，该store实例会注入到根组件下的所有子组件中，且子组件能通过this.$store访问到
    // count() {
    //   return this.$store.state.count;
    // },

    // 3.mapState mapGetters 辅助函数  当一个组件获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用mapState辅助函数帮我们生成计算属性
    ...mapState(["nums", "price", "count", "namedata"]),
    ...mapGetters(["doneTodos"])
    // 1.getter 通过属性访问
    // doneTodos() {
    //   return this.$store.getters.doneTodos;
    // },
  },
  methods: {
    //
    add() {
      // 1.提交mutation方法 commit
      // 2.payload提交载荷方法  payload只能传一个值   多个值用对象的形式传入
      this.$store.commit("increment", 10);
      // 3. 对象风格的提交
      // this.$$store.commit({ type: "increment", a: "10" });
    },
    // 4. mutation遵循的Vue响应式机制
    changeName() {
      this.$store.commit("changeNamedata", { a: "11", b: "22" });
    },
    addTwo() {
      let nums = this.nums;
      nums++;
      this.setNums(nums);
    },
    // 5.使用常量替代mutation事件类型  6.使用辅助函数提交
    ...mapMutations({
      setNums: types.SET_NUMS
    })
  }
};
</script>

<style scoped>
</style>
