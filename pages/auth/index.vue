<template>
  <div>
    <div class="back"></div>

    <div id="form">
      <!-- <h1>WeHobby</h1> -->
      <img src="~assets/img/logo-img.png" style="width:200px;">
      <p class="sub">함께 즐기는 취미</p>
      <nuxt-link to="/auth/register">
        <v-btn depressed rounded large class="submit" dark>
          계정 만들기
        </v-btn>
      </nuxt-link>
      <nuxt-link to="/auth/login">
        <v-btn depressed rounded large class="login" >
          로그인
        </v-btn>
      </nuxt-link>
    </div>

  </div>
</template>

<script>
  export default {}
</script>


<style scoped lang="scss">
  @import '~assets/css/auth.css';
  @import '~assets/css/mobile/auth.css';
</style>
