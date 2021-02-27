<template>
  <div>
    <Gnb />
    <!-- <DialogCity/> --> <!-- 전페이지 공통이라 GnbPc에 들어가있음 -->

    <div id="banner">
      <div class="banner-img"></div>
      <div class="wrap">
        <div class="form">
          <h1>동네친구</h1>
          <div class="form-input">

            <v-select solo label="카테고리" class="filter"></v-select>
            <v-text-field solo label="함께하고 싶은 취미를 알려주세요" append-icon="mdi-magnify"></v-text-field>

          </div>
        </div>
        <div class="content">
          같은 취미를 가진 사람들을 만나고<br />
          함께 즐겨보세요
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
            <!-- <span class="btn-more">더보기</span> -->
          </div>
          <div class="list-header-line"></div>
          <div class="category">
            <div class="list-wrap">

              <div class="list" v-for="(categoryItem, index) in category" v-bind:key="index">
                <p class="title">
                  <v-icon class="icon">
                    mdi-{{ icons[index] }}
                  </v-icon>
                  <nuxt-link :to="'/board?category='+categoryItem.key">{{ categoryItem.name }}</nuxt-link>
                </p>
                <p class="sub">{{ categoryCount[index] }}건</p>
                <p class="item" v-for="(categoryDetailItem, index) in category[index].detail" v-bind:key="index">
                  <nuxt-link :to="'/board?category='+categoryItem.key+'&genre='+(index+1)" class="item">{{ categoryDetailItem.name }}</nuxt-link>
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
            <span class="title">서울특별시의 신규 게시물</span>
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
            <ul>
              <li v-for="(noticeItem, index) in notices" v-bind:key="index">
                <nuxt-link :to="'/notice?id='+noticeItem.id">{{ noticeItem.title }}</nuxt-link>
              </li>
              <!-- <li>
                <nuxt-link to="">이 글은 공지사항입니다.</nuxt-link>
              </li> -->
            </ul>
          </div>
        </div>
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
    data: () => ({
      icons: {
        0: 'account-group',
        1: 'basket',
        2: 'account-tie',
        3: 'book-open-variant',
        4: 'calendar'
      },
      category: [],
      categoryCount: [],
      items: [],
      notices: []
    }),
    async mounted() {
      // category read
      try {
        const res = await axios.get('/api/info/category');
        this.category = res.data.data;
      }
      catch (err) { console.log(err, err.response.data.message); }

      // category post count
      for (let i = 0; i < this.category.length; i++) {
        try {
          const filterRes = await axios.get('/api/info/filter', {
            params: {
              city: this.$cookies.get('city'),
              category: this.category[i].key
            }
          });

          // let postCount = 0;
          // for (let x = 0; x < filterRes.data.data.categoryDetail.length; x++) {
          //   postCount += filterRes.data.data.categoryDetail[x].count;
          // }
          // this.categoryCount[i] = postCount;
          this.categoryCount[i] = filterRes.data.data.countAll;
        }
        catch (err) { console.log(err); }
      }

      // notice read
      try {
        const res = await axios.get('/api/notice/list/read');
        this.notices = res.data.data;
      }
      catch (err) { console.log(err.response.data.message); }
    },
    methods: {

    },
    // mounted() {
    //   // console.log('Token: '+this.$cookies.get('Token'));
    // },
  }

</script>

<style scoped lang="scss">
  // @import '~assets/css/common.scss';
  @import '~assets/css/index.css';
  @import '~assets/css/mobile/index.css';

</style>
