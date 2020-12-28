<template>
  <div class="pc" data-app>
    <nuxt-link class="item lft logo" to="/">동네친구</nuxt-link>
    <nuxt-link class="item lft" to="">도시 선택</nuxt-link>

    <v-menu open-on-hover middle offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn elevation="2" class="item lft" style="margin-top: 5px;" v-bind="attrs" v-on="on">
          바로가기
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in list" :key="index">
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
      <nuxt-link class="active" to="">회원 모집</nuxt-link>
      <nuxt-link class="" to="">중고 물품</nuxt-link>
      <nuxt-link class="" to="">아르바이트</nuxt-link>
      <nuxt-link class="" to="">재능교환/판매</nuxt-link>
      <nuxt-link class="" to="">이벤트</nuxt-link>
    </span>

    <v-menu left offset-y v-if="tokenVertify">
      <template v-slot:activator="{ on, attrs }">
        <v-avatar class="item rgt user-icon" v-bind="attrs" v-on="on">
          <img src="~assets/img/repre_1.jpg" class="">
        </v-avatar>
      </template>
      <v-list>
          <v-list-item>
            <nuxt-link to="/profile">내 프로필 보기</nuxt-link>
          </v-list-item>
          <v-list-item>
            <nuxt-link to="">도시 선택</nuxt-link>
          </v-list-item>
          <v-list-item>
            <nuxt-link to="/setting">설정</nuxt-link>
          </v-list-item>
          <v-list-item>
            <nuxt-link to="">로그아웃</nuxt-link>
          </v-list-item>
      </v-list>
    </v-menu>

    <nuxt-link class="item rgt" to="/auth" v-else>로그인/회원가입</nuxt-link>
    
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
      tokenVertify: false,
      list: [], // route list here
    }),
    mounted() {
    }
  }

</script>

<style lang="scss">
  .v-list-item {
    min-height: 30px !important;
    padding: 3px 10px !important;
  }

</style>
