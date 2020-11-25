<template>
  <div>
    <div class="back"></div>

    <div id="form">
      <h1>동네친구</h1>
      <p class="sub">함께 즐기는 취미</p>
      <nuxt-link to="/auth/register">
        <v-btn depressed rounded large class="submit" dark>
          계정 만들기
        </v-btn>
      </nuxt-link>
      <nuxt-link to="/auth/login">
        <v-btn depressed rounded large class="login">
          로그인
        </v-btn>
      </nuxt-link>
      <v-btn depressed rounded large class="social social-facebook">
        <v-icon class="icon-social">
          mdi-facebook
        </v-icon>
        페이스북으로 로그인
      </v-btn>
    </div>

  </div>
</template>

<script>
  export default {}

</script>

<style scoped lang="scss">
  // @import '~assets/css/common.scss';
  @import '~assets/css/auth.css';
  @import '~assets/css/mobile/auth.css';

  #form button.social-facebook {
    margin-top: 20px;
  }
</style>
