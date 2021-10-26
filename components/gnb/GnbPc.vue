<template>
  <div class="pc" data-app>
    <DialogCity/>
    <v-btn data-width="150" data-onsuccess="onSignIn" id="google-signin-btn" style="display:none;"></v-btn>
    
    <nuxt-link class="item lft logo" to="/">
      <img src="~assets/img/logo-img.png" style="width:100px; position:relative; top:4px;">
    </nuxt-link>
    <span v-if="city != null"  v-on:click="toggleCityDialog()" class="item lft span-a-tag">{{ city }}</span>
    <span v-if="city == null" v-on:click="toggleCityDialog()" class="item lft span-a-tag">도시 선택</span>

    <span class="item mid" v-if="path=='/'">
      <a @click="pageLink(1)">회원 모집</a>
      <a @click="pageLink(2)">중고 물품</a>
      <a @click="pageLink(3)">아르바이트</a>
      <a @click="pageLink(4)">재능교환/판매</a>
      <a @click="pageLink(5)">이벤트</a>
    </span>
    <span class="item mid" v-else>
      <a @click="pageLink(1)" v-bind:class="{active: list.category.key==1}">회원 모집</a>
      <a @click="pageLink(2)" v-bind:class="{active: list.category.key==2}">중고 물품</a>
      <a @click="pageLink(3)" v-bind:class="{active: list.category.key==3}">아르바이트</a>
      <a @click="pageLink(4)" v-bind:class="{active: list.category.key==4}">재능교환/판매</a>
      <a @click="pageLink(5)" v-bind:class="{active: list.category.key==5}">이벤트</a>
    </span>
    
    <v-menu v-if="token.verify == true" left offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-avatar class="item rgt user-icon" v-bind="attrs" v-on="on">
          <img :src="repreImageRead(user.image)" class="repre">
        </v-avatar>
      </template>
      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">{{ user.nickname }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="'/profile/'+user.key">
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
  import verifyMixin from '~/mixins/verify.js';
  import globalMixin from '~/mixins/global.js';
  Vue.use(Vuecookies);

  export default {
    mixins: [verifyMixin, globalMixin],
    computed: {
      list() {
        return this.$store.state.urls.list;
      }
    },
    created() {
      // menu update
      this.routeList[this.list.category.key] = true;

      // guest block page
      if (this.$cookies.isKey('user')!=true && this.routeAccessDisabledList.find(ele => ele==(this.$route.name.split('-'))[0]) ) {
        if ((this.$route.name.split('-'))[0]=='write') {
          alert('글 작성하기 기능은 로그인 후 이용할 수 있습니다.');
        } else {
          alert('접근할 수 없는 페이지입니다.');
        }
        this.$router.push('/');
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
      ],
      path: null
    }),
    async mounted() {

      // token verify
      this.isVerify();

      // google oauth load
      gapi.signin2.render("google-signin-btn", {
        onsuccess: this.onSignIn
      });

      // user info read
      if (this.$cookies.isKey('user')) {
        this.user = this.$cookies.get('user');
        try {
          const res = await this.$axios.$get('/api/profile/read', {
            params: {
              id: this.user.key
            }
          });
          this.user.image = res.data.imgRepre;
        } 
        catch (err) {console.log(err)}
      }

      // path read
      this.path = this.$router.currentRoute.path;

      // city list read
      if (this.$cookies.get('city') != null) {
        try {
          const res = await this.$axios.$get('/api/info/citys');
          this.cityItems = res.data.citys;
          this.cityItems.unshift({
            key: 0,
            name: '선택안함(전국)'
          });
          this.city = this.cityItems.find(obj => obj.key == this.$cookies.get('city')).name;
        }
        catch (err) { console.log(err); }
      }

      // route list read
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
        this.$router.push("/board?category="+route);
      },
      onSignIn(googleUser) {
        // console.log(googleUser.Rs);
      },
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
