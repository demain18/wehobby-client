<template>
  <div>
    <Gnb />
    <!-- <DialogSlide/> -->
    <!-- <DialogReport/> -->
    <!-- <DialogContact/> -->
    <!-- <DialogShare/> -->

    <div id="wrap">
      <div class="content-wrap">
        <BreadCrumb />
        <h1 class="title">같이 코인노래방 갈분 모집합니다! 텐션 보장!</h1>
        <div class="images">
          <div class="img-wrap">
            <!-- <div class="img" :style="{ backgroundImage: `url(${bgImg[0]})` }"></div> -->
            <img src="~assets/img/dummy/1.jpg">
          </div>
          <div class="img-wrap">
            <img src="~assets/img/dummy/2.jpg">
          </div>
          <div class="img-wrap">
            <img src="~assets/img/dummy/3.jpg">
          </div>
          <div class="img-wrap">
            <img src="~assets/img/dummy/4.jpg">
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
          <div class="list">
            <div class="list-header">
              <span class="title">댓글 2개</span>
            </div>
            <div class="list-header-line"></div>

            <div class="item">
              <v-avatar class="header">
                <img src="https://pm1.narvii.com/6246/a4b5f80439148013b035523b4ba9ca60651be412_00.jpg" class="present">
              </v-avatar>
              <div class="main">
                <p><strong>사와무라 에리리</strong> <span class="time">15분 전</span></p>
                <p>기재하신 메일 주소로 연락드렸습니다.</p>
                <v-menu attach left offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon medium v-bind="attrs" v-on="on" class="tooltip-btn">mdi-dots-horizontal</v-icon>
                  </template>
                  <v-list>
                    <v-list-item>
                      <nuxt-link to="">프로필 보기</nuxt-link>
                      <nuxt-link to="">신고하기</nuxt-link>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>

            <div class="item">
              <v-avatar class="header">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6VxXRj91RIbra4w3-BiPV-TdoJ1xSJ-JS1A&usqp=CAU"
                  class="present">
              </v-avatar>
              <div class="main">
                <p><strong>카토 메구미</strong> <span class="time">1시간 전</span></p>
                <p>메일 보냈습니다~</p>
                <v-menu attach left offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon medium v-bind="attrs" v-on="on" class="tooltip-btn">mdi-dots-horizontal</v-icon>
                  </template>
                  <v-list>
                    <v-list-item>
                      <nuxt-link to="">프로필 보기</nuxt-link>
                      <nuxt-link to="">신고하기</nuxt-link>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>

          </div>

          <v-text-field solo label="댓글을 입력하세요" clearable></v-text-field>
        </div>
        <div class="addition-wrap">
          <nuxt-link to="" class="btn">
            <v-icon small class="icon">mdi-share-variant</v-icon>공유하기
          </nuxt-link>
          <nuxt-link to="" class="btn">
            <v-icon small class="icon">mdi-bell</v-icon>신고하기
          </nuxt-link>
          <nuxt-link to="" class="btn">
            <v-icon small class="icon">mdi-pencil</v-icon>수정하기
          </nuxt-link>
          <nuxt-link to="" class="btn">
            <v-icon small class="icon">mdi-delete</v-icon>삭제하기
          </nuxt-link>
        </div>
      </div>

      <div class="profile-wrap">
        <p class="info">2020년 9월 7일 14:35</p>
        <p class="info">조회수 : 3,310</p>
        <div class="table">
          <div class="header">
            장르
          </div>
          <div class="content">
            회원 모집
          </div>
        </div>
        <div class="table">
          <div class="header">
            지역
          </div>
          <div class="content">
            <nuxt-link to="">노원구</nuxt-link><br/>
            노원역 7호선
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
            성별
          </div>
          <div class="content">
            무관
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
          작성자에게 연락하기
        </v-btn>
        <div class="profile">
          <!-- <div class="header"></div> -->
          <v-avatar rounded class="header">
            <img src="https://sparklejunserver.web.app/img/profile.jpeg" class="present">
          </v-avatar>
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

      <div class="snb-wrap"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Vue from 'vue'
  import Vuetify from 'vuetify'

  export default {
    data: () => ({
      bgImg: [
        '~assets/img/ex_01.jpg'
      ]
    })
  }

</script>

<style scoped lang="scss">
  // @import '~assets/css/common.scss';
  @import '~assets/css/post.css';
  @import '~assets/css/mobile/post.css';

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

</style>
