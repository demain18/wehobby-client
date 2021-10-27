import Vue from 'vue';
import axios from 'axios';
import Vuecookies from 'vue-cookies';
Vue.use(Vuecookies);

export default {
  data: () => ({

  }),
  mounted(){
    gapi.signin2.render("google-signin-btn", {
      onsuccess: this.onSignIn
    });
  },
  methods: {
    async isVerify() {
      if (this.$cookies.isKey('token')) {
        try {
          const res = await this.$axios.$post('/api/auth/verify', {}, {
            headers: {
              token: this.$cookies.get('token'),
            }
          });
          if (res.result) {
            this.token.verify = true;
          }
        }
        catch (err) { 
          // console.log(err)
          this.logout();
          this.token.verify = false;
        }
      } else {
        // this.logout();
        this.token.verify = false;
      }
    },
    async logout() {
      try {
        await this.$axios.$post('/api/auth/logout', {}, {
          headers: {
            token: this.$cookies.get('token')
          }}
        );

        // google oauth signout
        this.googleSignOut();

        // kakao oauth signout
        window.Kakao.init("f8173b3459bbb7bbaf86bf7cf15df728");
        if (!Kakao.Auth.getAccessToken()) {
          console.log('kakao oauth has not logged in.');
        }
        Kakao.Auth.logout(function() {
          console.log(Kakao.Auth.getAccessToken());
        });

        // remove cookie
        this.$cookies.remove('token');
        this.$cookies.remove('user');
        window.location.href = "/";
      }
      catch (err) { console.log(err) }
    },
    googleSignOut() {
      let auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        // console.log('User signed out.');
      });
    },
  }
}