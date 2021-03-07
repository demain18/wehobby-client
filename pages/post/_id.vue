<template>
  <div>
    <Gnb />
    <!-- <DialogSlide/> -->
    <DialogShare/>
    <DialogReport/>
    <DialogContact/>

    <div id="wrap">
      <div class="content-wrap">
        <BreadCrumb />
        <h1 class="title">
          {{ data.content.title }}
        </h1>
        <div class="images">

          <div class="img-wrap">
            <img src="~assets/img/placeholder1.jpg">
          </div>

        </div>
        <div class="content">
          {{ data.content.desc }}
        </div>
        <div class="comment-wrap">
          <div class="list">
            <div class="list-header">
              <span class="title">댓글 {{ data.comments.length }}개</span>
            </div>
            <div class="list-header-line"></div>

            <p v-if="data.comments.length == 0" class="placeholder-comment">아직 작성된 댓글이 없습니다, 가장 먼저 댓글을 작성해보세요.</p>

            <div class="item" v-for="(item, index) in data.comments" :key="index">
              <v-avatar class="header">
                <img src="~assets/img/repre_1.jpg" class="present">
              </v-avatar>
              <div class="main">
                <p>
                  <nuxt-link :to="'/profile/'+item.uploader.key"><strong>{{ item.uploader.nickname }}</strong></nuxt-link>
                  <!-- <span class="time">15분 전</span> -->
                </p>
                <p>{{ item.desc }}</p>
                <v-menu attach left offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon medium v-bind="attrs" v-on="on" class="tooltip-btn">mdi-dots-horizontal</v-icon>
                  </template>
                  <v-list>
                    <v-list-item style="width: 90px">
                      <nuxt-link :to="'/profile/'+item.uploader.key">프로필 보기</nuxt-link>
                      <a @click="toggleDialogReport('comment', item.key)">신고하기</a>
                      <nuxt-link v-if="userKey == item.uploader.key" to="">수정하기</nuxt-link>
                      <nuxt-link v-if="userKey == item.uploader.key" to="">삭제하기</nuxt-link>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>

          </div>

          <v-text-field solo label="댓글을 입력하세요" clearable></v-text-field>
        </div>
        <div class="addition-wrap">
          <a @click="toggleDialog('Share')" class="btn">
            <v-icon small class="icon">mdi-share-variant</v-icon>공유하기
          </a>
          <a @click="toggleDialogReport('post', param)" class="btn">
            <v-icon small class="icon">mdi-bell</v-icon>신고하기
          </a>
          <nuxt-link v-if="userKey == postUploaderKey" to="" class="btn">
            <v-icon small class="icon">mdi-pencil</v-icon>수정하기
          </nuxt-link>
          <nuxt-link v-if="userKey == postUploaderKey" to="" class="btn">
            <v-icon small class="icon">mdi-delete</v-icon>삭제하기
          </nuxt-link>

          <span v-if="userKey == postUploaderKey">
            <span v-if="contactsIsEmpty == true"></span>
            <a v-else-if="data.header.contacts == false" @click="recruitQuit()" class="btn">
              <v-icon small class="icon">mdi-reload</v-icon>모집 재개하기
            </a>
            <a v-else @click="recruitQuit()" class="btn">
              <v-icon small class="icon">mdi-close-octagon</v-icon>모집 종료하기
            </a>
          </span>

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
        <v-btn v-if="contactsIsEmpty == true" disabled>
          게시물 작성자가 아직 연락처를<br/> 추가하지 않았습니다
        </v-btn>
        <v-btn v-else-if="data.header.contacts == false" disabled>
          모집 종료된 게시물입니다
        </v-btn>
        <v-btn v-else depressed class="btn-main-color" @click="toggleDialogContact()">
          작성자에게 연락하기
        </v-btn>

        <div class="profile">
          <!-- <div class="header"></div> -->
          <v-avatar rounded class="header">
            <img src="~assets/img/repre_1.jpg" class="present">
          </v-avatar>
          <div class="content">
            <nuxt-link :to="'/profile/'+postUploaderKey">
              <h4><strong>{{ uploader.nickname }}</strong></h4>
            </nuxt-link>
            <p>{{ uploader.sex }}</p>
            <p>게시물 : 3개</p>
          </div>
        </div>
        <div class="bio">
          {{ uploader.bio }}
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
      data: {
        comments: [],
        content: {},
        header: {},
        images: []
      },
      header: {
        genre: '-',
        area: '-',
        subway: '-',
      },
      uploader: {},
      postUploaderKey: null,
      contactsIsEmpty: false,
      contacts: {},
      userKey: null,
    }),
    async mounted() {
      // post read
      this.postRead();

      // genre name read
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

      // area, subway name read
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

      // user key read
      let userCookie = this.$cookies.get('user');
      this.userKey = userCookie.key;

      // breadcrumb update
      this.breadCrumbUpdate();
    },
    methods: {
      async postRead() {
        try {
          const postRes = await axios.get('/api/post/read', {
            params: {
              id: this.param
            }
          });
          
          this.data = postRes.data.data;
          this.uploader = this.data.header.uploader;
          this.postUploaderKey = postRes.data.data.header.uploader.key;
          let contactsArr = postRes.data.data.header.contacts;

          if (contactsArr.length == 0) {
            this.contactsIsEmpty = true;
          }
          let mailObj = contactsArr.filter(item => {
            return item.type == 'mail';
          });
          let kakaoObj = contactsArr.filter(item => {
            return item.type == 'kakao';
          });
          if (mailObj.length != 0) {
            this.contacts.mail = mailObj[0].desc;
          } else {
            this.contacts.mail = false;
          }
          if (kakaoObj.length != 0) {
            this.contacts.kakao = kakaoObj[0].desc;
          } else {
            this.contacts.kakao = false;
          }
        }
        catch (err) { console.log(err); }
      },
      toggleDialog(dialogName) {
        this.$store.commit('dialog/toggle'+dialogName+'DialogActive');
      },
      toggleDialogReport(contentName, contentId) {
        this.$store.commit('dialog/setDataReport', {
          tableName: contentName,
          tableId: contentId
        });
        this.$store.commit('dialog/toggleReportDialogActive');
      },
      toggleDialogContact() {
        this.$store.commit('dialog/setDataContact', {
          mail: this.contacts.mail,
          kakao: this.contacts.kakao
        });
        this.$store.commit('dialog/toggleContactDialogActive');
      },
      async recruitQuit() {
        try {
          const res = await axios.post('/api/post/terminate/recruit', {
            id: this.param
          },
          {headers: {token: this.$cookies.get('token')}});
          
          if (this.data.header.contacts == false) {
            this.data.header.contacts = true;
          } else {
            this.data.header.contacts = false;
          }

          // window.location.href = "/post/"+this.param;
        }
        catch (err) { console.log(err); }
      },
      breadCrumbUpdate() {
        // let categoryData = {}
        // let cityData = {}
        // try {
        //   const res = await axios.get('/api/info/category');
        //   categoryData = res.data.data;
        //   let categoryObj = categoryData.filter(item => {
        //     return item.key == this.data.header.category;
        //   });
        //   categoryData = {
        //     key: categoryObj[0].key,
        //     name: categoryObj[0].name
        //   }
        // }
        // catch (err) { console.log(err.response.data.message); }

        // try {
        //   const res = await axios.get('/api/info/citys');
        //   cityData = res.data.data.citys;
        //   let cityObj = cityData.filter(item => {
        //     return item.key == this.data.header.city;
        //   });
        //   cityData = {
        //     key: cityObj[0].key,
        //     name: cityObj[0].name
        //   }
        // }
        // catch (err) { console.log(err.response.data.message); }
        
        this.$store.commit('urls/setList', {
          category: this.$store.state.urls.list.category,
          city: this.$store.state.urls.list.city,
          area: this.$store.state.urls.list.area,
          post: { key: this.$route.params.id, name: this.data.content.title }
        });
      }
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
