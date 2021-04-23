<template>
  <div>
    <Gnb />
    <div id="wrap">
      <div class="sel-filter">
        <BreadCrumb />
        <h2 v-if="param.keyword != undefined">
          "{{ param.keyword }}"의 검색결과({{ keywordCount }})
        </h2>
        <h2 v-else>
          {{ cityName }}의 {{ categoryName }}({{ filterItems.countAll }})
        </h2>

        <div class="filter" v-if="cityName!='전국'">
          <div class="header">구/군</div>
          <div class="content">
            <span v-bind:class="{active: undefined==(param.area)}">
              <a v-on:click="pageLink('area', null)">{{ cityName }} 전체({{ filterItems.countAll }})</a>
            </span>
            <span v-for="(item, index) in filterItems.citysArea" v-bind:key="index" v-bind:class="{active: index==(param.area-1)}">
              <a v-on:click="pageLink('area', (index+1))">{{ item.name }}({{ item.count }})</a>
            </span>
          </div>
        </div>
        <div class="filter" v-if="cityName!='전국'">
          <div class="header">역</div>
          <div class="content">
            <span  v-bind:class="{active: undefined==(param.subway)}">
              <a v-on:click="pageLink('subway', null)">선택안함</a>
            </span>
            <span v-for="(item, index) in filterItems.citysSubway" v-bind:key="index"  v-bind:class="{active: index==(param.subway-1)}">
              <a v-on:click="pageLink('subway', (index+1))">{{ item.name }}역({{ item.count }})</a>
            </span>
          </div>
        </div>
        <div class="filter">
          <div class="header">장르</div>
          <div class="content">
            <span  v-bind:class="{active: undefined==(param.genre)}">
              <a v-on:click="pageLink('genre', null)">선택안함</a>
            </span>
            <span v-for="(item, index) in filterItems.categoryDetail" v-bind:key="index"  v-bind:class="{active: index==(param.genre-1)}">
              <a v-on:click="pageLink('genre', (index+1))">{{ item.name }}({{ item.count }})</a>
            </span>
          </div>
        </div>

        <nuxt-link to="/write">
          <v-btn depressed class="btn-main-color">
            <v-icon left>mdi-lead-pencil</v-icon>
            게시물 작성
          </v-btn>
        </nuxt-link>
      </div>
      <div class="divider-line"></div>
      <div class="wrap-split">
        <div class="sel-content">
          <div class="article-wrap">

            <div class="article" v-for="(item, index) in postItems" v-bind:key="index">
              <nuxt-link :to="'/post/'+item.key" style="height: 80px;"><img src="~assets/img/placeholder1.jpg" class="img-repre"></nuxt-link>
              <div class="content">
                <p class="title"><nuxt-link :to="'/post/'+item.key">{{ item.title }}</nuxt-link></p>
                <p class="info" v-if="cityKey!=0">
                  <span v-if="item.options[0] != ''" class="bold" v-text="thousandComma(item.options[0], null)"></span><span v-if="item.options[0] != '' && item.options[1] != ''"> · </span>
                  <span v-if="item.options[1] != ''">{{ item.options[1] }}</span><span v-if="item.options[2] != ''"> · </span>
                  <span v-if="item.options[2] != ''">{{ item.options[2] }}</span><span v-if="item.options[3] != ''"> · </span>
                  <span v-if="item.options[3] != ''">{{ item.options[3] }}</span>
                </p>
                <p class="info" v-else>
                  <span v-if="item.options[0] != ''">{{ item.options[0] }}</span><span v-if="item.options[0] != '' && item.options[1] != ''"> · </span>
                  <span v-if="item.options[1] != ''">{{ item.options[1] }}</span><span v-if="item.options[2] != ''"> · </span>
                  <span v-if="item.options[2] != ''">{{ item.options[2] }}</span>
                </p>
                <p class="txt" v-text="markupReplace(item.desc)"></p>
                <span class="time" v-text="agoCalc(item.date, item.time)+' 전'"></span>
              </div>
            </div>
            
          </div>
          <Pagination />
          <div class="search-wrap">
            <div class="search-form">
              <v-text-field v-model="param.keyword" v-on:keyup.enter="pageLink('keyword', param.keyword)" solo label="검색어를 입력하세요" append-icon="mdi-magnify"></v-text-field>
            </div>
          </div>
        </div>
        <div class="snb">
          <Adsence/>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import qs from 'qs';
  import Vuecookies from 'vue-cookies';
  // import moment from 'moment';
  import articleMixin from '~/mixins/global.js';
  Vue.use(Vuecookies);

  export default {
    mixins: [articleMixin],
    created() {
      this.param = {
        category: this.$route.query.category,
        area: this.$route.query.area,
        subway: this.$route.query.subway,
        genre: this.$route.query.genre, // categoryDetail
        keyword: this.$route.query.keyword,
        page: this.$route.query.page,
      }
    },
    data: () => ({
      cityKey: null,
      cityName: null,
      // city: [],
      param: [],
      filterItems: [],
      postItems: [],
      categoryName: null,
      keywordCount: null
    }),
    async mounted() {
      // city key read
      if (this.$cookies.isKey('city')!=true) {
        this.cityKey = 0;
      } else {
        this.cityKey = this.$cookies.get('city');
      }

      // filter read
      this.filterRead();

      // city name read
      if (this.cityKey==0) {
        this.cityName = '전국';
      } else {
        try {
          const citysRes = await axios.get('/api/info/citys');
          this.cityName = citysRes.data.data.citys.find(ele => ele.key == this.cityKey).name;
        }
        catch (err) { console.log(err); }
      }

      // post list read
      this.postListRead();
      // breadcrumb update
      this.breadCrumbUpdate();
    },
    watch: {
      async $route(to, form) {
        // params update
        this.param = {
          category: this.$route.query.category,
          area: this.$route.query.area,
          subway: this.$route.query.subway,
          genre: this.$route.query.genre,
          keyword: this.$route.query.keyword,
          page: this.$route.query.page,
        }
        // breadcrumb update
        this.breadCrumbUpdate();
        // filter read
        this.filterRead();
        // postItems update
        this.postListRead();
      }
    },
    methods: {
      async breadCrumbUpdate() {
        try {
          const res = await axios.get('/api/info/category');
          this.categoryName = res.data.data.find(ele => ele.key == this.param.category).name;

          this.$store.commit('urls/setList', {
            category: { key: this.param.category, name: this.categoryName},
            city: { key: this.cityKey, name: this.cityName },
            area: { key: this.param.area, name: this.findName('area', this.param.area)},
            post: { key: undefined, name: undefined}
          });
        }
        catch (err) { console.log(err); }
      },
      async filterRead() {
        try {
          const filterRes = await axios.get('/api/info/filter', {
            params: {
              city: this.cityKey,
              category: this.param.category
            }
          });
          this.filterItems = filterRes.data.data;
        }
        catch (err) { console.log(err.response.data.message); }
      },
      async postListRead() {
        try {
          const postListRes = await axios.get('/api/board/read', {
            params: {
              category: this.param.category, // static
              city: this.cityKey, // static
              area: this.findKey('area', this.param.area),
              subway: this.findKey('subway', this.param.subway),
              categoryDetail: this.findKey('genre', this.param.genre),
              keyword: this.param.keyword,
              page: this.param.page
            }
          });
          this.keywordCount = postListRes.data.data.count;
          this.postItems = postListRes.data.data.postItems;

          // area into options
          for (let i=0; i<this.postItems.length; i++) {
            if (this.cityKey!=0) {
              this.postItems[i].options.unshift(this.findAreaName(i));
            }
            // options sort by category
            if (this.param.category == 2) {
              this.postItems[i].options = {
                0: this.thousandComma(this.postItems[i].options[1]),
                1: this.postItems[i].options[0],
                2: this.postItems[i].options[2],
                3: this.postItems[i].options[3],
              }
            } else { // 1, 3, 4, 5
              this.postItems[i].options = {
                0: this.postItems[i].options[0],
                1: this.postItems[i].options[1],
                2: this.postItems[i].options[2],
                3: this.postItems[i].options[3],
              }
            }
          }
        }
        catch (err) { console.log(err); }
      },
      async pageLink(ele, key) {
        this.param[ele] = key;
        if (key == null) {
          this.param[ele] = undefined;
        }
        this.param.page = undefined;
        let paramData = [];
        for (let [key, val] of Object.entries(this.param)) {
          if (val != undefined) {
            paramData.push({
              key: key,
              val: val
            });
          }
        }
        let paramString = '/board?';
        for (let i = 0; i < paramData.length; i++) {
          paramString += paramData[i].key+'='+paramData[i].val+'&';
        }
        paramString = paramString.slice(0, -1);
        this.$router.push(paramString);
      },
      
      
    }
  }

</script>

<style scoped lang="scss">
  // @import '~assets/css/common.scss';
  @import '~assets/css/board.css';
  @import '~assets/css/mobile/board.css';

</style>
