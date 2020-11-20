<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="300">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          공유하기
        </v-card-title>
        <v-card-text>

          <v-btn small fab elevation="0" v-on:click="linkAlert">
            <v-icon>mdi-link-variant</v-icon>
          </v-btn>
          <v-btn small fab elevation="0">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn small fab elevation="0">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>

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
    }),
    methods: {
      linkAlert() {
        alert('링크가 클립보드에 복사되었습니다!');
      }
    }
  }

</script>

<style lang="scss">
  @import '~assets/css/common.scss';

</style>
