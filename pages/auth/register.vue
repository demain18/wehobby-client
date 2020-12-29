<template>
  <div>
    <div class="back"></div>

    <div id="form">
      <h1>동네친구</h1>
      <p class="sub">함께 즐기는 취미</p>

      <div class="forms">
        <v-text-field placeholder="닉네임" hide-details="" class="input-form" solo flat></v-text-field>
        <v-text-field placeholder="아이디" hide-details="" class="input-form" solo flat></v-text-field>
        <v-text-field placeholder="비밀번호" hide-details="" class="input-form" solo flat></v-text-field>
        <v-text-field placeholder="비밀번호 확인" hide-details="" class="input-form" solo flat></v-text-field>
        <v-text-field placeholder="이메일" hide-details="" class="input-form" solo flat></v-text-field>
      </div>
      <!-- <v-checkbox label="this is test"></v-checkbox> -->
      <div class="agree-form">
        <!-- <input type="checkbox" class="check"> -->
        <v-checkbox v-model="check"></v-checkbox>
        <p>
          <nuxt-link to="/article/privacy-policy" target="_blank" class="highlight">개인정보 처리방침</nuxt-link> 및
          <nuxt-link to="/article/terms-of-service" target="_blank" class="highlight">이용약관</nuxt-link>를 숙지했으며 이에 동의합니다
        </p>
      </div>

      <v-btn depressed rounded large class="submit" dark>
        계정 생성
      </v-btn>
      <v-btn depressed rounded large class="social social-facebook">
        <v-icon class="icon-social">
          mdi-facebook
        </v-icon>
        페이스북으로 계속하기
      </v-btn>
    </div>

  </div>
</template>

<script>
  export default {
    data: () => ({
      check: false,
    })
  }

</script>

<style scoped lang="scss">
  // @import '~assets/css/common.scss';
  @import '~assets/css/auth.css';
  @import '~assets/css/mobile/auth.css';

  #form button.submit {
    margin-top: 20px;
  }

</style>
