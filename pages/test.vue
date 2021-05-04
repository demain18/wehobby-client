<template>
  <div>
    <h1>test page</h1>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import Vuecookies from 'vue-cookies';
  import articleMixin from '~/mixins/global.js';
  Vue.use(Vuecookies);

  export default {
    mixins: [articleMixin],
    created() {

    },
    data: () => ({
      token: null
    }),
    async mounted() {
      try {
        // login
        const res1 = await this.$axios.$post('/api/auth/login', {
          id: 'glm777',
          pw: 'k71010101'
        });
        console.log(res1)

        // test post
        const res2 = await this.$axios.$post('/api/test/post', {
          value: 'test value'
        },
        {headers: {token: this.$cookies.get('token')}});
        console.log(res2)

        // verify
        const res3 = await this.$axios.$post('/api/auth/verify', {}, 
        {headers: {token: this.$cookies.get('token')}});
        console.log(res3)

        // filter read
        const res4 = await this.$axios.$get('/api/info/filter', {
          params: {
            city: 1,
            category: 1
          }
        });
        console.log(res4)

        /**
         * 작동가능: verify
         * 작동불가능: login
         */
      }
      catch (err) { 
        console.log(err)
      }
    },
    methods: {

    }
  }

</script>

<style scoped lang="scss">
  // @import '~assets/css/common.scss';
  @import '~assets/css/index.css';
  @import '~assets/css/mobile/index.css';

</style>
