<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          본인 인증
        </v-card-title>
        <v-card-text>

          <v-row>
            <v-col>
              <v-text-field v-model="data" label="전화번호를 입력해주세요(-제외)"></v-text-field>
            </v-col>
              <v-btn elevation="2" style="margin-top: 25px;">
                인증번호 발송
              </v-btn>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field v-model="data" label="인증 코드를 입력해주세요"></v-text-field>
            </v-col>
              <v-btn elevation="2" style="margin-top: 25px;">
                인증번호 확인
              </v-btn>
          </v-row>

        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            닫기
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
      data: null
    }),
  }

</script>

<style lang="scss">
  @import '~assets/css/common.scss';

</style>
