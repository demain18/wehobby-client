<template>
  <div>
    <Gnb />
    <!-- <DialogCity/> --> <!-- 전페이지 공통이라 GnbPc에 들어가있음 -->

    <div id="banner">
      <div class="banner-img"></div>
      <div class="wrap">
        <div class="form">
          <!-- <h1>WeHobby</h1> -->
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
          <span class="btn-more" @click="pageLink('/board?category=2')">더보기</span>
        </div>
        <div class="list-header-line"></div>
        <div class="list">

          <div class="item" v-for="(item, index) in content.latestGoods" v-bind:key="index">
            <nuxt-link :to="'/post/'+item.key">
              <img src="~assets/img/placeholder1.jpg" class="img">
            </nuxt-link>
            <p>{{ item.title }} · <span v-text="agoCalc(item.date, item.time)"></span></p>
          </div>

        </div>
      </div>
      <div class="section section-2">
        <div class="section-wrap">
          <div class="list-header">
            <span class="title">카테고리</span>
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
              <p class="title">오늘의 인기 게시물</p>
              <div class="list-famous-flex">

                <p class="empty-message" v-if="content.famous.length==0">오늘 작성된 게시물이 없습니다</p>
                <div class="smlist" v-else v-for="(item, index) in content.famous" v-bind:key="index">
                  <img src="~assets/img/placeholder1.jpg" class="img">
                  <div class="content">
                    <nuxt-link :to="'/post/'+item.key" class="title">{{ item.title }}</nuxt-link>
                    <p class="txt" v-text="markupReplace(item.desc)"></p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="list-header list-new">
            <span class="title">{{ cityName }}의 신규 게시물</span>
            <span class="btn-more" @click="pageLink('board?category=1')">더보기</span>
          </div>
          <div class="list-header-line" style="margin-bottom: 10px"></div>
          <div class="article-new">

            <div class="smlist" v-for="(item, index) in content.latest" v-bind:key="index">
              <img src="~assets/img/placeholder1.jpg" class="img">
              <div class="content">
                <nuxt-link :to="'/post/'+item.key" class="title">{{ item.title }}</nuxt-link>
                <p class="txt" v-text="markupReplace(item.desc)"></p>
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
              <li v-for="(noticeItem, index) in noticeList" v-bind:key="index">
                <nuxt-link :to="'/notice/'+noticeItem.uniqueId">{{ noticeItem.title }}</nuxt-link>
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
  import articleMixin from '~/mixins/global.js';
  Vue.use(Vuecookies);

  export default {
    mixins: [articleMixin],
    created() {

    },
    data: () => ({
      select: {
        keywordCategory: 0,
        keywordPlaceholder: '검색을 위해 카테고리를 선택해주세요'
      },
      keyword: null,
      icons: {
        0: 'account-group',
        1: 'basket',
        2: 'account-tie',
        3: 'book-open-variant',
        4: 'calendar'
      },
      category: [],
      categoryCount: [],
      noticeList: [],
      content: {
        latestGoods: [],
        latest: [],
        famous: [],
      },
      cityName: null
    }),
    async mounted() {
      // city name read
      if (this.$cookies.isKey('city')==true) {
        try {
          const res = await axios.get('/api/info/citys');
          let cityList = res.data.data.citys;
          cityList.unshift({
            key: 0,
            name: '전국'
          });
          this.cityName = cityList.find(obj => obj.key == this.$cookies.get('city')).name;
        }
        catch (err) { console.log(err); }
      } else {
        this.cityName = '전국'
      }

      // content list read 
      let cityKey = this.$cookies.get('city');
      try {
        const latestGoodsRes = await axios.get('/api/content/read', {
          params: {
            city: cityKey,
            type: 'latestGoods',
          }
        });
        this.content.latestGoods = latestGoodsRes.data.data;

        const latestRes = await axios.get('/api/content/read', {
          params: {
            city: cityKey,
            type: 'latest',
          }
        });
        this.content.latest = latestRes.data.data;
        this.content.latest.forEach((item, index) => {
          this.content.latest[index].title = item.title.substr(0, 22);
          this.content.latest[index].desc = this.markupReplace(item.desc).substr(0, 30);
        });

        const famousRes = await axios.get('/api/content/read', {
          params: {
            city: cityKey,
            type: 'famous',
          }
        });
        this.content.famous = famousRes.data.data;
        this.content.famous.forEach((item, index) => {
          this.content.famous[index].title = item.title.substr(0, 16);
          this.content.famous[index].desc = this.markupReplace(item.desc).substr(0, 23);
        });
      }
      catch (err) { console.log(err); }

      // category list read
      try {
        const res = await axios.get('/api/info/category');
        this.category = res.data.data;
      }
      catch (err) { console.log(err.response.data.message); }

      // category count
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

      // category count(city unselect)
      if (this.$cookies.get('city')==0 || this.$cookies.isKey('city')!=true) {
        try {
          const countRes = await axios.get('/api/info/count');
          this.categoryCount = countRes.data.data;
        }
        catch (err) { console.log(err); }
      }

      // notice list read
      try {
        const res = await axios.get('/api/notice/list/read');
        this.noticeList = res.data.data;
      }
      catch (err) { console.log(err.response.data.message); }
    },
    watch: {
      'select.keywordCategory'(to, from) {
        if (this.select.keywordCategory==1) {
          this.select.keywordPlaceholder = '함께하고싶은 취미를 알려주세요';
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
      pageLink(url) {
        this.$router.push(url)
      },
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
