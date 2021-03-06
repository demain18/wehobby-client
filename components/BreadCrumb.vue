<template>
  <p class="bread-crumb">
    <nuxt-link to="">메인</nuxt-link>

    <!-- <span v-for="(item, index) in list" v-bind:key="index">
      <v-icon small>mdi-chevron-right</v-icon>
      <nuxt-link to="">{{ index }}({{ item }})</nuxt-link>
    </span>

    <br/> -->

    <span v-if="list.category.key != null">
      <v-icon small>mdi-chevron-right</v-icon>
      <nuxt-link to="">{{ list.category.name }}</nuxt-link>
    </span>

    <span v-if="list.city.key != null">
      <v-icon small>mdi-chevron-right</v-icon>
      <nuxt-link to="">{{ list.city.name }}의 {{ list.category.name }}</nuxt-link>
    </span>

    <span v-if="list.area.key != null">
      <v-icon small>mdi-chevron-right</v-icon>
      <nuxt-link to="">{{ list.area.name }}의 {{ list.category.name }}</nuxt-link>
    </span>

    <span v-if="list.post.key != null">
      <v-icon small>mdi-chevron-right</v-icon>
      <nuxt-link to="">{{ list.post.name }}</nuxt-link>
    </span>
    <!-- <nuxt-link to="">회원 모집</nuxt-link>
    <v-icon small>mdi-chevron-right</v-icon>
    <nuxt-link to="">서울특별시의 회원 모집</nuxt-link>
    <v-icon small>mdi-chevron-right</v-icon>
    <nuxt-link to="">노원구의 회원 모집</nuxt-link>
    <v-icon small>mdi-chevron-right</v-icon>
    <nuxt-link to="">노원역에서 같이 점심먹을 분 구합니다</nuxt-link> -->
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
        // this.findObjName();
      }
      catch (err) { console.log(err); }
    },
    methods: {
      // findObjName(index) {
      //   let obj = this.filterItems.citysArea.filter(item => {
      //     return item.key == this.list.area;
      //   });
      //   console.log(obj)
      //   this.nameList.area = obj[0].name;
      // },
    }
  }
</script>

<style lang="scss">
  @import '~assets/css/common.scss';

</style>
