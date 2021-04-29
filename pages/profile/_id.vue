<template>
  <div>
    <Gnb />
    <div id="wrap">
      <div class="info-wrap">
        <!-- <div class="img-profile"></div> -->
        <v-avatar class="img-profile">
          <img :src="repreImageRead(data.repreImage)" class="present">
          <!-- <img src="~assets/img/placeholder.png" class="present"> -->
        </v-avatar>
        <div class="table-wrap">
          <div class="table">
            <div class="header">닉네임</div>
            <div class="content" v-text="nullCheck(data.nick)"></div>
          </div>
          <div class="table">
            <div class="header">소개</div>
            <div class="content" v-text="nullCheck(data.bio)"></div>
          </div>
          <div class="table">
            <div class="header">나이</div>
            <div class="content" v-text="ageCalc(data.age)"></div>
          </div>
          <div class="table">
            <div class="header">직업</div>
            <div class="content" v-text="nullCheck(data.job)"></div>
          </div>
          <div class="table">
            <div class="header">성별</div>
            <div class="content">
              <span v-if="data.sex=='비공개'">-</span>
              <span v-else v-text="nullCheck(data.sex)"></span>
            </div>
          </div>
          <!-- <div class="table">
            <div class="header">본인인증</div>
            <div class="content">
              <v-chip v-if="data.verify" class="icon-vertify" color="blue lighten-5" text-color="blue lighten-1">
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle</v-icon>
                </v-avatar>
                인증됨
              </v-chip>
              <span v-else>미 인증</span>
            </div>
          </div> -->
        </div>
      </div>
      <div class="posts-wrap">
        <div class="list-header">
          <span class="title">작성한 게시물({{ postData.count }})</span>
        </div>
        <div class="list-header-line"></div>
        <div class="article-wrap">
          
          <div class="article" v-for="(item, index) in postData.items" v-bind:key="index">
            <nuxt-link :to="'/post/'+item.key" style="height: 80px;"><img :src="repreImageRead(item.imageRepre)" class="img-repre"></nuxt-link>
            <div class="content">
              <p class="title"><nuxt-link :to="'/post/'+item.key">{{ item.title }}</nuxt-link></p>
              <p class="txt" v-html="markupReplace(item.desc)"></p>
              <span class="time" v-text="agoCalc(item.date, item.time)+' 전'"></span>
            </div>
          </div>

        </div>
        <GlobalPagination />
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
  import articleMixin from '~/mixins/global.js';
  Vue.use(Vuecookies);

  export default {
    mixins: [articleMixin],
    created() {
      this.param = {
        page: this.$route.query.page,
        key: this.$route.params.id
      }
    },
    data: () => ({
      param: null,
      data: {
        nick: '-',
        bio: '-',
        age: '-',
        job: '-',
        sex: '-',
        verify: false,
      },
      postData: {
        count: [],
        items: []
      },
      filterItems: []
    }),
    async mounted() {
      // filter read
      try {
        const filterRes = await this.$axios.$get('/api/info/filter', {
          params: {
            city: this.$cookies.get('city'),
            category: this.param.category
          }
        });
        this.filterItems = filterRes.data;
      }
      catch (err) { console.log(err.response.data.message); }

      // profile read
      try {
        let res = await this.$axios.$get('/api/profile/read', {
          params: {
            id: this.param.key
          }
        });
        this.data = {
          repreImage: res.data.imgRepre,
          nick: res.data.nickname,
          bio: res.data.bio,
          age: res.data.birth,
          job: res.data.job,
          sex: res.data.sex,
          verify: res.data.vertify,       
        }
      } 
      catch (err) {console.log(err)}

      // post read
      this.postListRead();
    },
    watch: {
      async $route(to, form) {
        // params update
        this.param = {
          page: this.$route.query.page,
          key: this.$route.params.id
        }
        // postItems update
        this.postListRead();
      }
    },
    methods: {
      async postListRead() {
        try {
          const postListRes = await this.$axios.$get('/api/board/read', {
            params: {
              page: this.param.page,
              uploader: this.param.key
            }
          });
          this.postData.count = postListRes.data.count;
          this.postData.items = postListRes.data.postItems;
        }
        catch (err) { console.log(err); }
      },
      nullCheck(content) {
        if (content==null) {
          return '-';
        } else {
          return content;
        }
      },
      ageCalc() {
        if (this.data.age=='' || this.data.age==null) {
          return '-';
        } else {
          let age = moment().format('yyyy')-this.data.age;
          return (age+1)+'살';
        }
      },
    }
  }

</script>

<style scoped lang="scss">
  @import '~assets/css/profile.css';
  @import '~assets/css/mobile/profile.css';

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

  #wrap .list-header-line {
    margin-bottom: 0px;
  }

</style>
