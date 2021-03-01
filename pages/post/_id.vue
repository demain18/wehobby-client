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
        <h1 class="title">
          {{ data.content.title }}
        </h1>
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
          {{ data.content.desc }}
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
                      <nuxt-link to="">수정하기</nuxt-link>
                      <nuxt-link to="">삭제하기</nuxt-link>
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
                      <nuxt-link to="">수정하기</nuxt-link>
                      <nuxt-link to="">삭제하기</nuxt-link>
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
          <nuxt-link to="" class="btn">
            <v-icon small class="icon">mdi-close-octagon</v-icon>모집 종료하기
          </nuxt-link>
        </div>
      </div>

      <div class="profile-wrap">
        <p class="info">
          <!-- 2020년 9월 7일 14:35 -->
          {{ data.header.date }}
          {{ data.header.time }}
          <!-- <span v-if="data.header" v-text="data.header.date"></span>
          <span v-if="data.header" v-text="data.header.time"></span> -->
        </p>
        <p class="info" v-if="data.header">조회수 : {{ data.header.view }}</p>
        <div class="table">
          <div class="header">
            장르
          </div>
          <div class="content">
            {{ header.genre }}
          </div>
        </div>
        <div class="table">
          <div class="header">
            지역
          </div>
          <div class="content">
            <nuxt-link to="">{{ header.area }}</nuxt-link><br/>
            {{ header.subway }}
          </div>
        </div>

        <div class="table" v-for="(item, index) in data.header.options" :key="index">
          <div class="header">
            {{ item.header }}
          </div>
          <div class="content">
            {{ item.content }}
          </div>
        </div>
        <!-- <div class="table">
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
        </div> -->
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
      <div class="snb">
        <div class="ad"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import Vuecookies from 'vue-cookies';
  Vue.use(Vuecookies);

  export default {
    created() {
      // this.param = this.$route.params.index;
      this.param = this.$route.params.id;
    },
    data: () => ({
      param: null,
      // object와 array가 혼합된 오브젝트 배열의 경우 각각의 api 데이터 타입에 대응하는 형태를 사용해야함
      // array에서 object로 직접 접속하는건 불가능한듯?
      data: {
        comments: [],
        content: {},
        header: {},
        images: []
      },
      header: {
        genre: '-',
        area: '-',
        subway: '-'
      },
      // filterItems: [],
      // cityItems: []
    }),
    async mounted() {
      // post read
      try {
        const postRes = await axios.get('/api/post/read', {
          params: {
            id: this.param
          }
        });
        this.data = postRes.data.data;
        // console.log(this.data)
      }
      catch (err) { console.log(err); }

      // genre read
      try {
        const filterRes = await axios.get('/api/info/category');
        let filterItems = filterRes.data.data;

        if (this.data.header.category != 0) {
          let genreObj = filterItems.filter(item => {
            return item.key == this.data.header.category;
          })
          genreObj = genreObj[0].detail.filter(item => {
            return item.key == this.data.header.categoryDetail
          });
          this.header.genre = genreObj[0].name; 
        }
      }
      catch (err) { console.log(err); }

      // area, subway read
      try {
        const cityRes = await axios.get('/api/info/citys/detail', {
          params: {
            city: parseInt(this.$cookies.get('city'))
          }
        });
        let cityItems = cityRes.data.data;

        if (this.data.header.districtRegion != 0) {
          let areaObj = cityItems.area.filter(item => {
            return item.key == this.data.header.districtRegion;
          });
          this.header.area = areaObj[0].name;
        }

        if (this.data.header.subway != 0) {
          let subwayObj = cityItems.subways.filter(item => {
            return item.key == this.data.header.subway;
          });
          this.header.subway = subwayObj[0].name+'역';
        }
      }
      catch (err) { console.log(err); }

    }
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
