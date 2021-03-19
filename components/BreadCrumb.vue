<template>
  <p class="bread-crumb">
    <!-- 메인 -->
    <nuxt-link to="/">메인</nuxt-link>
    <!-- 회원 모집 -->
    <span v-if="list.category.key != null">
      <v-icon small>mdi-chevron-right</v-icon>
      <a @click="resetCity()">{{ list.category.name }}</a>
    </span>
    <!-- 서울특별시의 회원 모집 -->
    <span v-if="list.city.key != null">
      <v-icon small>mdi-chevron-right</v-icon>
      <a @click="pageLink('/board?category='+list.category.key)">{{ list.city.name }}의 {{ list.category.name }}</a>
    </span>
    <!-- 노원구의 회원 모집 -->
    <span v-if="list.area.key != null">
      <v-icon small>mdi-chevron-right</v-icon>
      <a @click="pageLink('/board?category='+list.category.key+'&area='+list.area.key)">{{ list.area.name }}의 {{ list.category.name }}</a>
    </span>
    <!-- 글 이름 -->
    <span v-if="list.post.key != null">
      <v-icon small>mdi-chevron-right</v-icon>
      <a>{{ list.post.name }}</a>
    </span>

  </p>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import Vuecookies from 'vue-cookies';
  Vue.use(Vuecookies);

  export default {
    computed: {
      list() {
        return this.$store.state.urls.list;
      }
    },
    data: () => ({

    }),
    async mounted() {

    },
    methods: {
      pageLink(url) {
        this.$router.push(url)
      },
      resetCity() {
        if (this.$cookies.isKey('city')) {
          this.$cookies.remove('city');
          this.$cookies.set('city', 0, '30d');
        } else {
          this.$cookies.set('city', 0, '30d');
        }
        window.location.href = "/";
      }
    }
  }
</script>

<style lang="scss">
  @import '~assets/css/common.scss';

</style>
