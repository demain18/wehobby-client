<template>
  <!-- <div id="gnb" data-app>
    <div class="wrap">

      <div class="pc">
        <nuxt-link class="item lft logo" to="/">동네친구</nuxt-link>
        <nuxt-link class="item lft" to="">도시선택</nuxt-link>

        <v-menu open-on-hover middle offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn elevation="2" class="item lft" style="margin-top: 5px;" v-bind="attrs" v-on="on">
              바로가기
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
            </v-list-item>
          </v-list>
        </v-menu>

        <span class="item mid">
          <nuxt-link class="" to="">회원모집</nuxt-link>
          <nuxt-link class="" to="">중고물품</nuxt-link>
          <nuxt-link class="" to="">알바모집</nuxt-link>
        </span>
        <span class="item rgt user-icon"></span>
      </div>

      <div class="mobile">
        <v-app-bar-nav-icon class="icon-left-menu" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <nuxt-link class="item mid logo" to="/">동네친구</nuxt-link>
        
      </div>

    </div>
  </div> -->
  <div>
    <div id="gnb" data-app>
      <div class="wrap">
        <GnbPc/>
        <GnbMobile/>
      </div>
    </div>
    <!-- <GnbNavi/> -->
    <GnbDrawer/>
  </div>
</template>

<script>
  export default {
    data: () => ({}),
  }

</script>

<style lang="scss">
  // @import '~assets/css/common.scss';

</style>
