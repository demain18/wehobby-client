<template>
  <div>
    <Gnb />
    <div id="wrap">
      <div class="article-wrap">
        <div class="banner">
          <v-icon class="icon">mdi-bell</v-icon>
          <p>{{ content.type }}</p>
        </div>
        <div class="header">
          <!-- <h1 class="b">공지사항</h1>
          <h2>서비스 이용 가이드라인</h2>
          <h3>2020년 11월 20일 14:00</h3> -->
          <p class="title">{{ content.title }}</p>
          <p class="time">{{ content.date }}</p>
          <!-- <nuxt-link to="" class="btn">
            <v-icon small class="icon">mdi-share-variant</v-icon>공유하기
          </nuxt-link> -->
        </div>
        <div class="content" v-html="content.desc">
          <!-- {{ content.desc }} -->
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import Vuecookies from 'vue-cookies';
  Vue.use(Vuecookies);

  export default {
    created() {
      // this.param = this.$route.params.index;
      this.param = this.$route.params.id;
    },
    data: () => ({
      content: {}
    }),
    async mounted() {
      try {
        const res = await axios.get('/api/notice/read', {
          params: {
            uniqueId: this.param
          }
        });
        this.content = res.data.data;
      }
      catch (err) { console.log(err); }
    }
  }

</script>

<style scoped lang="scss">
  // @import '~assets/css/common.scss';
  @import '~assets/css/notice.css';
  @import '~assets/css/mobile/notice.css';
</style>
