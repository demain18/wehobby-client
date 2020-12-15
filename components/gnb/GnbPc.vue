<template>
  <div class="pc" data-app>
    <nuxt-link class="item lft logo" to="/">동네친구</nuxt-link>
    <nuxt-link class="item lft" to="">도시선택</nuxt-link>

    <!-- <nuxt-link class="item lft" to="/elevator">[elevator]</nuxt-link> -->
    <v-menu open-on-hover middle offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn elevation="2" class="item lft" style="margin-top: 5px;" v-bind="attrs" v-on="on">
          바로가기
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in list" :key="index">
          <!-- <v-list-item-title>{{ item.url }}</v-list-item-title> -->
          <nuxt-link :to="item.url">
            {{ item.title }}
            (
            {{ item.url }}
            )
          </nuxt-link>
        </v-list-item>
      </v-list>
    </v-menu>

    <span class="item mid">
      <nuxt-link class="" to="">회원모집</nuxt-link>
      <nuxt-link class="" to="">중고물품</nuxt-link>
      <nuxt-link class="" to="">알바모집</nuxt-link>
    </span>
    <!-- <span class="item rgt user-icon"></span> -->
    <v-avatar class="item rgt user-icon">
      <img src="~assets/img/repre_1.jpg" class="">
    </v-avatar>
  </div>
</template>

<script>
  /*
    서버 모듈인 fs는 사용할 수 없음
  */

  export default {
    created() {
      this.$router.options.routes.forEach(route => {
        this.list.push({
          title: route.name,
          url: route.path
        })
      })
    },
    data: () => ({
      list: [] // route list here
    }),
    mounted() {
      // this.list.sort(function(a, b) {
      //     return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
      // });
    }
  }

</script>

<style lang="scss">
  .v-list-item {
    min-height: 30px !important;
    padding: 3px 10px !important;
  }

</style>
