<template>
  <div>
    <Gnb />
    <div id="wrap">
      <SettingSnb />
      <div class="content-wrap">
        <h1 class="content-title">계정 설정</h1>
        <p class="content-sub">프로필에서 보여줄 정보를 수정하세요</p>

        <v-row>
          <v-col>
            <v-text-field v-model="select.email" label="이메일"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="select.password" type="password" label="비밀번호"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="select.lang" label="언어"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="select.option" label="로그인 옵션"></v-text-field>
          </v-col>
        </v-row>

        <v-btn depressed :disabled="!submitAble">
          변경
        </v-btn>
        <v-row>
          <v-col>
            <v-btn depressed v-model="select.accountDisable" class="btn-warn">
              회원탈퇴
            </v-btn>
          </v-col>
        </v-row>

      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  // 변경사항 있을경우 변경 버튼 primary로 변경
  export default {
    data: () => ({
      submitAble: false,
      select: {
        email: '100mountain@gmail.com',
        password: 'password',
        lang: '한국어',
        option: null,
        accountDisable: null,
      },
    })
  }

</script>

<style scoped lang="scss">
  @import '~assets/css/setting.css';
  @import '~assets/css/mobile/setting.css';

</style>
