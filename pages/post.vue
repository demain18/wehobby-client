<template>
  <div>
    <Gnb />
    <!-- <GnbMobile /> -->

    <div id="wrap">
      <div class="content-wrap">
        <p class="bread-crumb">
          <nuxt-link to="">회원모집</nuxt-link>
          <v-icon small>mdi-chevron-right</v-icon>
          <nuxt-link to="">친구</nuxt-link>
          <v-icon small>mdi-chevron-right</v-icon>
          <nuxt-link to="">노원구의 친구</nuxt-link>
          <v-icon small>mdi-chevron-right</v-icon>
          <nuxt-link to="">같이 코인노래방 갈분 모집합니다! 텐션보장!</nuxt-link>
        </p>
        <h1>같이 코인노래방 갈분 모집합니다! 텐션 보장!</h1>
        <div class="images">
          <div class="img-wrap">
            <div class="img" style="background-image: url('../assets/img/ex_01.jpg')"></div>
          </div>
          <div class="img-wrap">
            <div class="img" style="background-image: url('../assets/img/ex_01.jpg')"></div>
          </div>
          <div class="img-wrap">
            <div class="img" style="background-image: url('../assets/img/ex_01.jpg')"></div>
          </div>
          <div class="img-wrap">
            <div class="img" style="background-image: url('../assets/img/ex_01.jpg')"></div>
          </div>
        </div>
        <div class="content">
          노원역 코인노래방 가서 노래부를 사람 모집합니다~ 발라드, 랩, 팝송 전부 상관 없습니다! 주로 20 대쪽으로 오셨으면 좋겠고 흡연 여부는 상관 없습니다.<br />
          <br />
          - 가시<br />
          - 매일매일 기다려<br />
          - 비가와서<br />
          - 파탈리테<br />
          - 무이이야<br />
          <br />
          와 같은 곡들이 제 메인곡 입니다. 잘부탁드리겠습니다!
        </div>
        <div class="comment-wrap">
          <input type="text" class="comment-form" placeholder="댓글을 작성해주세요">
          <!-- <button class="button" class="comment-submit">
            작성
          </button> -->
          <v-btn depressed class="btn-comment">
            작성
          </v-btn>
          <div class="list">
            <div class="list-header">
              <span class="title">댓글 1개</span>
            </div>
            <div class="list-header-line"></div>
            <div class="item">
              <div class="header"></div>
              <div class="main">
                <p><strong>사용자1</strong> <span class="time">15분 전</span></p>
                <p>메일 보냈습니다.</p>
                <v-icon medium class="tooltip">
                  mdi-dots-horizontal
                </v-icon>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="profile-wrap">
        <p>2020년 9월 7일 14:35</p>
        <p>조회수 : 3,310</p>
        <div class="table">
          <div class="header">
            장르
          </div>
          <div class="content">
            친구
          </div>
        </div>
        <div class="table">
          <div class="header">
            지역
          </div>
          <div class="content">
            노원구<br />노원역 7호선
          </div>
        </div>
        <div class="table">
          <div class="header">
            모집나이
          </div>
          <div class="content">
            20세 ~ 30세
          </div>
        </div>
        <div class="table">
          <div class="header">
            흡연
          </div>
          <div class="content">
            상관없음
          </div>
        </div>
        <!-- <button class="button" class="send">
          작성자에게 메일로 문의
        </button> -->
        <v-btn depressed class="btn-main-color">
          작성자에게 메일로 문의
        </v-btn>
        <div class="profile">
          <div class="header"></div>
          <div class="content">
            <p><strong>백산(인증됨)</strong></p>
            <p>남자</p>
            <p>게시물 : 3개</p>
          </div>
        </div>
        <div class="bio">
          평범하게 대학 다니는 학생입니다, 서점과 백화점을 좋아합니다.
        </div>
      </div>

      <div class="snb-wrap">Adsence Here.</div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Vuetify from 'vuetify'

  export default {
    data: () => ({
      // empty
    }),
    mounted() {
      Vue.use(Vuetify);
    }
  }

</script>

<style scoped lang="scss">
  @import '~assets/css/common.scss';
  @import '~assets/css/post.css';
  @import '~assets/css/mobile/post.css';

</style>
