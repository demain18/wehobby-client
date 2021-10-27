<template>
  <div>
    <div class="back"></div>

    <div id="form">
      <img src="~assets/img/logo-img.png" style="width:200px;">
      <p class="sub">인연과 취미를 만나는 공간</p>

      <div class="forms">
        <v-text-field v-model="form.id" @keyup.enter="loginSend()" placeholder="아이디" hide-details="" class="input-form" solo flat></v-text-field>
        <v-text-field type="password" v-model="form.pw" @keyup.enter="loginSend()" placeholder="비밀번호" hide-details="" class="input-form" solo flat></v-text-field>
      </div>

      <v-btn @click="loginSend()" :loading="sendLoading" depressed rounded large class="login">
        로그인
      </v-btn>

      <div class="w-btn" @click="googleLogin()">
        <img src="~assets/img/static/logo-google.png" class="logo-social">
        Google으로 로그인하기
      </div>
      <v-btn id="google-signin-btn" depressed rounded large class="social-google" data-width="150" data-onsuccess="onSignIn" style="display:none;"></v-btn>

      <div class="w-btn btn-kakao" @click="kakaoLogin()">
        <img src="~assets/img/static/logo-kakao-long.png" class="logo-social">
        카카오계정으로 로그인하기
      </div>

      <nuxt-link to="/auth/register">
        <p class="link-to-register">위하비 계정 만들기</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import verifyMixin from '~/mixins/verify.js';
  import oauthMixin from '~/mixins/oauth.js';
  import Vuecookies from 'vue-cookies';
  import qs from 'qs';
  Vue.use(Vuecookies);

  export default {
    mixins: [verifyMixin, oauthMixin],
    data: () => ({
      token: null,
      form: {
        id: null,
        pw: null,
      },
      sendLoading: false
    }),
    mounted() {
      // window.Kakao.init("f8173b3459bbb7bbaf86bf7cf15df728");
    },
    methods: {
      onSignIn(googleUser) {
        console.log(googleUser)
        this.form = {
          id: googleUser.wa,
          pw: googleUser.wa
        }
        console.log(this.form)
        this.loginSend();
      },
      async loginSend() {
        try {
          if (this.form.id=='' || this.form.pw=='') {
            alert('아이디와 비밀번호를 모두 입력해주세요.');
            throw {};
          }
          this.sendLoading = true;

          const res = await this.$axios.$post('/api/auth/login', {
            id: this.form.id,
            pw: this.form.pw
          });
          this.token = res.data.token;

          if (this.$cookies.isKey('token')) {
            this.$cookies.remove('token');
            this.$cookies.set('token', this.token, '30d');
          } else {
            this.$cookies.set('token', this.token, '30d');
          }

          const profileRes = await this.$axios.$post('/api/profile/read', {},
          {headers: {token: this.$cookies.get('token'),}});

          let userData = {
            key: parseInt(profileRes.data.key),
            nickname: profileRes.data.nickname,
            id: profileRes.data.user_id,
            image: profileRes.data.imgRepre,
          }
          if (this.$cookies.isKey('user')) {
            this.$cookies.remove('user');
            this.$cookies.set('user', userData, '30d');
          } else {
            this.$cookies.set('user', userData, '30d');
          }
          window.location.href = "/";
        } catch (err) {
          // console.log(err)
          this.sendLoading = false;
          alert(err.response.data.message);
        }
      },
    }
  }

</script>

<style scoped lang="scss">
  // @import '~assets/css/common.scss';
  @import '~assets/css/auth.css';
  @import '~assets/css/mobile/auth.css';

  #form button.submit {
    margin-top: 20px;
  }

</style>
