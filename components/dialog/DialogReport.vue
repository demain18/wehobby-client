<template>
  <div class="text-center">
    <v-dialog v-model="dialog" @click:outside="toggleDialog()" width="500">
      <v-card>
        <v-card-title class="headline">
          신고하기
        </v-card-title>

        <v-card-text>
          <p>분류 및 신고사유를 작성해주세요.</p>
          <v-row align="center">
            <v-col class="d-flex" sm="">
              <v-select v-model="select.type" :items="listItems" label="분류" dense></v-select>
            </v-col>
          </v-row>
          <v-textarea solo v-model="select.desc" name="input-7-4" label="이곳에 신고 사유를 작성해주세요."></v-textarea>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="toggleDialog()">
            닫기
          </v-btn>
          <v-btn color="primary" text  @click="reportSend()">
            제출
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import Vuecookies from 'vue-cookies';
  Vue.use(Vuecookies);

  export default {
    computed: {
      dialog() { // this.dialog
        return this.$store.state.dialog.reportDialogActive;
      },
      tableName() {
        return this.$store.state.dialog.data.report.tableName;
      },
      tableId() {
        return this.$store.state.dialog.data.report.tableId;
      }
    },
    data: () => ({
      listItems: [
        '사용자 가이드라인을 위반한 콘텐츠',
        '분란을 조장하는 콘텐츠',
        '오류 발생',
        '기타'
      ],
      select: {
        type: null,
        desc: null
      }
    }),
    methods: {
      toggleDialog() {
        this.$store.commit('dialog/toggleReportDialogActive');
      },
      async reportSend() {
        if (this.select.type == null || this.select.desc == null) {
          alert('분류와 신고사유를 전부 입력해주세요.');
        } 
        else {
          try {
            const res = await axios.post('https://api.wehobby.kr/1.0/api/info/report', {
              tableName: this.tableName,
              tableId: this.tableId,
              type: this.select.type,
              desc: this.select.desc
            },
            {headers: {token: this.$cookies.get('token')}});

            alert('신고가 접수되었습니다. 해당 신고에 대한 조치는 정기공지를 확인해주세요.');
            this.select = {
              type: null,
              desc: null
            }
            this.toggleDialog();
          }
          catch (err) { console.log(err); }
        }
      },
    }
  }

</script>

<style lang="scss">
  @import '~assets/css/common.scss';

</style>
