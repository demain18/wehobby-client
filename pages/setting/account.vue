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
            <v-text-field v-model="select.passwordRe" type="password" label="비밀번호 변경 재확인"></v-text-field>
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

        <v-row style="margin-bottom: -20px;">
          <v-col class="form">
            <p class="label">알림 설정</p>
            <div class="content" style="margin-top: 10px;">
              <v-container fluid class="switch">
                <v-switch v-model="select.alert.email" inset :label="'이메일로 알림을 받기'" class="switch-btn"></v-switch>
                <v-switch v-model="select.alert.channel" inset :label="'카카오톡 채널로 알림을 받기'" class="switch-btn"></v-switch>
              </v-container>
            </div>
          </v-col>
        </v-row>

        <v-btn depressed :disabled="!submitAble" style="margin-top: 10px;">
          변경
        </v-btn>
        <v-row>
          <v-col>
            <v-btn color="primary" text @click="authDestroy()">
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
    created() {},
    data: () => ({
      submitAble: false,
      select: {
        email: '100mountain@gmail.com',
        id: 'glm777',
        password: 'password',
        passwordRe: null,
        lang: '한국어',
        option: null,
        alert: {
          email: false,
          channel: false
        }
      },
      list: {
        lang: [
          '한국어',
          'English'
        ]
      }
    }),
    methods: {
      authDestroy() {
        let idConfirm;
        idConfirm = prompt('계정을 삭제하려면 회원님의 아이디을 입력해주세요.', idConfirm);
        if (idConfirm == this.select.id) {
          // confirm('정말로 계정을 삭제하겠습니까? 삭제된 계정 정보는 다시 복구할 수 없습니다.');
          if (confirm('정말로 계정을 삭제하겠습니까? 삭제된 계정 정보는 다시 복구할 수 없습니다.')) {
            confirm('계정이 삭제되었습니다.');
            window.location.replace('/');
          }
        } else {
          confirm('아이디를 정확히 입력해주세요.');
        }
      }
    },
  }

</script>

<style scoped lang="scss">
  @import '~assets/css/setting.css';
  @import '~assets/css/mobile/setting.css';

</style>
