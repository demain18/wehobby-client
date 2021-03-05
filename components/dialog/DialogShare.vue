<template>
  <div class="text-center">
    <v-dialog v-model="dialog" @click:outside="toggleDialog()" width="450">
      <v-card>
        <v-card-title>
          <!-- <v-icon>mdi-share</v-icon> -->
          공유하기
        </v-card-title>
        <v-card-text>

          <v-btn rounded elevation="0" v-clipboard:copy="urlNow" @click="onCopy()">
            <v-icon left>mdi-link-variant</v-icon>
            링크 복사
          </v-btn>
          <ShareNetwork
            network="facebook"
            :url="urlNow"
            title="동네친구"
            description="사람과 사람을 잇는 플랫폼, 동네친구입니다."
          >
            <v-btn rounded color="#1877f2" dark elevation="0">
              <v-icon left>mdi-facebook</v-icon>
              facebook
            </v-btn>
          </ShareNetwork>
          <!-- <ShareNetwork
            network="facebook"
            :url="urlNow"
            title="동네친구"
            description="사람과 사람을 잇는 플랫폼, 동네친구입니다."
          >
            <v-btn rounded color="#c32aa3" dark elevation="0">
              <v-icon left>mdi-instagram</v-icon>
              instagram
            </v-btn>
          </ShareNetwork> -->
          <ShareNetwork
            network="twitter"
            :url="urlNow"
            title="동네친구"
            description="사람과 사람을 잇는 플랫폼, 동네친구입니다."
          >
            <v-btn rounded color="#1da1f2" dark elevation="0">
              <v-icon left>mdi-twitter</v-icon>
              twitter
            </v-btn>
          </ShareNetwork>
          <ShareNetwork
            network="linkedin"
            :url="urlNow"
            title="동네친구"
            description="사람과 사람을 잇는 플랫폼, 동네친구입니다."
          >
            <v-btn rounded color="#1da1f2" dark elevation="0" style="margin-top: 5px;">
              <v-icon left>mdi-linkedin</v-icon>
              linkedin
            </v-btn>
          </ShareNetwork>


          <!-- <v-btn small fab elevation="0">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn small fab elevation="0">
            <v-icon>mdi-twitter</v-icon>
          </v-btn> -->

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
      dialog() { // this.dialog
        return this.$store.state.dialog.shareDialogActive;
      }
    },
    created() {
      this.urlNow = 'https://aroundfriend.com'+this.$route.fullPath;
    },
    data: () => ({
      urlNow: null
    }),
    methods: {
      toggleDialog() {
        this.$store.commit('dialog/toggleShareDialogActive');
      },
      onCopy() {
        alert('링크가 복사되었습니다.');
      },
      ShareContent() {

      }
    }
  }

</script>

<style lang="scss">
  @import '~assets/css/common.scss';
</style>
