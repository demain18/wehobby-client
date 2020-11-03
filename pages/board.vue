<template>
  <div>
    <div id="gnb" data-app>
      <div class="wrap">
        <GnbPc />
        <GnbMobile />
      </div>
    </div>
    <GnbNavi />

    <div id="wrap">
      <div class="sel-filter">
        <p class="bread-crumb">
          <nuxt-link to="">동네친구</nuxt-link>
          <v-icon small>mdi-chevron-right</v-icon>
          <nuxt-link to="">회원 모집</nuxt-link>
          <v-icon small>mdi-chevron-right</v-icon>
          <nuxt-link to="">서울특별시의 회원 모집</nuxt-link>
          <v-icon small>mdi-chevron-right</v-icon>
          <nuxt-link to="">노원구의 회원 모집</nuxt-link>
          <!-- 시구 군, 역, 장르 순서로 breadcrumb dept가 달라짐 -->
        </p>
        <h2>
          서울특별시의 친구 회원 모집(25,100)
        </h2>
        <div class="filter">
          <div class="header">시구 군</div>
          <div class="content">
            <span><nuxt-link to="">전체(19,220)</nuxt-link></span>
            <span class="active"><nuxt-link to="">노원구(8,100)</nuxt-link></span>
            <span><nuxt-link to="">광진구(5,331)</nuxt-link></span>
            <span class="disable">은평구(0)</span>
          </div>
        </div>
        <div class="filter">
          <div class="header">역</div>
          <div class="content">
            <span class="active"><nuxt-link to="">전체</nuxt-link></span>
            <span><nuxt-link to="">마들역</nuxt-link></span>
            <span><nuxt-link to="">노원역</nuxt-link></span>
            <span><nuxt-link to="">중계역</nuxt-link></span>
            <span><nuxt-link to="">하계역</nuxt-link></span>
            <span><nuxt-link to="">공릉역</nuxt-link></span>
            <span><nuxt-link to="">태릉입구역</nuxt-link></span>
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
            <span class="active"><nuxt-link to="">선택안함</nuxt-link></span>
            <span><nuxt-link to="">음식점/카페</nuxt-link></span>
            <span><nuxt-link to="">여행</nuxt-link></span>
            <span><nuxt-link to="">스포츠</nuxt-link></span>
            <span><nuxt-link to="">미팅</nuxt-link></span>
            <span><nuxt-link to="">밴드/음악</nuxt-link></span>
            <span><nuxt-link to="">게임</nuxt-link></span>
            <span><nuxt-link to="">영화</nuxt-link></span>
            <span><nuxt-link to="">애니메이션</nuxt-link></span>
            <span><nuxt-link to="">기타</nuxt-link></span>
            
          </div>
        </div>
        <!--
        <table>
            <tr>
                <td class="header">시구 군</td>
                <td class="content">
                    <span>노원구</span>
                    <span>강북구</span>
                    <span>강남구</span>
                </td>
            </tr>
        </table>
-->
        <!-- <button class="button">
          게시물 작성
        </button> -->
        <v-btn depressed class="btn-main-color">
          게시물 작성
        </v-btn>
      </div>
      <div class="wrap-split">
        <div class="sel-content">
          <div class="article-wrap">
            <div class="article-list">
              <div class="img-repre"></div>
              <div class="content">
                <p class="title">테스트 전용 글 입니다.</p>
                <p class="info"><span>노원역</span> · 20~30세 · 성별무관 · 흡연가능</p>
                <p class="txt">이 글은 테스트전용 글 입니다. 노원역에서 베타 버전 사용자들의 후기를 수집하고 있습니다. 참여해주시면 감사하겠습니다.</p>
                <span class="time">2시간 전</span>
              </div>
            </div>
            <div class="article-list">
              <div class="img-repre"></div>
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
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
            <div class="exten">...100</div>
          </div>
          
          <!-- <div class="paging-wrap-vuetify">
            <div class="text-center">
              <v-pagination
                v-model="page"
                :length="10"
              ></v-pagination>
            </div>
          </div> -->
        </div>
        <div class="sel-snb"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Vuetify from 'vuetify'

  export default {
    data: () => ({
      // empty
      // page: 35
    }),
    mounted() {
      Vue.use(Vuetify);
    }
  }

</script>

<style scoped lang="scss">
  @import '~assets/css/common.scss';
  @import '~assets/css/board.css';
  @import '~assets/css/mobile/board.css';

</style>
