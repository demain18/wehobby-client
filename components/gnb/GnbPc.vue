<template>
  <div class="pc" data-app>
    <DialogCity/>
    <nuxt-link class="item lft logo" to="/">동네친구</nuxt-link>
    <span v-if="city == null" v-on:click="toggleCityDialog" class="item lft span-a-tag">도시 선택</span>
    <span v-if="city != null"  v-on:click="toggleCityDialog" class="item lft span-a-tag">{{ city[0].name }}</span>
    <!-- <span v-else v-on:click="toggleCityDialog" class="item lft span-a-tag">도시 선택</span> -->

    <v-menu open-on-hover middle offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn depressed class="item lft" style="margin-top: 5px;" v-bind="attrs" v-on="on">
          바로가기
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in routeItems" :key="index">
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

    <!-- <v-avatar v-if="token.verify != true" class="item rgt user-icon" v-bind="attrs" v-on="on">
      <img src="~assets/img/repre_1.jpg" class="">
    </v-avatar> -->
    <!-- <nuxt-link v-if="token.verify" v-cloak to="/auth" class="item rgt">로그인/회원가입</nuxt-link> -->

    <v-menu v-if="token.verify == true" left offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-avatar class="item rgt user-icon" v-bind="attrs" v-on="on">
          <img src="~assets/img/repre_1.jpg" class="">
        </v-avatar>
      </template>

      <!-- <v-list>
        <v-list-item>
          <nuxt-link to="/profile">내 프로필 보기</nuxt-link>
        </v-list-item>
        <v-list-item>
          <nuxt-link to="/setting">설정</nuxt-link>
        </v-list-item>
        <v-list-item>
          <nuxt-link to="">로그아웃</nuxt-link>
        </v-list-item>
      </v-list> -->

      <v-list dense>
      <!-- <v-subheader>REPORTS</v-subheader> -->
      <v-list-item-group color="primary">
        <v-list-item to="/profile">
          <v-list-item-content>
            <v-list-item-title class="title">{{ user.nickname }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/profile">
          <v-list-item-content>
            <v-list-item-title>내 프로필 보기</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/setting">
          <v-list-item-content>
            <v-list-item-title>설정</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/">
          <v-list-item-content>
            <v-list-item-title>로그아웃</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    </v-menu>

    <nuxt-link v-else-if="token.verify == false" to="/auth" class="item rgt">로그인/회원가입</nuxt-link>

  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import Vuecookies from 'vue-cookies';
  Vue.use(Vuecookies);

  export default {
    data: () => ({
      token: {
        verify: null,
      },
      user: null ,
      city: 'test',
      cityItems: [],
      routeItems: [],
    }),
    async mounted() {
      // user update
      this.user = this.$cookies.get('user');

      // check cookies
      let cookies = {
        token: this.$cookies.get('token'),
        city: this.$cookies.get('city'),
        user: this.$cookies.get('user')
      }
      // console.log($cookies.keys());
      // console.log(cookies);

      // token verify
      if (this.$cookies.isKey('token')) {
        try {
          const res = await axios.post('/api/auth/verify',
            {},
            {
              headers: {
                token: this.$cookies.get('token'),
              }
            }
          );
          if (res.data.result == true) {
            this.token.verify = true;
          }
        }
        catch (err) { 
          this.token.verify = false;
          console.log(err);
          console.log(err.response.data.message);
        }
      } else {
        this.token.verify = false;
      }

      // citys read
      if (this.$cookies.get('city') != null) {
        try {
          const res = await axios.get('/api/info/citys');
          this.cityItems = res.data.data.citys;
          this.cityItems.unshift({
            key: 0,
            name: '선택안함(대한민국 전체)'
          });
          this.city = this.cityItems.filter(
            (ele) => {
              return ele.key == parseInt(this.$cookies.get('city'));
            }
          );
        }
        catch (err) { console.log(err.response.data.message); }
      }

      // route list dev
      this.$router.options.routes.forEach(route => {
        this.routeItems.push({
          title: route.name,
          url: route.path
        })
      })
    },
    methods: {
      async toggleCityDialog() {
        this.$store.commit('dialog/toggleDialogActive');
      }
    }
  }

</script>

<style lang="scss">
  .v-list-item {
    min-height: 30px !important;
    padding: 3px 10px !important;
  }

  [v-cloak] {
    display: none!important;
  }

</style>
