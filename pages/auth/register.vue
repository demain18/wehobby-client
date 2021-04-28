<template>
  <div>
    <div class="back"></div>

    <div id="form">
      <img src="~assets/img/logo-img.png" style="width:200px;">
      <p class="sub">함께 즐기는 취미</p>

      <div class="forms">
        <v-text-field v-model="form.nickname" placeholder="닉네임" hide-details="" class="input-form" solo flat></v-text-field>
        <v-text-field v-model="form.id" placeholder="아이디" hide-details="" class="input-form" solo flat></v-text-field>
        <v-text-field v-model="form.pw" placeholder="비밀번호" hide-details="" class="input-form" solo flat></v-text-field>
        <v-text-field v-model="form.pwc" placeholder="비밀번호 확인" hide-details="" class="input-form" solo flat></v-text-field>
        <v-text-field v-model="form.email" placeholder="이메일" hide-details="" class="input-form" solo flat></v-text-field>
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
      <v-btn @click="googleRegister()" depressed rounded large class="social social-google">
        <img src="~assets/img/static/logo-google.png" class="logo-google">
        구글 계정으로 회원가입하기
      </v-btn>
      <v-btn id="google-signin-btn" depressed rounded large class="social-google" data-width="150" data-onsuccess="onSignIn" style="display:none;"></v-btn>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import qs from 'qs';
  import verifyMixin from '~/mixins/verify.js';
  import Vuecookies from 'vue-cookies';
  Vue.use(Vuecookies);

  export default {
    mixins: [verifyMixin],
    data: () => ({
      form: {
        nickname: null,
        id: null,
        pw: null,
        pwc: null,
        email: null,
        check: false,
        // oauth field
        name: null,
        oauth: null,
      },
      list: null,
      sendLoading: false
    }),
    async mounted() {

    },
    methods: {
      async registerSend() {
        try {
          if (this.form.check != true) {
            alert('개인정보 처리방침 및 이용약관에 동의해주세요.');
            return; // stop async method
          }
          this.sendLoading = true;

          const res = await axios.post('/api/auth/register', {
            email: this.form.email,
            nickname: this.form.nickname,
            id: this.form.id,
            pw: this.form.pw,
            pwc: this.form.pwc,
            name: this.form.name,
            oauth: this.form.oauth
          });

          // token gen
          this.token = res.data.data.token;
          if (this.$cookies.isKey('token')) {
            this.$cookies.remove('token');
            this.$cookies.set('token', this.token, '30d');
          } else {
            this.$cookies.set('token', this.token, '30d');
          }

          const profileRes = await axios.post('/api/profile/read', 
          {}, 
          {
            headers: {
              token: this.$cookies.get('token'),
            }
          });
          let userData = {
            key: parseInt(profileRes.data.data.key),
            nickname: profileRes.data.data.nickname,
            image: profileRes.data.data.imgRepre,
          }

          // userData gen
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
      googleRegister() {
        document.getElementsByClassName('abcRioButton')[0].click();
      },
      onSignIn(googleUser) {
        console.log(googleUser);
        let userData = googleUser.gt;
        this.form = {
          nickname: userData.rU,
          id: userData.GS,
          pw: userData.GS,
          pwc: userData.GS,
          email: userData.Rt,
          name: userData.rU,
          oauth: 'google',
          check: true,
        }
        this.registerSend();
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
