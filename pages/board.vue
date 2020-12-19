<template>
  <div>
    <Gnb />
    <div id="wrap">
      <div class="sel-filter">
        <BreadCrumb />
        <h2>
          노원구의 회원 모집(8,100)
        </h2>
        <div class="filter">
          <div class="header">시구 군</div>
          <div class="content">
            <span>
              <nuxt-link to="">서울특별시 전체(19,220)</nuxt-link>
            </span>
            <span class="active">
              <nuxt-link to="">노원구(8,100)</nuxt-link>
            </span>
            <span>
              <nuxt-link to="">광진구(5,331)</nuxt-link>
            </span>
            <span class="disable">은평구(0)</span>
          </div>
        </div>
        <div class="filter">
          <div class="header">역</div>
          <div class="content">
            <span class="active">
              <nuxt-link to="">선택안함</nuxt-link>
            </span>
            <span>
              <nuxt-link to="">마들역</nuxt-link>
            </span>
            <span>
              <nuxt-link to="">노원역</nuxt-link>
            </span>
            <span>
              <nuxt-link to="">중계역</nuxt-link>
            </span>
            <span>
              <nuxt-link to="">하계역</nuxt-link>
            </span>
            <span>
              <nuxt-link to="">공릉역</nuxt-link>
            </span>
            <span>
              <nuxt-link to="">태릉입구역</nuxt-link>
            </span>
          </div>
        </div>
        <div class="filter">
          <div class="header">장르</div>
          <div class="content">
            <!-- <span class="active">전체</span>
            <span>친구</span>
            <span>채팅</span>
            <span>스포츠</span>
            <span>기타</span> -->
            <span class="active">
              <nuxt-link to="">회원모집 전체</nuxt-link>
            </span>
            <span>
              <nuxt-link to="">음식점/카페</nuxt-link>
            </span>
            <span>
              <nuxt-link to="">여행</nuxt-link>
            </span>
            <span>
              <nuxt-link to="">스포츠</nuxt-link>
            </span>
            <span>
              <nuxt-link to="">미팅</nuxt-link>
            </span>
            <span>
              <nuxt-link to="">밴드/음악</nuxt-link>
            </span>
            <span>
              <nuxt-link to="">게임</nuxt-link>
            </span>
            <span>
              <nuxt-link to="">영화</nuxt-link>
            </span>
            <span>
              <nuxt-link to="">애니메이션</nuxt-link>
            </span>
            <span>
              <nuxt-link to="">기타</nuxt-link>
            </span>

          </div>
        </div>
        <v-btn depressed class="btn-main-color">
          게시물 작성
        </v-btn>
      </div>
      <div class="wrap-split">
        <div class="sel-content">
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
              <v-btn icon><v-icon>mdi-chevron-double-left</v-icon></v-btn>
              <v-btn icon><v-icon>mdi-chevron-left</v-icon></v-btn>
              <v-btn icon>10</v-btn>
              <v-btn icon>11</v-btn>
              <v-btn icon disabled>12</v-btn>
              <v-btn icon>13</v-btn>
              <v-btn icon>14</v-btn>
              <v-btn icon><v-icon>mdi-chevron-right</v-icon></v-btn>
              <v-btn icon><v-icon>mdi-chevron-double-right</v-icon></v-btn>
            </div>
          </div>

          <div class="search-wrap">
            <div class="search-form">
              <v-text-field solo label="검색어를 입력하세요" append-icon="mdi-magnify"></v-text-field>
            </div>
          </div>
        </div>
        <div class="sel-snb"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  export default {
    data: () => ({
      page: {
        fir: 0,
        last: 15,
        now: 12
      }
    })
  }

</script>

<style scoped lang="scss">
  // @import '~assets/css/common.scss';
  @import '~assets/css/board.css';
  @import '~assets/css/mobile/board.css';

</style>
