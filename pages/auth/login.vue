<template>
  <div>
    <div class="back"></div>
    <div id="form">
      <h1>동네친구</h1>
      <p class="sub">함께 즐기는 취미</p>

      <div class="forms">
        <v-text-field v-model="form.id" placeholder="아이디" hide-details="" class="input-form" solo flat></v-text-field>
        <v-text-field v-model="form.pw" placeholder="비밀번호" hide-details="" class="input-form" solo flat></v-text-field>
      </div>

      <v-btn v-on:click="formSubmit" depressed rounded large class="login">
        로그인
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
      token: null,
      form: {
        id: 'guest',
        pw: 'guest',
      }
    }),
    mounted() {
      // console.log('Token: '+this.$cookies.get('Token'));
    },
    methods: {
      async formSubmit() {
        try {
          const res = await axios.post('/api/auth/login', {
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
          alert(err); // can not find data나오면 err만 출력
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
