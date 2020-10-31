<template>
  <div id="gnb" data-app>
    <div class="wrap">

      <div class="pc">
        <nuxt-link class="item lft logo" to="/">동네친구</nuxt-link>
        <nuxt-link class="item lft" to="">도시선택</nuxt-link>

        <!-- <nuxt-link class="item lft" to="/elevator">[elevator]</nuxt-link> -->
        <v-menu open-on-hover middle offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn elevation="2" class="item lft" style="margin-top: 5px;" v-bind="attrs" v-on="on">
              elevator
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <!-- <v-list-item-title>{{ item.url }}</v-list-item-title> -->
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
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          title: '메인',
          url: '/'
        },
        {
          title: '게시판',
          url: '/board'
        },
        {
          title: '게시물',
          url: '/post'
        },
        {
          title: '실험실',
          url: '/test'
        },
      ],
    }),
  }

</script>

<style lang="scss">
  @import '~assets/css/common.scss';

  .v-list-item {
    min-height: 30px!important;
    padding: 3px 10px!important;
  }

  .v-list-item a {
    // border: 1px solid blue;
    width: 100%;
  }
</style>
