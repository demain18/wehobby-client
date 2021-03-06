<template>
  <div class="text-center">
    <v-dialog v-model="dialog" @click:outside="toggleDialog()" width="400">
      <v-card>
        <v-card-title class="headline">
          연락하기
        </v-card-title>
        <v-card-text>
          <p style="margin-bottom: 15px!important">연락 수단을 선택해주세요.</p>
          <v-row justify="center">
            <v-expansion-panels accordion>

              <v-expansion-panel v-if="contactMail != ''">
                <v-expansion-panel-header>
                  이메일
                  <template v-slot:actions>
                    <v-icon color="error" class="icon-dropdown">
                      mdi-email
                    </v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{ contactMail }}
                  <v-btn small icon v-clipboard:copy="contactMail" @click="onCopy('이메일이')">
                    <v-icon small dark>
                      mdi-content-copy
                    </v-icon>
                  </v-btn>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel v-if="contactKakao != ''">
                <v-expansion-panel-header>
                  카카오톡
                  <template v-slot:actions>
                    <v-icon color="error" class="icon-dropdown">
                      mdi-chat
                    </v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{ contactKakao }}
                  <v-btn small icon v-clipboard:copy="contactKakao" @click="onCopy('카카오톡 아이디가')">
                    <v-icon small dark>
                      mdi-content-copy
                    </v-icon>
                  </v-btn>
                </v-expansion-panel-content>
              </v-expansion-panel>

            </v-expansion-panels>
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
  import Vue from 'vue';
  import VueClipboard from 'vue-clipboard2';
  VueClipboard.config.autoSetContainer = true // add this line
  Vue.use(VueClipboard)

  export default {
    computed: {
      dialog() {
        return this.$store.state.dialog.contactDialogActive;
      },
      contactMail() {
        return this.$store.state.dialog.data.contact.mail;
      },
      contactKakao() {
        return this.$store.state.dialog.data.contact.kakao;
      }
    },
    data: () => ({
      // dialog: true,
      items: [{
          icon: 'mdi-email',
          title: '이메일',
          desc: 'hbfs0825@gmail.com'
        },
        {
          icon: 'mdi-chat',
          title: '카카오톡',
          desc: 'tallio'
        },
      ]
    }),
    methods: {
      toggleDialog() {
        this.$store.commit('dialog/toggleContactDialogActive');
      },
      onCopy(content) {
        alert(content+' 복사되었습니다.');
      },
    }
  }

</script>

<style lang="scss">
  @import '~assets/css/common.scss';

  .icon-dropdown {
    position: absolute !important;
    right: 20px !important;
    top: 12px !important;
  }

</style>
