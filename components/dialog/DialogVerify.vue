<template>
  <div class="text-center">
    <v-dialog v-model="dialog" @click:outside="toggleDialog()" width="500">
      <v-card>
        <v-card-title class="headline">
          본인 인증
        </v-card-title>
        <v-card-text>

          <v-row>
            <v-col>
              <v-text-field v-model="select.tel" label="전화번호를 입력해주세요(하이픈 제외)"></v-text-field>
            </v-col>
              <v-btn @click="codeSend()" depressed :disabled="!telSubmitAble" style="margin-top: 25px;">
                인증번호 발송
              </v-btn>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field v-model="select.code" :disabled="!codeSubmitAble" label="인증 코드를 입력해주세요" :hint="codeTimeout+'초'" :persistent-hint="codeSubmitAble"></v-text-field>
            </v-col>
              <v-btn depressed :disabled="!codeSubmitAble" style="margin-top: 25px;">
                인증번호 확인
              </v-btn>
          </v-row>

        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="toggleDialog()">
            닫기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    computed: {
      dialog() {
        return this.$store.state.dialog.verifyDialogActive;
      },
    },
    data: () => ({
      // dialog: true,
      telSubmitAble: false,
      codeSubmitAble: false,
      codeHintAble: false,
      codeTimeout: 300,
      select: {
        tel: null,
        code: null,
      }
    }),
    mounted() {
      
    },
    watch: {
      'select.tel'(to,from) {
        if (this.select.tel.toString().length > 10) {
          this.telSubmitAble = true;
        } else {
          this.telSubmitAble = false;
        }
      }
    },
    methods: {
      codeSend() {
        if (this.codeSubmitAble==true) {
          return;
        } else {
          this.codeSubmitAble = true;
          setInterval(() => { this.codeTimeout-- }, 1000);
        }
      },
      toggleDialog() {
        this.$store.commit('dialog/toggleVerifyDialogActive');
      },
    }
  }

</script>

<style lang="scss">
  @import '~assets/css/common.scss';

</style>
