<template>
  <div class="mobile">
    <v-app-bar-nav-icon class="icon-left-menu" @click.stop="toggle()"></v-app-bar-nav-icon>
    <nuxt-link class="item mid logo" to="/">동네친구</nuxt-link>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    computed: { // mounted에서 store values return
      todos() {
        return this.$store.state.todo.list;
      },
      drawer() {
        return this.$store.state.gnb.drawer;
      },
    },
    data: () => ({ // 위의 computed function에서 return된 value들을 data로 이식
      // drawer: this.$store.state.gnb.drawer
    }),
    mounted() {
      // this.drawer = this.$store.state.gnb.drawer
      // return this.$store.state.gnb.drawer
      console.log(this.drawer);
    },
    methods: {
      toggle() {
        // this.drawer = !this.drawer; // this.drawer
        // this.$store.commit('gnb/toggle')

        this.$store.commit('todo/add', 'testContext')
        this.$store.commit('gnb/toggleDrawer', 'testContext')
        console.log('[commit type]')
        // this.$store.commit('toogle');
      }
    }
  }
</script>

<style lang="scss">
  @import '~assets/css/common.scss';

</style>
