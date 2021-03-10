<template>
  <p class="bread-crumb">
    <nuxt-link to="/">메인</nuxt-link>

    <!-- 회원 모집 -->
    <span v-if="list.category.key != null">
      <v-icon small>mdi-chevron-right</v-icon>
      <a @click="pageLink('/board?category='+list.category.key)">{{ list.category.name }}</a>
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
      filterItems: {},
      nameList: {}
    }),
    async mounted() {
      try {
        const filterRes = await axios.get('/api/info/filter', {
          params: {
            city: this.$cookies.get('city'),
            category: this.list.category
          }
        });
        this.filterItems = filterRes.data.data;
      }
      catch (err) { console.log(err); }
    },
    methods: {
      pageLink(url) {
        window.location.href = url;
        // this.$router.push(url)
      }
    }
  }
</script>

<style lang="scss">
  @import '~assets/css/common.scss';

</style>
