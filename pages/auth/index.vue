<template>
  <div>
    <div class="back"></div>

    <div class="form">
      <h1>동네친구</h1>
      <p class="sub">함께 즐기는 취미</p>
      <div class="text-center">
        <v-btn depressed rounded large class="idgen" dark>
          계정 만들기
        </v-btn>
      </div>
      <div class="text-center">
        <v-btn depressed rounded large class="login">
          로그인
        </v-btn>
      </div>
      <div class="text-center">
        <v-btn depressed rounded large class="social social-facebook">
          <v-icon class="icon-social">
            mdi-facebook
          </v-icon>
          페이스북으로 로그인
        </v-btn>
      </div>
    </div>

  </div>
</template>

<script>
  export default {}

</script>

<style scoped lang="scss">
  // @import '~assets/css/common.scss';
  @import '~assets/css/auth.css';
  @import '~assets/css/mobile/board.css';

</style>
