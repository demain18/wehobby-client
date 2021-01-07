<template>
  <div>
    <Gnb />
    <div id="wrap">
      <div class="article-wrap">
        <div class="banner">
          <v-icon class="icon">mdi-bell</v-icon>
          <p>공지사항</p>
        </div>
        <div class="header">
          <!-- <h1 class="b">공지사항</h1>
          <h2>서비스 이용 가이드라인</h2>
          <h3>2020년 11월 20일 14:00</h3> -->
          <p class="title">서비스 이용 가이드라인</p>
          <p class="time">2020년 11월 20일</p>
          <!-- <nuxt-link to="" class="btn">
            <v-icon small class="icon">mdi-share-variant</v-icon>공유하기
          </nuxt-link> -->
        </div>
        <div class="content">
          <p>안녕하세요, 서비스를 사용하는데 있어서 유의할 점을 이번 공지글에서 알려드리고자 합니다.</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  export default {
    created() {
      console.log(this.$route.path)
    }
  }

</script>

<style scoped lang="scss">
  // @import '~assets/css/common.scss';
  @import '~assets/css/notice.css';
  @import '~assets/css/mobile/notice.css';
</style>
