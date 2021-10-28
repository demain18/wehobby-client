<template>
  <div>
    <div class="back"></div>

    <div id="form">
      <img src="~assets/img/logo-img.png" style="width:200px;">
      <p class="sub">인연과 취미를 만나는 공간</p>

      <div class="forms">
        <v-text-field v-if="formDisplay" v-model="form.nickname" placeholder="닉네임" hide-details="" class="input-form" solo flat></v-text-field>
        <v-text-field v-else placeholder="닉네임" hide-details="" class="input-form" solo flat></v-text-field>
        <v-text-field v-if="formDisplay" v-model="form.id" placeholder="아이디" hide-details="" class="input-form" solo flat></v-text-field>
        <v-text-field v-else placeholder="아이디" hide-details="" class="input-form" solo flat></v-text-field>
        <v-text-field v-if="formDisplay" v-model="form.pw" placeholder="비밀번호" hide-details="" class="input-form" solo flat></v-text-field>
        <v-text-field v-else placeholder="비밀번호" hide-details="" class="input-form" solo flat></v-text-field>
        <v-text-field v-if="formDisplay" v-model="form.pwc" placeholder="비밀번호 확인" hide-details="" class="input-form" solo flat></v-text-field>
        <v-text-field v-else placeholder="비밀번호 확인" hide-details="" class="input-form" solo flat></v-text-field>
        <v-text-field v-if="formDisplay" v-model="form.email" placeholder="이메일" hide-details="" class="input-form" solo flat></v-text-field>
        <v-text-field v-else placeholder="이메일" hide-details="" class="input-form" solo flat></v-text-field>
      </div>
      <div class="form-agree">
        <v-checkbox v-model="form.check"></v-checkbox>
        <p>
          <nuxt-link to="/notice/personal-information-policy" target="_blank" class="highlight">개인정보 처리방침</nuxt-link> 및
          <nuxt-link to="/notice/term-and-conditions" target="_blank" class="highlight">이용약관</nuxt-link>를 숙지했으며 이에 동의합니다
        </p>
      </div>

      <v-btn v-on:click="registerSend()" depressed rounded large dark :loading="sendLoading" class="submit">
        계정 생성
      </v-btn>

      <div class="w-btn" @click="googleRegister()">
        <img src="~assets/img/static/logo-google.png" class="logo-social">
        Google으로 시작하기
      </div>
      <v-btn id="google-signin-btn" depressed rounded large class="social-google" data-width="150" data-onsuccess="onSignIn" style="display:none;"></v-btn>

      <div class="w-btn btn-kakao" @click="kakaoRegister()">
        <img src="~assets/img/static/logo-kakao-long.png" class="logo-social">
        카카오계정으로 시작하기
      </div>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import qs from 'qs';
  import verifyMixin from '~/mixins/verify.js';
  import oauthMixin from '~/mixins/oauth.js';
  import Vuecookies from 'vue-cookies';
  Vue.use(Vuecookies);

  export default {
    mixins: [verifyMixin, oauthMixin],
    data: () => ({
      form: {
        nickname: null,
        id: null,
        pw: null,
        pwc: null,
        email: null,
        check: false,
        name: null,
        oauth: null,
      },
      formDisplay: false,
      list: null,
      sendLoading: false,
      // oauth
    }),
    async mounted() {
      // window.Kakao.init("f8173b3459bbb7bbaf86bf7cf15df728");

      // kakao code in oauthMixin
    },
    methods: {
      // google userInfo load
      onSignIn(googleUser) {
        console.log(googleUser)
        let userData = googleUser.nt;
        this.form = {
          nickname: userData.Re,
          id: userData.uT,
          pw: userData.uT,
          pwc: userData.uT,
          email: userData.Yt,
          name: userData.Re,
          oauth: 'google',
          check: true,
        }
        console.log(this.form)
        this.registerSend();
      },
      async registerSend() {
        try {
          if (this.form.check!=true) {
            alert('개인정보 처리방침 및 이용약관에 동의해주세요.');
            throw {}; // stop try/catch
          }
          this.sendLoading = true;

          const res = await this.$axios.$post('/api/auth/register', {
            email: this.form.email,
            nickname: this.form.nickname,
            id: this.form.id,
            pw: this.form.pw,
            pwc: this.form.pwc,
            name: this.form.name,
            oauth: this.form.oauth
          });

          // token cookie
          this.token = res.data.token;
          if (this.$cookies.isKey('token')) {
            this.$cookies.remove('token');
            this.$cookies.set('token', this.token, '30d');
          } else {
            this.$cookies.set('token', this.token, '30d');
          }

          // user cookie
          const profileRes = await this.$axios.$post('/api/profile/read', 
          {}, 
          {
            headers: {
              token: this.$cookies.get('token'),
            }
          });
          let userData = {
            key: parseInt(profileRes.data.key),
            nickname: profileRes.data.nickname,
            image: profileRes.data.imgRepre,
          }
          if (this.$cookies.isKey('user')) {
            this.$cookies.remove('user');
            this.$cookies.set('user', userData, '30d');
          } else {
            this.$cookies.set('user', userData, '30d');
          }
          window.location.href = "/";
        }
        catch (err) {
          this.sendLoading = false;
          alert(err.response.data.message);
        }
      },
    }
  }

</script>

<style scoped lang="scss">
  @import '~assets/css/auth.css';
  @import '~assets/css/mobile/auth.css';

  #form button.submit {
    margin-top: 20px;
  }

</style>
