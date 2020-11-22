<template>
  <div>
    <Gnb />
    <!-- <DialogCity/> -->

    <div id="banner">
      <div class="banner-img"></div>
      <div class="wrap">
        <div class="form">
          <h1>동네친구</h1>
          <div class="form-input">
            <input type="text" class="input-text" placeholder="검색어를 입력하세요">
            <!-- <v-col>
              <v-text-field label="검색어를 입력하세요" solo></v-text-field>
            </v-col> -->
            <v-icon color="darken-1" class="icon-search">
              mdi-magnify
            </v-icon>
          </div>
        </div>
        <div class="content">
          같은 취미를 가진 사람들을 만나고<br />
          함께 즐겨보세요.
        </div>
      </div>
    </div>

    <div id="wrap">
      <div class="section">
        <div class="list-header">
          <span class="title">최근 올라온 상품</span>
          <span class="btn-more">더보기</span>
        </div>
        <div class="list-header-line"></div>
        <div class="list">

          <div class="item">
            <!-- <div class="img"></div> -->
            <img src="~assets/img/ex.jpg" class="img">
            <p>시부야 여행 가이드 · 2시간 전</p>
          </div>
          <div class="item">
            <img src="~assets/img/ex_01.jpg" class="img">
            <p>밀리시타 시이카 특전 · 15분 전</p>
          </div>
          <div class="item">
            <img src="~assets/img/banner_2.jpg" class="img">
            <p>일러스트레이터 UDX · 2분전</p>
          </div>
          <div class="item">
            <img src="~assets/img/banner_3.jpg" class="img">
            <p>일러스트레이터 Elites22· 1일전</p>
          </div>

        </div>
      </div>
      <div class="section section-2">
        <div class="section-wrap">
          <div class="list-header">
            <span class="title">카테고리</span>
            <span class="btn-more">더보기</span>
          </div>
          <div class="list-header-line"></div>
          <div class="category">
            <div class="list-wrap">
              <div class="list">
                <p class="title">회원 모집</p>
                <p class="sub">00건</p>
                <p class="item">
                  <nuxt-link to="" class="item">친구</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">음식점/카페</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">여행</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">스포츠</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">밴드/음악</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">게임</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">영화</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">애니메이션</nuxt-link>
                </p>
              </div>
              <div class="list">
                <p class="title">중고 물품</p>
                <p class="sub">00건</p>
                <p class="item">
                  <nuxt-link to="" class="item">여성의류</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">남성의류</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">패션잡화</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">뷰티/미용</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">스포츠/레저</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">디지털/가전</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">문구/가구/식품</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">차량/오토바이</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">상품권</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">기타</nuxt-link>
                </p>
              </div>
              <div class="list">
                <p class="title">아르바이트</p>
                <p class="sub">00건</p>
                <p class="item">
                  <nuxt-link to="" class="item">외식/음료</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">유통/판매</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">서비스</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">고객상담/영업</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">생산/건설</nuxt-link>
                </p>
              </div>
              <div class="list">
                <p class="title">재능교환/판매</p>
                <p class="sub">00건</p>
                <p class="item">
                  <nuxt-link to="" class="item">외국어</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">수험</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">요리</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">음악/댄스</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">스포츠</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">컴퓨터/IT</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">엔터테인먼트</nuxt-link>
                </p>
              </div>
              <div class="list">
                <p class="title">이벤트</p>
                <p class="sub">00건</p>
                <p class="item">
                  <nuxt-link to="" class="item">지역/축제</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">전시회</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">파티</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">세미나</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">콘서트/쇼</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">캠페인</nuxt-link>
                </p>
                <p class="item">
                  <nuxt-link to="" class="item">기타</nuxt-link>
                </p>
              </div>
            </div>
            <div class="list list-famous">
              <p class="title">전국의 인기 게시물</p>
              <div class="list-famous-flex">
                <div class="smlist">
                  <!-- <div class="img"></div> -->
                  <img src="~assets/img/ex.jpg" class="img">
                  <div class="content">
                    <!-- <p class="title">노원역 카페 탐방</p> -->
                    <nuxt-link to="" class="title">테스트 글 입니다</nuxt-link>
                    <p class="txt">노원역, 20세 초반 희망</p>
                  </div>
                </div>
                <div class="smlist">
                  <img src="~assets/img/ex.jpg" class="img">
                  <div class="content">
                    <nuxt-link to="" class="title">테스트 글 입니다</nuxt-link>
                    <p class="txt">노원역, 20세 초반 희망</p>
                  </div>
                </div>
                <div class="smlist">
                  <img src="~assets/img/ex.jpg" class="img">
                  <div class="content">
                    <nuxt-link to="" class="title">테스트 글 입니다</nuxt-link>
                    <p class="txt">노원역, 20세 초반 희망</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="list-header list-new">
            <span class="title">노원구의 신규 게시물</span>
            <span class="btn-more">더보기</span>
          </div>
          <div class="list-header-line" style="margin-bottom: 10px"></div>
          <div class="article-new">
            <div class="smlist">
              <img src="~assets/img/ex.jpg" class="img">
              <div class="content">
                <nuxt-link to="" class="title">테스트 글 입니다</nuxt-link>
                <p class="txt">노원역, 20세 초반 희망</p>
              </div>
            </div>
            <div class="smlist">
              <img src="~assets/img/ex.jpg" class="img">
              <div class="content">
                <nuxt-link to="" class="title">테스트 글 입니다</nuxt-link>
                <p class="txt">노원역, 20세 초반 희망</p>
              </div>
            </div>
            <div class="smlist">
              <img src="~assets/img/ex.jpg" class="img">
              <div class="content">
                <nuxt-link to="" class="title">테스트 글 입니다</nuxt-link>
                <p class="txt">노원역, 20세 초반 희망</p>
              </div>
            </div>
          </div>
        </div>
        <div class="snb">
          <div class="ad"></div>
          <div class="list-header">
            <span class="title">공지사항</span>
            <!-- <span class="btn-more">더보기</span> -->
          </div>
          <div class="list-header-line"></div>
          <div class="content">
            <!-- <p>
              <nuxt-link to="">이 글은 공지사항입니다.</nuxt-link>
            </p>
            <p>
              <nuxt-link to="">이 글은 공지사항입니다.</nuxt-link>
            </p> -->

            <ul>
              <li>
                <nuxt-link to="">이 글은 공지사항입니다.이 글은 공지사항입니다.</nuxt-link>
              </li>
              <li>
                <nuxt-link to="">이 글은 공지사항입니다.</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
  export default {}

</script>

<style scoped lang="scss">
  // @import '~assets/css/common.scss';
  @import '~assets/css/index.css';
  @import '~assets/css/mobile/index.css';

</style>
