<template>
  <div>
    <Gnb />
    <div id="wrap">
      <SettingSnb />
      <div class="content-wrap">
        <h1 class="content-title">통계 및 분석</h1>
        <p class="content-sub">내가 작성한 글에 대한 통계를 확인할 수 있습니다</p>

        <v-row>
          <v-col>
            <v-simple-table style="width: 100%">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th style="text-align:left;">
                      글 제목
                    </th>
                    <th style="text-align:left;">
                      조회수
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>

        <v-btn depressed :disabled="!submitAble">
          변경
        </v-btn>

      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  // 변경사항 있을경우 변경 버튼 primary로 변경
  export default {
    data: () => ({
      submitAble: false,
      select: {
        views: 0
      },
      list: {

      },
      desserts: [
          {
            name: '같이 몬헌 파티할 플스유저 구합니다',
            calories: 159,
          },
          {
            name: '넷플릭스 친구 공유 함께하실분 구합니다',
            calories: 237,
          }
      ]
    })
  }

</script>

<style scoped lang="scss">
  @import '~assets/css/setting.css';
  @import '~assets/css/mobile/setting.css';

</style>
