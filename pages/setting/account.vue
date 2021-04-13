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
            <v-text-field v-model="select.pw" type="password" :disabled="select.social==true" label="비밀번호 변경 확인"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="select.pwc" type="password" :disabled="select.social==true" label="비밀번호 변경 재확인"></v-text-field>
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
              
              <div class="avator-facebook" v-if="select.social==true">
                <img src="~assets/img/static/logo-google.png" width="100%">
              </div>
              <div v-else style="color:#8d8d8d; font-size:14px;">
                연동된 소셜앱이 없습니다
              </div>

            </div>
          </v-col>
        </v-row>

        <v-row style="margin-bottom: -20px;">
          <v-col class="form">
            <p class="label">알림 설정</p>
            <div class="content" style="margin-top: 10px;">
              <v-container fluid class="switch">
                <v-switch v-model="select.alert.mail" inset :label="'이메일로 알림을 받기'" class="switch-btn"></v-switch>
                <v-switch v-model="select.alert.channel" inset :label="'카카오톡 채널로 알림을 받기'" class="switch-btn"></v-switch>
              </v-container>
            </div>
          </v-col>
        </v-row>

        <v-btn @click="authEditSend()" depressed :disabled="!submitAble" style="margin-top: 10px;">
          변경
        </v-btn>
        <v-row>
          <v-col>
            <v-btn color="primary" text @click="authDestroyConfirm()">
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
  import Vue from 'vue';
  import axios from 'axios';
  import Vuecookies from 'vue-cookies';
  import qs from 'qs';
  // import verifyMixin from '~/mixins/verify.js';
  Vue.use(Vuecookies);
  
  export default {
    // mixins: [verifyMixin],
    created() {},
    data: () => ({
      submitAble: false,
      submitStack: 0,
      select: {
        email: null,
        id: null,
        pw: null,
        pwc: null,
        lang: null,
        social: null,
        alert: {
          mail: false,
          channel: false
        }
      },
      list: {
        lang: [
          '한국어',
          // 'English'
        ]
      }
    }),
    mounted() {
      this.authRead();
    },
    watch: {
      select: {
        deep: true,
        handler() {
          this.submitStack++;
          if (this.submitStack>1) {
            this.submitAble = true;
          }
        }
      }
    },
    methods: {
      async authRead() {
        try {
          const res = await axios.post('/api/auth/read', {}, {headers: {token: this.$cookies.get('token')}});
          this.select = {
            email: res.data.data.email,
            id: res.data.data.user_id,
            pw: null,
            pwc: null,
            lang: null,
            lang: res.data.data.lang_set,
            social: null,
            alert: {
              mail: res.data.data.mail_notify_set,
              channel: res.data.data.kakao_notify_set
            }
          }
          // console.log(res.data.data.social)
          if (res.data.data.social=='google') {
            console.log('isgoogle')
            this.select.social = true;
          }
          // this.select.social = res.data.data.oauth;
        }
        catch (err) { console.log(err); }
      },
      async authEditSend() {
        try {
          await axios.post('/api/auth/update', {
            email: this.select.email,
            pw: this.select.pw,
            pwc: this.select.pwc,
            lang: this.select.lang,
            mail_notify: this.select.alert.mail,
            kakao_notify: this.select.alert.channel
          }, 
          {headers: {token: this.$cookies.get('token')}});
          this.authRead();
          this.submitStack = 0;
          this.submitAble = false;
        }
        catch (err) { alert(err.response.data.message) }
      },
      async authDestroyConfirm() {
        let idConfirm = prompt('계정을 삭제하려면 회원님의 아이디을 입력해주세요.', idConfirm);
        if (idConfirm == this.select.id) {
          if (confirm('정말로 계정을 삭제하겠습니까? 삭제된 계정 정보는 다시 복구할 수 없습니다.')) {
            confirm('계정이 삭제되었습니다.');
            try {
              await axios.post('/api/auth/delete', {}, {
                headers: {
                  token: this.$cookies.get('token'),
                }}
              );
              this.$cookies.remove('token');
              this.$cookies.remove('user');
              window.location.replace('/');
            }
            catch (err) { console.log(err); }
          }
        }
        else if (idConfirm == null) {
          confirm('취소되었습니다.');
        }
        else if (idConfirm != this.select.id) {
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
