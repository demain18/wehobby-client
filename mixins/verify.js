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
          const res = await axios.post('/api/auth/verify',{},{
            headers: {
              token: this.$cookies.get('token'),
            }
          });
          if (res.data.result == true) {
            this.token.verify = true;
          }
        }
        catch (err) { 
          this.token.verify = false;
        }
      } else {
        this.token.verify = false;
      }
    }
  }
}