<template>
  <div>
    <Gnb />
    <!-- <DialogCity/> --> <!-- 전페이지 공통이라 GnbPc에 들어가있음 -->

    <div id="banner">
      <div class="banner-img"></div>
      <div class="wrap">
        <div class="form">
          <h1>WeHobby</h1>
          <div class="form-input">

            <v-select :items="category" item-text="name" item-value="key" v-model="select.keywordCategory" solo label="카테고리" class="filter"></v-select>
            <v-text-field v-model="keyword" v-on:keyup.enter="keywordSearch()" solo :label="select.keywordPlaceholder" append-icon="mdi-magnify"></v-text-field>

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

              <!-- <h1 v-text="category[0].detail[0].name"></h1> -->
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
          <Adsence/>
          <div class="list-header">
            <span class="title">공지사항</span>
            <!-- <span class="btn-more">더보기</span> -->
          </div>
          <div class="list-header-line"></div>
          <div class="content">
            <ul>
              <li v-for="(noticeItem, index) in notices" v-bind:key="index">
                <nuxt-link :to="'/notice/'+noticeItem.id">{{ noticeItem.title }}</nuxt-link>
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
      notices: [],
      select: {
        keywordCategory: 0,
        keywordPlaceholder: '검색을 위해 카테고리를 선택해주세요'
      },
      keyword: null
    }),
    async mounted() {
      // category read
      try {
        const res = await axios.get('/api/info/category');
        this.category = res.data.data;
      }
      catch (err) { console.log(err.response.data.message); }

      // category post count
      for (let i = 0; i < this.category.length; i++) {
        try {
          const filterRes = await axios.get('/api/info/filter', {
            params: {
              city: this.$cookies.get('city'),
              category: this.category[i].key
            }
          });
          this.categoryCount[i] = filterRes.data.data.countAll;
        }
        catch (err) { console.log(err); }
      }

      // category post count for all
      if (this.$cookies.get('city')==0 || this.$cookies.isKey('city')!=true) {
        try {
          const countRes = await axios.get('/api/info/count');
          this.categoryCount = countRes.data.data;
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
    watch: {
      'select.keywordCategory'(to, from) {
        if (this.select.keywordCategory==1) {
          this.select.keywordPlaceholder = '함께하고 싶은 취미를 알려주세요';
        }
        else if (this.select.keywordCategory==2) {
          this.select.keywordPlaceholder = '사거나 팔고싶은 물건을 알려주세요';
        }
        else if (this.select.keywordCategory==3) {
          this.select.keywordPlaceholder = '일하고싶은 직종을 알려주세요';
        }
        else if (this.select.keywordCategory==4) {
          this.select.keywordPlaceholder = '배우고싶은 재능을 알려주세요';
        }
        else if (this.select.keywordCategory==5) {
          this.select.keywordPlaceholder = '참여하고싶은 이벤트를 알려주세요';
        }
      }
    },
    methods: {
      keywordSearch() {
        // placeholder select

        // search condition
        if (this.select.keywordCategory==0) {
          alert('카테고리를 선택해주세요.');
        }
        else if(this.keyword==null) {
          alert('검색어를 작성해주세요.')
        }
        else {
          this.$router.push('/board?category='+this.select.keywordCategory+'&keyword='+this.keyword);
        }
      }
    }
  }

</script>

<style scoped lang="scss">
  // @import '~assets/css/common.scss';
  @import '~assets/css/index.css';
  @import '~assets/css/mobile/index.css';

</style>
