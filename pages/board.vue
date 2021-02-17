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
          <div class="header">구/군</div>
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
            <span class="disable">
              <nuxt-link to="">은평구(0)</nuxt-link>
            </span>
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
            <div class="article">
            <nuxt-link to="/post" style="height: 80px;"><img src="~assets/img/ex.jpg" class="img-repre"></nuxt-link>
              <div class="content">
                <p class="title"><nuxt-link to="/post">테스트 전용 글 입니다.</nuxt-link></p>
                <p class="info"><span>노원역</span> · 20~30세 · 성별무관 · 흡연가능</p>
                <p class="txt">이 글은 테스트전용 글 입니다. 노원역에서 베타 버전 사용자들의 후기를 수집하고 있습니다. 참여해주시면 감사하겠습니다.</p>
                <span class="time">2시간 전</span>
              </div>
            </div>
            <div class="article">
            <nuxt-link to="/post" style="height: 80px;"><img src="~assets/img/ex.jpg" class="img-repre"></nuxt-link>
              <div class="content">
                <p class="title"><nuxt-link to="/post">테스트 전용 글 입니다.</nuxt-link></p>
                <p class="info"><span>노원역</span> · 20~30세 · 성별무관 · 흡연가능</p>
                <p class="txt">이 글은 테스트전용 글 입니다. 노원역에서 베타 버전 사용자들의 후기를 수집하고 있습니다. 참여해주시면 감사하겠습니다.</p>
                <span class="time">2시간 전</span>
              </div>
            </div>
          </div>

          <div class="paging-wrap">
            <div class="count">
              <v-btn icon><v-icon class="elevator-btn">mdi-chevron-double-left</v-icon></v-btn>
              <v-btn icon><v-icon class="elevator-btn">mdi-chevron-left</v-icon></v-btn>

              <div v-for="(item, index) in paging.pages" v-bind:key="index">
                <v-btn icon disabled class="btn" v-if="paging.pageBase.now==item">
                  {{ item }}
                </v-btn>
                <v-btn icon class="btn" v-else>
                  {{ item }}
                </v-btn>
              </div>

              <v-btn icon><v-icon class="elevator-btn">mdi-chevron-right</v-icon></v-btn>
              <v-btn icon><v-icon class="elevator-btn">mdi-chevron-double-right</v-icon></v-btn>
            </div>
          </div>

          <div class="search-wrap">
            <div class="search-form">
              <v-text-field solo label="검색어를 입력하세요" append-icon="mdi-magnify"></v-text-field>
            </div>
          </div>
        </div>
        <div class="snb">
          <div class="ad"></div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  export default {
    created() {
      /*
      나중에 fir도 지울 것
      */
      let length = (this.paging.count-1)/2; // 양방향 갯수
      let now = this.paging.pageBase.now-length; // 시작점 설정
      let firEmpty = 0; // 우측 부족한 갯수
      let lastEmpty = 0; // 좌측 부족한 갯수

      if (this.paging.pageBase.last <= 4) 
      {
        for (let i=0; i<this.paging.pageBase.last; i++) {
          this.paging.pages.push(i+1);
        }
      }
      else 
      {
        for (let i=0; i<length; i++) {
          if (now>=1) { // now값이 fir보다 크면 배열 추가
            this.paging.pages.push(now);
            now++;
          } else {
            this.paging.pages.push('$');
            now++;
            firEmpty++;
          }
        }
        this.paging.pages.push(now); // 복구된 now값 배열 추가
        for (let i=0; i<length; i++) {
          if (now<this.paging.pageBase.last) { // now값이 last보다 작으면 배열 추가
            now++;
            this.paging.pages.push(now);
          } else {
            this.paging.pages.push('#');
            // now++;
            lastEmpty++;
          }
        }

        // fir, last empty 계산해서 pages배열 앞뒤로 지우고 추가
        // console.log('firEmpty: '+firEmpty+' / lastEmpty: '+lastEmpty+' / now: '+now);
        for (let i=0; i<firEmpty; i++) {
          now++;
          this.paging.pages.shift();
          this.paging.pages.push(now);
        }
        now -= length;
        for (let i=0; i<lastEmpty; i++) {
          if (this.paging.pageBase.now % 2 == 0) {
            now -= 1;
          }
          now -= 1;
          this.paging.pages.pop();
          this.paging.pages.unshift(now);
        }
      }
    },
    data: () => ({
      paging: {
        count: 5, // 홀수만 가능
        pageBase: {
          fir: 1, // 1 고정
          last: 10, // 총 페이지 갯수
          now: 1, // 현재 페이지 위치
        },
        pages: []
      }
    }),
    mounted() {
      
    }
  }

</script>

<style scoped lang="scss">
  // @import '~assets/css/common.scss';
  @import '~assets/css/board.css';
  @import '~assets/css/mobile/board.css';

</style>
