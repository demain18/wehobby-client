<template>
  <div>
    <Gnb />
    <div id="wrap">
      <div class="sel-filter">
        <BreadCrumb />
        <h2>
          서울특별시의 회원 모집({{ this.city.count }})
        </h2>

        <div class="filter">
          <div class="header">구/군</div>
          <div class="content">
            <span v-bind:class="{active: undefined==(param.area)}">
              <a v-on:click="pageLink('area', null)">{{ this.city.name }} 전체({{ this.city.count }})</a>
            </span>
            <span v-for="(item, index) in filterItems.citysArea" v-bind:key="index" v-bind:class="{active: index==(param.area-1)}">
              <a v-on:click="pageLink('area', (index+1))">{{ item.name }}({{ item.count }})</a>
            </span>
          </div>
        </div>
        <div class="filter">
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

        <v-btn depressed class="btn-main-color">
          게시물 작성
        </v-btn>
      </div>
      <div class="wrap-split">
        <div class="sel-content">
          <div class="article-wrap">

            <div class="article" v-for="(item, index) in postItems" v-bind:key="index">
            <nuxt-link to="/post" style="height: 80px;"><img src="~assets/img/ex.jpg" class="img-repre"></nuxt-link>
              <div class="content">
                <p class="title"><nuxt-link to="/post">{{ item.title }}</nuxt-link></p>
                <p class="info">
                  <span>{{ filterItems.citysArea[(item.area-1)].name }}</span> · {{ item.options[0] }} · {{ item.options[1] }} · {{ item.options[2] }}
                </p>
                <p class="txt">{{ item.desc }}..</p>
                <span class="time" v-text="agoCalc(item.date, item.time)+' 전'"></span>
              </div>
            </div>
            <!-- <div class="article">
            <nuxt-link to="/post" style="height: 80px;"><img src="~assets/img/ex.jpg" class="img-repre"></nuxt-link>
              <div class="content">
                <p class="title"><nuxt-link to="/post">테스트 전용 글 입니다.</nuxt-link></p>
                <p class="info"><span>노원역</span> · 20~30세 · 성별무관 · 흡연가능</p>
                <p class="txt">이 글은 테스트전용 글 입니다. 노원역에서 베타 버전 사용자들의 후기를 수집하고 있습니다. 참여해주시면 감사하겠습니다.</p>
                <span class="time">2시간 전</span>
              </div>
            </div> -->
          </div>

          <Pagination />

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
  import Vue from 'vue';
  import axios from 'axios';
  import Vuecookies from 'vue-cookies';
  import moment from 'moment';
  Vue.use(Vuecookies);

  export default {
    created() {
      this.param = {
        category: parseInt(this.$route.query.category),
        // city: parseInt(this.$cookies.get('city')), // 고정값
        area: this.$route.query.area,
        subway: this.$route.query.subway,
        genre: this.$route.query.genre, // categoryDetail
        keyword: this.$route.query.keyword,
        page: this.$route.query.page,
      }
    },
    data: () => ({
      city: [],
      param: [],
      filterItems: [],
      postItems: []
    }),
    async mounted() {
      // filter read
      try {
        const filterRes = await axios.get('/api/info/filter', {
          params: {
            city: this.$cookies.get('city'),
            category: this.param.category
          }
        });
        this.filterItems = filterRes.data.data;
      }
      catch (err) { console.log(err.response.data.message); }

      // city name read
      let findCityName = (arr) => {
        return arr.key == this.$cookies.get('city');
      }
      try {
        const citysRes = await axios.get('/api/info/citys');
        let cityCount = 0;
        for (let i = 0; i < this.filterItems.citysArea.length; i++) {
          cityCount += this.filterItems.citysArea[i].count;
        }
        this.city = {
          name: citysRes.data.data.citys.find(findCityName).name,
          count: cityCount
        }
      }
      catch (err) { console.log(err); }

      // post list read
      try {
        const postListRes = await axios.get('/api/board/read', {
          params: {
            category: this.param.category,
            city: this.$cookies.get('city'),
            area: this.param.area,
            subway: this.param.subway,
            categoryDetail: this.param.genre,
            keyword: this.param.keyword,
            page: this.param.page
          }
        });
        // console.log(postListRes.data.data);
        this.postItems = postListRes.data.data;
      }
      catch (err) { console.log(err); }

      // agoCalc
      // agoCalc(null, this.postItems[0].time);
    },
    methods: {
      async pageLink(ele, key) {
        this.param[ele] = key;
        if (key == null) {
          this.param[ele] = undefined;
        }

        let paramData = [];
        for (let [key, val] of Object.entries(this.param)) {
          if (val != undefined) {
            paramData.push(
              {
                key: key,
                val: val
              }
            );
          }
        }
        let paramString = '/board?';
        for (let i = 0; i < paramData.length; i++) {
          paramString += paramData[i].key+'='+paramData[i].val+'&';
        }
        paramString = paramString.slice(0, -1);
        this.$router.push(paramString);
      },
      agoCalc(date, time) {
        let timeNow = {
          year: parseInt(moment().format('YYYY')),
          month: parseInt(moment().format('MM')),
          day: parseInt(moment().format('DD')),
          hour: parseInt(moment().format('hh')),
          minute: parseInt(moment().format('mm'))
        }
        let dateSplit = date.split('-');
        let timeSplit = time.split(':');
        time = {
          year: parseInt(dateSplit[0]),
          month: parseInt(dateSplit[1]),
          day: parseInt(dateSplit[2]),
          hour: parseInt(timeSplit[0]),
          minute: parseInt(timeSplit[1])
        }

        let timeGap = [];
        // if (timeNow.hour == time.hour) {
        //   timeGap = {
        //     type: '분',
        //     val: timeNow.minute-time.minute
        //   }
        // } else {
        //   timeGap = {
        //     type: '시간',
        //     val: timeNow.hour-time.hour
        //   }
        // }

        if (timeNow.year > time.year) {
          timeGap = {
            type: '년',
            val: timeNow.year-time.year
          }
        }
        else if (timeNow.month > time.month) {
          timeGap = {
            type: '개월',
            val: timeNow.month-time.month
          }
        }
        else if (timeNow.day > time.day) {
          timeGap = {
            type: '일',
            val: timeNow.day-time.day
          }
        }
        else if (timeNow.hour >= time.hour) {
          timeGap = {
            type: '시간',
            val: timeNow.hour-time.hour
          }
        }

        return timeGap.val+timeGap.type;
      }
    },
    watch: {
      $route(to, form) {
        console.log(to);
        // postItems 업데이트
      },
    }
  }

</script>

<style scoped lang="scss">
  // @import '~assets/css/common.scss';
  @import '~assets/css/board.css';
  @import '~assets/css/mobile/board.css';

</style>
