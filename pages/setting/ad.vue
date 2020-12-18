<template>
  <div>
    <Gnb />
    <div id="wrap">
      <SettingSnb />
      <div class="content-wrap">
        <h1 class="content-title">광고 신청</h1>
        <p class="content-sub">포인트를 충전하고 게시물을 더욱 많은 사람에게 노출시키세요</p>
        <p><nuxt-link to="" class="highlight">결제방식 및 법률</nuxt-link></p>

        <v-row>
          <v-col>
            <v-text-field v-model="select.point" label="포인트" suffix="Point"></v-text-field>
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
        point: 0
      },
      list: {

      }
    })
  }

</script>

<style scoped lang="scss">
  @import '~assets/css/setting.css';
  @import '~assets/css/mobile/setting.css';

</style>
