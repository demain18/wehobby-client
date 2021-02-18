<template>
  <div>
    <div class="back"></div>

    <div id="form">
      <h1>동네친구</h1>
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
          <nuxt-link to="/article/privacy-policy" target="_blank" class="highlight">개인정보 처리방침</nuxt-link> 및
          <nuxt-link to="/article/terms-of-service" target="_blank" class="highlight">이용약관</nuxt-link>를 숙지했으며 이에 동의합니다
        </p>
      </div>

      <v-btn v-on:click="formSubmit" depressed rounded large class="submit" dark>
        계정 생성
      </v-btn>
      <v-btn depressed rounded large class="social social-facebook">
        <v-icon class="icon-social">
          mdi-facebook
        </v-icon>
        페이스북으로 계속하기
      </v-btn>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import Vuecookies from 'vue-cookies';
  Vue.use(Vuecookies);

  export default {
    data: () => ({
      form: {
        nickname: 'clientGuest1',
        id: 'guest',
        pw: 'guest',
        pwc: 'guest',
        email: 'test@gmail.com',
        check: false
      },
      list: null
    }),
    async fetch() { // fetch는 페이지가 로드될때 한번 실행된다
      try {
        const res = await axios.get(
          '/api/info/category'
        );
        console.log(res.data.result); // reqest result
        console.log(res.data.data); // request data
        this.list = res.data.data;
      }
      catch (err) { console.log(err.response.data.message); }
    },
    methods: {
      async formSubmit() {
        try {
          if (this.form.check != true) {
            alert('개인정보 처리방침 및 이용약관에 동의해주세요.');
            return; // stop async method
          }
          const res = await axios.post('/api/auth/register', {
            "email": this.form.email,
            "name": null,
            "nickname": this.form.nickname,
            "id": this.form.id,
            "pw": this.form.pw,
            "pwc": this.form.pwc,
            "oauth": null
          }
          );
          console.log(res.data.result);
          console.log(res.data.data);
          this.token = res.data.data.token; // generated token
          if (this.$cookies.isKey('Token')) {
            this.$cookies.remove('Token');
            this.$cookies.set('Token', this.token, '7d');
          } else {
            this.$cookies.set('Token', this.token, '7d');
          }
          this.$router.push('/');
        }
        catch (err) {
          alert(err.response.data.message);
        }
      }
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
