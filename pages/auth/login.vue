<template>
  <div>
    <div class="back"></div>

    <div id="form">
      <h1>동네친구</h1>
      <p class="sub">함께 즐기는 취미</p>

      <div class="forms">
        <v-text-field placeholder="아이디" hide-details="" class="input-form" solo flat></v-text-field>
        <v-text-field placeholder="비밀번호" hide-details="" class="input-form" solo flat></v-text-field>
      </div>

      <v-btn depressed rounded large class="login">
        로그인
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

  #form button.submit {
    margin-top: 20px;
  }
</style>
