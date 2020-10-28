<template>
  <div>
    <div id="gnb">
      <div class="wrap">

        <div class="pc">
          <nuxt-link class="item lft logo" to="/">동네친구</nuxt-link>
          <nuxt-link class="item lft" to="">도시선택</nuxt-link>
          <nuxt-link class="item lft" to="/elevator">[elevator]</nuxt-link>
          <span class="item mid">
            <nuxt-link class="" to="">회원모집</nuxt-link>
            <nuxt-link class="" to="">중고물품</nuxt-link>
            <nuxt-link class="" to="">알바모집</nuxt-link>
          </span>
          <span class="item rgt user-icon"></span>
        </div>

        <div class="mobile">
          <v-app-bar-nav-icon class="icon-left-menu" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <!-- <v-icon color="darken-1" class="icon-left-menu">
          mdi-menu
        </v-icon> -->
          <nuxt-link class="item mid logo" to="/">동네친구</nuxt-link>
        </div>

      </div>
    </div>

    <!-- <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->
  </div>
</template>

<script>
  export default {
    // data: () => ({
    //   drawer: false,
    //   group: null,
    // }),

    // watch: {
    //   group() {
    //     this.drawer = false
    //   },
    // },
  }

</script>

<style lang="scss">
  @import '~assets/css/common.scss';

  @media (max-width: 769px) {
    #gnb .pc {
      display: none;
    }

    #gnb .mobile {
      display: block;
    }

    #gnb .wrap .mid {
      margin-left: -35px;
    }

    #gnb .wrap .icon-left-menu {
      line-height: 40px;
      margin-top: 3px;
    }
  }

  @media (max-width: 575px) {}

</style>
