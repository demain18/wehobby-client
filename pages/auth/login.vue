<template>
  <div>
    <div class="back"></div>

    <div id="form">
      <img src="~assets/img/logo-img.png" style="width:200px;">
      <p class="sub">함께 즐기는 취미</p>

      <div class="forms">
        <v-text-field v-model="form.id" v-on:keyup.enter="loginSend()" placeholder="아이디" hide-details="" class="input-form" solo flat></v-text-field>
        <v-text-field type="password" v-model="form.pw" v-on:keyup.enter="loginSend()" placeholder="비밀번호" hide-details="" class="input-form" solo flat></v-text-field>
      </div>

      <v-btn v-on:click="loginSend()" depressed rounded large class="login">
        로그인
      </v-btn>
      <v-btn depressed rounded large class="social-google" data-width="150" data-onsuccess="onSignIn" id="google-signin-btn">
      </v-btn>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import verifyMixin from '~/mixins/verify.js';
  import Vuecookies from 'vue-cookies';
  import qs from 'qs';
  Vue.use(Vuecookies);

  export default {
    mixins: [verifyMixin],
    data: () => ({
      token: null,
      form: {
        id: null,
        pw: null,
      }
    }),
    mounted() {
      // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    },
    methods: {
      async loginSend() {
        try {
          if (this.form.id=='' || this.form.pw=='') {
            alert('아이디와 비밀번호를 모두 입력해주세요.');
            return;
          }

          const res = await axios.post('/api/auth/login', 
          {
            "id": this.form.id,
            "pw": this.form.pw
          });
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
          if (this.$cookies.isKey('user')) {
            this.$cookies.remove('user');
            this.$cookies.set('user', userData, '30d');
          } else {
            this.$cookies.set('user', userData, '30d');
          }
          window.location.href = "/";
        } catch (err) {
          // console.log(err)
          alert(err.response.data.message);
        }
      },
      onSignIn(googleUser) {
        // console.log(googleUser.Rs);
        let userData = googleUser.Rs;
        this.form = {
          id: userData.RR,
          pw: userData.RR,
        }
        this.loginSend();
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
