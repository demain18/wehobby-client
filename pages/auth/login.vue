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
    created() {}, // $el($route, $cookies 등) 사용 불가함
    mounted() {
      // console.log('Token: '+this.$cookies.get('Token'));
    },
    methods: {
      async formSubmit() {
        try {
          const res = await axios.post('/api/auth/login', {
              "id": this.form.id,
              "pw": this.form.pw
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
