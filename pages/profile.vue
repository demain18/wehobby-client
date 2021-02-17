<template>
  <div>
    <Gnb />
    <div id="wrap">
      <div class="info-wrap">
        <!-- <div class="img-profile"></div> -->
        <v-avatar class="img-profile">
          <img src="https://sparklejunserver.web.app/img/profile.jpeg" class="present">
        </v-avatar>
        <div class="table-wrap">
          <div class="table">
            <div class="header">닉네임</div>
            <div class="content">백산</div>
          </div>
          <div class="table">
            <div class="header">소개</div>
            <div class="content">
              화려한것들과 공부하는것을 좋아하는, 약간은 모순된 취미성향을 가지고 있는 사람입니다. 비슷한 취미를 가진 분들끼리 만나 즐거운 시간을 보냈으면 합니다!
            </div>
          </div>
          <div class="table">
            <div class="header">나이</div>
            <div class="content">20대 초반</div>
          </div>
          <div class="table">
            <div class="header">직업</div>
            <div class="content">무대 테크니컬 매니저</div>
          </div>
          <div class="table">
            <div class="header">성별</div>
            <div class="content">남자</div>
          </div>
          <div class="table">
            <div class="header">인증여부</div>
            <!-- <div class="content highlight">인증됨</div> -->
            <div class="content">
              <v-chip class="icon-vertify" color="blue lighten-5" text-color="blue lighten-1">
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                인증됨
              </v-chip>
            </div>
          </div>
        </div>
      </div>
      <div class="posts-wrap">
        <div class="list-header">
          <span class="title">작성한 게시물</span>
          <!-- <span class="btn-more">더보기</span> -->
        </div>
        <div class="list-header-line"></div>
        <div class="article-wrap">
          <div class="article-list">
            <img src="~assets/img/ex.jpg" class="img-repre">
            <div class="content">
              <p class="title">테스트 전용 글 입니다.</p>
              <p class="info"><span>노원역</span> · 20~30세 · 성별무관 · 흡연가능</p>
              <p class="txt">이 글은 테스트전용 글 입니다. 노원역에서 베타 버전 사용자들의 후기를 수집하고 있습니다. 참여해주시면 감사하겠습니다.</p>
              <span class="time">2시간 전</span>
            </div>
          </div>
          <div class="article-list">
            <img src="~assets/img/ex.jpg" class="img-repre">
            <div class="content">
              <p class="title">테스트 전용 글 입니다.</p>
              <p class="info"><span>노원역</span> · 20~30세 · 성별무관 · 흡연가능</p>
              <p class="txt">이 글은 테스트전용 글 입니다. 노원역에서 베타 버전 사용자들의 후기를 수집하고 있습니다. 참여해주시면 감사하겠습니다.</p>
              <span class="time">2시간 전</span>
            </div>
          </div>
        </div>
        <div class="paging-wrap">
          <div class="count">
            <v-btn icon>
              <v-icon>mdi-chevron-double-left</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn icon>10</v-btn>
            <v-btn icon>11</v-btn>
            <v-btn icon disabled>12</v-btn>
            <v-btn icon>13</v-btn>
            <v-btn icon>14</v-btn>
            <v-btn icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-chevron-double-right</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  export default {}

</script>

<style scoped lang="scss">
  @import '~assets/css/profile.css';
  @import '~assets/css/mobile/profile.css';

  .v-list-item {
    min-height: 0px !important;
    // padding: 5px 10px !important;
    display: flex;
    flex-direction: column;
  }

  .v-list-item a {
    width: 100%;
    padding: 0px 0px !important;
    margin: 7px 0px;
    text-align: left !important;
  }

  #wrap .list-header-line {
    margin-bottom: 0px;
  }

</style>
