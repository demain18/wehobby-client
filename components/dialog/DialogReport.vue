<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          신고하기
        </v-card-title>

        <v-card-text>
          <p>분류 및 신고사유를 작성해주세요.</p>
          <v-row align="center">
            <v-col class="d-flex" sm="">
              <v-select :items="item" label="분류" dense></v-select>
            </v-col>
          </v-row>
          <!-- <v-col class="textarea"> -->
            <v-textarea solo name="input-7-4" label="이곳에 신고 사유를 작성해주세요."></v-textarea>
          <!-- </v-col> -->
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            제출
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dialog: true,
      item: [
        '가이드에 어긋나는 성인 컨텐츠',
        '분란조장을 일으키는 게시물',
        '혐오 컨텐츠',
        '오류 발생',
        '기타'
      ]
    }),
  }

</script>

<style lang="scss">
  @import '~assets/css/common.scss';

  .textarea {

  }
</style>
