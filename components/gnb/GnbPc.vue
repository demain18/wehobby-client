<template>
  <div class="pc" data-app>
    <DialogCity/>
    <nuxt-link class="item lft logo" to="/">동네친구</nuxt-link>
    <span v-if="city != null"  v-on:click="toggleCityDialog()" class="item lft span-a-tag">{{ city }}</span>
    <span v-if="city == null" v-on:click="toggleCityDialog()" class="item lft span-a-tag">도시 선택</span>
    <!-- <span v-if="city != null"  v-on:click="toggleCityDialog()" class="item lft span-a-tag">{{ city }}</span> -->
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
      <a @click="pageLink(1)" v-bind:class="{active: routeList[1]}">회원 모집</a>
      <a @click="pageLink(2)" v-bind:class="{active: routeList[2]}">중고 물품</a>
      <a @click="pageLink(3)" v-bind:class="{active: routeList[3]}">아르바이트</a>
      <a @click="pageLink(4)" v-bind:class="{active: routeList[4]}">재능교환/판매</a>
      <a @click="pageLink(5)" v-bind:class="{active: routeList[5]}">이벤트</a>
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
        <v-list-item @click="logout()">
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
    computed: {
      list() {
        return this.$store.state.urls.list;
      }
    },
    created() {
      // accessable page block
      if (this.$cookies.isKey('user')!=true && this.routeAccessDisabledList.find(ele => ele==(this.$route.name.split('-'))[0]) ) {
        alert('접근할 수 없는 페이지입니다.');
        window.location.href = "/";
        return;
      }
    },
    data: () => ({
      token: {
        verify: null,
      },
      user: null ,
      city: null,
      cityItems: [],
      routeItems: [],
      routeList: [
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      routeAccessDisabledList: [
        'write',
        'edit',
        'setting'
      ]
    }),
    async mounted() {
      // user update
      this.user = this.$cookies.get('user');

      // check cookies
      // let cookies = {
      //   token: this.$cookies.get('token'),
      //   city: this.$cookies.get('city'),
      //   user: this.$cookies.get('user')
      // }

      // param read
      // console.log(this.list.category.key)
      // if (this.$route.query.category == undefined) {
      //   this.routeList[this.list.category.key] = true;
      // } else {
      //   this.routeList[this.$route.query.category] = true;
      // }
      this.routeList[this.$route.query.category] = true;

      // token verify
      if (this.$cookies.isKey('token')) {
        try {
          const res = await axios.post('/api/auth/verify',{},{
            headers: {
              token: this.$cookies.get('token'),
            }
          });
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
            name: '선택안함(전국)'
          });
          this.city = this.cityItems.find(obj => obj.key == this.$cookies.get('city')).name;
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
      toggleCityDialog() {
        this.$store.commit('dialog/toggleCityDialogActive');
      },
      pageLink(route) {
        window.location.href = "/board?category="+route;
      },
      logout() {
        this.$cookies.remove('token');
        this.$cookies.remove('user');
        window.location.href = "/";
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
