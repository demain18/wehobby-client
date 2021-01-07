<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline">
          도시 선택
        </v-card-title>

        <v-card-text>
          <p>활동하려는 도시를 선택해주세요.</p>
          <v-row align="center">
            <v-col class="d-flex" sm="">
              <v-select :items="item" label="대도시" dense></v-select>
            </v-col>
            <v-col class="d-flex" sm="">
              <v-select :items="itemDetail" label="국내 시도" dense></v-select>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            확인
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
        '서울특별시+수도권',
        '부산시',
        '대구',
        '대전',
        '광주'
      ],
      itemDetail: [
        '인천군',
        '충남군'
      ]
    }),
  }
</script>

<style lang="scss">
  @import '~assets/css/common.scss';

</style>
