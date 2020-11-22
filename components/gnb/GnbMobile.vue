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
      // drawer() {
      //   return this.$store.state.gnb.drawer;
      // },
    },
    data: () => ({ // 위의 computed function에서 return된 value들을 data로 이식
      // drawer: null
    }),
    mounted() {
      // console.log(this.drawer);
    },
    methods: {
      toggle() {
        this.$store.commit('gnb/toggleDrawer')
      }
    }
  }
</script>

<style lang="scss">
  // @import '~assets/css/common.scss';

</style>
