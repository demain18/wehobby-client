<template>
  <div id="footer">
    <div class="btn-wrap">
      <v-btn text rounded @click="link(null)">
        홈
      </v-btn>
      <v-btn text rounded @click="link('https://sparklejunserver.web.app/')">
        회사 정보
      </v-btn>
      <v-btn text rounded @click="link('https://www.instagram.com/100___mountain/')">
        연락하기
      </v-btn>
    </div>
    <div>
      <!-- <p>2020 - <strong>Infinia</strong></p> -->
      <p>© Infinia, Inc. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      link(url) {
        if (url==null) {
          this.$router.push('/');
        } else {
          // window.open(window.location.href = url, '_blank');
          window.open(url, "_blank");
        }
      }
    }
  }

</script>

<style lang="scss">
  @import '~assets/css/common.scss';

</style>
