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
        const filterRes = await axios.get('/api/info/filter', {
          params: {
            city: this.$cookies.get('city'),
            category: this.param.category
          }
        });
        this.filterItems = filterRes.data.data;
      }
      catch (err) { console.log(err.response.data.message); }

      // profile read
      try {
        let res = await axios.get('/api/profile/read', {
          params: {
            id: this.param.key
          }
        });
        this.data = {
          repreImage: res.data.data.imgRepre,
          nick: res.data.data.nickname,
          bio: res.data.data.bio,
          age: res.data.data.birth,
          job: res.data.data.job,
          sex: res.data.data.sex,
          verify: res.data.data.vertify,       
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
          const postListRes = await axios.get('/api/board/read', {
            params: {
              page: this.param.page,
              uploader: this.param.key
            }
          });
          this.postData.count = postListRes.data.data.count;
          this.postData.items = postListRes.data.data.postItems;
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
        if (this.data.age=='') {
          return '-';
        } else {
          let age = moment().format('yyyy')-this.data.age;
          return (age+1)+'살';
        }
      },
      // // board list module
      // agoCalc(date, time) {
      //   let timeNow = {
      //     year: parseInt(moment().format('YYYY')),
      //     month: parseInt(moment().format('MM')),
      //     day: parseInt(moment().format('DD')),
      //     hour: parseInt(moment().format('hh')),
      //     minute: parseInt(moment().format('mm'))
      //   }
      //   let dateSplit = date.split('-');
      //   let timeSplit = time.split(':');
      //   time = {
      //     year: parseInt(dateSplit[0]),
      //     month: parseInt(dateSplit[1]),
      //     day: parseInt(dateSplit[2]),
      //     hour: parseInt(timeSplit[0]),
      //     minute: parseInt(timeSplit[1])
      //   }

      //   let timeGap = [];
      //   if (timeNow.year > time.year) {
      //     timeGap = {
      //       type: '년',
      //       val: timeNow.year-time.year
      //     }
      //   }
      //   else if (timeNow.month > time.month) {
      //     timeGap = {
      //       type: '개월',
      //       val: timeNow.month-time.month
      //     }
      //   }
      //   else if (timeNow.day > time.day) {
      //     timeGap = {
      //       type: '일',
      //       val: timeNow.day-time.day
      //     }
      //   }
      //   else if (timeNow.hour > time.hour) {
      //     timeGap = {
      //       type: '시간',
      //       val: timeNow.hour-time.hour
      //     }
      //   }
      //   else if (timeNow.minute > time.minute) {
      //     timeGap = {
      //       type: '분',
      //       val: timeNow.minute-time.minute
      //     }
      //   }
      //   else {
      //     timeGap = {
      //       type: '금',
      //       val: '방'
      //     }
      //   }
      //   return timeGap.val+timeGap.type;
      // },
      // findName(filterItem, index) {
      //   if (index == undefined) {
      //     return index;
      //   } else {
      //     index -= 1;
      //     if (filterItem == 'area') {
      //       return this.filterItems.citysArea[index].name;
      //     } else if (filterItem == 'subway') {
      //       return this.filterItems.citysSubway[index].name;
      //     } else if (filterItem == 'genre') {
      //       return this.filterItems.categoryDetail[index].name;
      //     }
      //   }
      // },
      // findAreaName(index) {
      //   if (this.postData.items[index].area == 0) {
      //     return '';
      //   } else {
      //     console.log(this.postData.items[index])
      //     return this.filterItems.citysArea.find(ele => ele.key == this.postData.items[index].area).name;
      //   }
      // },
      // markupReplace(content) {
      //   let desc = String(content);
      //   let list = [
      //     '<p>',
      //     '</p>',
      //     '<strong>',
      //     '</strong>',
      //     '<i>',
      //     '</i>',
      //     '<stricke>',
      //     '</strike>',
      //     '<li>',
      //     '</li>',
      //     '<ul>',
      //     '</ul>',
      //     '<ol>',
      //     '</ol>'
      //   ]
      //   for (let i = 0; i < list.length; i++) {
      //     desc = desc.split(list[i]).join('');
      //   }
      //   return desc;
      // },
      // thousandComma(content) {
      //   return content;
      //   return content.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      // }
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
