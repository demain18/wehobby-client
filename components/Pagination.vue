<template>
  <div class="paging-wrap">
    <div class="count">
      <v-btn icon v-on:click="pageLink('page', 1)"><v-icon class="elevator-btn">mdi-chevron-double-left</v-icon></v-btn>
      <v-btn icon v-if="paging.pageBase.now != 1" v-on:click="pageLink('page', paging.pageBase.now-1)"><v-icon class="elevator-btn">mdi-chevron-left</v-icon></v-btn>

      <div v-for="(item, index) in paging.pages" v-bind:key="index">
        <v-btn icon disabled class="btn" v-if="paging.pageBase.now==item">
          {{ item }}
        </v-btn>
        <v-btn icon class="btn" v-else v-on:click="pageLink('page', item)">
          {{ item }}
        </v-btn>
      </div>

      <v-btn icon v-if="paging.pageBase.now != paging.pageBase.last" v-on:click="pageLink('page', paging.pageBase.now+1)"><v-icon class="elevator-btn">mdi-chevron-right</v-icon></v-btn>
      <v-btn icon v-on:click="pageLink('page', paging.pageBase.last)"><v-icon class="elevator-btn">mdi-chevron-double-right</v-icon></v-btn>
    </div>
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
    async created() {
      // this.paramsRead();
      // this.pageBaseRead();
      // this.pagingCalc();
    },
    data: () => ({
      param: [],
      paging: {
        count: 5, // 페이지네이션에서 표시할 버튼 갯수. 홀수만 가능
        pageBase: {
          fir: 1, // 1 고정
          last: 0, // 총 페이지 갯수
          now: 1, // 현재 페이지 위치
        },
        pages: []
      },
      filterItems: []
    }),
    async mounted() {
      // page now read
      this.pageNowRead();

      this.paramsRead();
      this.pageBaseRead();
      // this.pagingCalc();
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
      paramsRead() {
        this.param = {
          category: this.$route.query.category,
          area: this.$route.query.area,
          subway: this.$route.query.subway,
          genre: this.$route.query.genre, // categoryDetail
          keyword: this.$route.query.keyword,
          page: this.$route.query.page,
        }
      },
      pageNowRead() {
        if (this.$route.query.page == undefined) {
          this.paging.pageBase.now = 1;
        } else {
          this.paging.pageBase.now = parseInt(this.$route.query.page);
        }
      },
      async pageBaseRead() {
        const filterRes = await this.$axios.$get('/api/info/filter', {
          params: {
            city: this.cityKey,
            category: this.param.category
          }
        });
        this.filterItems = filterRes.data;
        try {
          const pageRes = await this.$axios.$get('/api/board/read', {
            params: {
              category: this.param.category,
              city: this.$cookies.get('city'),
              area: this.findKey('area', this.param.area),
              subway: this.findKey('subway', this.param.subway),
              categoryDetail: this.findKey('genre', this.param.genre),
              keyword: this.param.keyword,
              page: this.param.page
            }
          });
          let countHalfUp = (Math.ceil(pageRes.data.count/10))
          if (countHalfUp>1) {
            this.paging.pageBase.last = countHalfUp;
          } else {
            this.paging.pageBase.last = 1;
          }

          this.pagingCalc();
        }
        catch (err) { console.log(err) }
      },
      pagingCalc() {
        let length = (this.paging.count-1)/2; // 양방향 갯수
        let now = this.paging.pageBase.now-length; // 시작점 설정
        let firEmpty = 0; // 우측 부족한 갯수
        let lastEmpty = 0; // 좌측 부족한 갯수
        this.paging.pages = [];

        if (this.paging.pageBase.last <= 4) 
        {
          for (let i=0; i<this.paging.pageBase.last; i++) {
            // console.log('pageGen:'+(i++))
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

        // page now read
        this.pageNowRead();
      }
    },
    watch: {
      async $route(to, form) {
        this.paramsRead();
        this.pageBaseRead();
        // this.pagingCalc();
      }
    }
  }

</script>

<style lang="scss">
  @import '~assets/css/common.scss';

</style>
