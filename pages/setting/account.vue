<template>
  <div>
    <Gnb />
    <div id="wrap">
      <SettingSnb />
      <div class="content-wrap">
        <h1 class="content-title">계정 설정</h1>
        <p class="content-sub">계정에 관련된 사항을 수정할 수 있습니다</p>

        <v-row>
          <v-col>
            <v-text-field v-model="select.email" label="이메일"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="select.id" label="아이디" disabled></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="select.password" type="password" label="비밀번호 변경"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="select.passwordRe" type="password" label="비밀번호 변경 재입력"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <!-- <v-text-field v-model="select.lang" label="언어"></v-text-field> -->
            <v-select v-model="select.lang" :items="list.lang" attach label="언어"></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="form">
            <p class="label">연동된 소셜 앱</p>
            <div class="content">
              <v-avatar size="36" class="avator-facebook">
                <v-icon dark>mdi-facebook</v-icon>
              </v-avatar>
            </div>
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
        id: 'glm777',
        password: 'password',
        passwordRe: null,
        lang: '한국어',
        option: null,
        accountDisable: null,
      },
      list: {
        lang: [
          '한국어',
          'English'
        ]
      }
    })
  }

</script>

<style scoped lang="scss">
  @import '~assets/css/setting.css';
  @import '~assets/css/mobile/setting.css';

</style>
