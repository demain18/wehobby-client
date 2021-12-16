import Vue from 'vue';
import axios from 'axios';
import Vuecookies from 'vue-cookies';
Vue.use(Vuecookies);

export default {
  data: () => ({
    redirectUri: {
      dev: {
        login: 'http://localhost:3000/auth',
        register: 'http://localhost:3000/auth/register',
      },
      deploy: {
        login: 'https://www.wehobby.kr/auth',
        register: 'https://www.wehobby.kr/auth/register'
      },
      envNow: ''
    },
  }),
  async mounted(){
    this.envNow = process.env.NODE_ENV;
    // console.log(this.envNow)  
    // this.envNow = 'product'
  
    // kakaoRegister() active
    if (this.$route.query.code!=undefined) {
      try {
        this.formDisplay = false;
        window.Kakao.init("f8173b3459bbb7bbaf86bf7cf15df728");
        let bodyRedirectUri = '';
        if(this.$route.name=='auth') {
          bodyRedirectUri = (this.envNow==='development' ?  this.redirectUri.dev.login : this.redirectUri.deploy.login);
        }
        else if (this.$route.name=='auth-register') {
          bodyRedirectUri = (this.envNow==='development' ?  this.redirectUri.dev.register : this.redirectUri.deploy.register);
        }

        let bodyQueryString = {
          'grant_type': 'authorization_code',
          'client_id': '8b57101aea076db519cf1d2e77e54a30',
          'redirect_uri': bodyRedirectUri,
          'code': this.$route.query.code,
          'client_secret': 'l25wcjyHChkjNsuSVFxMKPqh4svBMeuD'
        }
        let bodyString = 'https://kauth.kakao.com/oauth/token?';
        for (const[key, value] of Object.entries(bodyQueryString)) {
          bodyString += `${key}=${value}&`;
        }
        bodyString = bodyString.slice(0, -1);

        // 토큰 받기
        const token = await this.$axios.$post(bodyString, {}, {
          headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
        });
        console.log(token)

        // 토큰 할당하기
        Kakao.Auth.setAccessToken(token.access_token);

        // 사용자 정보 가져오기
        const userInfo = Kakao.API.request({
            url: '/v2/user/me'
        });
        await userInfo; // promise -> object

        // 로그인 실행
        if(this.$route.name=='auth') {
          this.form = {
            id: userInfo._result.id,
            pw: userInfo._result.id,
          }
          this.loginSend();
        }
        // 회원가입 실행
        else if (this.$route.name=='auth-register') {
          this.form = {
            nickname: userInfo._result.kakao_account.profile.nickname,
            id: userInfo._result.id,
            pw: userInfo._result.id,
            pwc: userInfo._result.id,
            email: userInfo._result.kakao_account.email,
            name: userInfo._result.kakao_account.profile.nickname,
            oauth: 'kakao',
            check: true,
          }
          this.registerSend();
        }
        console.log(this.form)
      } 
      catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    // google login
    googleLogin() {
      document.getElementsByClassName('abcRioButton')[0].click();
    },
    // google register
    googleRegister() {
      document.getElementsByClassName('abcRioButton')[0].click();
    },
    // kakao login
    kakaoLogin() {
      window.Kakao.init("f8173b3459bbb7bbaf86bf7cf15df728");
      Kakao.Auth.authorize({
        redirectUri: (this.envNow==='development' ?  this.redirectUri.dev.login : this.redirectUri.deploy.login)
      });
    },
    // kakao register
    kakaoRegister() {
      window.Kakao.init("f8173b3459bbb7bbaf86bf7cf15df728");
      Kakao.Auth.authorize({
        redirectUri: (this.envNow==='development' ?  this.redirectUri.dev.reigster : this.redirectUri.deploy.register)
      });
    },
  }
}