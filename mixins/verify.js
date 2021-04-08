import Vue from 'vue';
import axios from 'axios';
import Vuecookies from 'vue-cookies';
Vue.use(Vuecookies);

export default {
  data: () => ({

  }),
  methods: {
    async isVerify() {
      if (this.$cookies.isKey('token')) {
        try {
          const res = await axios.post('/api/auth/verify', {}, {
            headers: {
              token: this.$cookies.get('token'),
            }
          });
          if (res.data.result) {
            this.token.verify = true;
          }
        }
        catch (err) { 
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
        await axios.post('/api/auth/logout', {}, {
          headers: {
            token: this.$cookies.get('token')
          }}
        );
        this.$cookies.remove('token');
        this.$cookies.remove('user');
        window.location.href = "/";
      }
      catch (err) { console.log(err.response.data.message) }
    },
  }
}