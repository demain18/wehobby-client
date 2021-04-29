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

    }),
    async mounted() {
      try {
        const res = await this.$axios.$post('/api/auth/verify', {}, {
          headers: {
            token: this.$cookies.get('token'),
          }
        });
        console.log(res)
      }
      catch (err) { 
        console.log(err.response.data.message)
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
