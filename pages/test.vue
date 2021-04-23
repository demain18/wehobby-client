<template>
  <div>
    <h1>this is test</h1>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import Vuecookies from 'vue-cookies';
  import qs from 'qs';
  import articleMixin from '~/mixins/global.js';
  Vue.use(Vuecookies);

  export default {
    mixins: [articleMixin],
    data: () => ({
      mainVal: true,
    }),
    async mounted() {
      console.log(this.globalVal)
      // try {
      //   const res1 = await axios.get('/api/info/category');
      //   console.log(res1);

      //   const res2 = await axios.post('/api/auth/login', 
      //   {
      //     "id": 'glm777',
      //     "pw": 'k71010101'
      //   });
      //   this.token = res2.data.data.token;
      //     if (this.$cookies.isKey('token')) {
      //       this.$cookies.remove('token');
      //       this.$cookies.set('token', this.token, '30d');
      //     } else {
      //       this.$cookies.set('token', this.token, '30d');
      //     }
      //   console.log(res2);

      //   const res3 = await axios.post('/api/profile/read', {},
      //   {
      //     headers: {
      //       token: this.$cookies.get('token'),
      //     }
      //   });
      //   console.log(res3);
      // }
      // catch (err) { console.log(err.response.data.message); }
    }
  }

</script>

<style scoped lang="scss">

</style>
