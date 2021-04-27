<template>
  <div>
    <Gnb />
    <DialogSlide/>
    <DialogShare/>
    <DialogReport/>
    <DialogContact/>

    <div id="wrap">
      <div class="content-wrap">
        <BreadCrumb />
        <h1 class="title">
          {{ data.content.title }}
        </h1>

        <div class="img-grid">
          <div class="img-wrap" style="height: 0px;" v-if="data.images.length==0">
            <!-- <img src="~assets/img/placeholder1.jpg"> -->
          </div>
          <div class="img-wrap" v-for="(item, index) in data.images" :key="index" @click="toggleDialogSlide(index)" v-else>
            <img :src="item">
          </div>
        </div>

        <div class="content" v-html="data.content.desc" :class="{ contentMargin: data.images.length!=0}">
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
                  <span class="time" v-text="agoCalc(item.date, item.time)+' 전'"></span>
                </p>
                <p v-if="select.commentEdit[index] == true">
                  <v-text-field v-model="select.comment.descEdit" v-on:keyup.enter="commentEdit(index)" solo dense label="" clearable></v-text-field>
                </p>
                <p v-else>{{ item.desc }}</p>
                <v-menu attach left offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon medium v-bind="attrs" v-on="on" class="tooltip-btn">mdi-dots-horizontal</v-icon>
                  </template>
                  <v-list>
                    <v-list-item style="width: 90px">
                      <nuxt-link :to="'/profile/'+item.uploader.key">프로필 보기</nuxt-link>
                      <a @click="toggleDialogReport('comment', item.key)">신고하기</a>
                      <a v-if="userKey == item.uploader.key" @click="commentEditable(index)">수정하기</a>
                      <a v-if="userKey == item.uploader.key" @click="commentDel(item.key)">삭제하기</a>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>
          </div>

          <div class="comment-write-wrap">
            <v-text-field v-model="select.comment.desc" solo label="댓글을 작성하세요" clearable></v-text-field>
            <v-btn @click="commentSend()" depressed class="submit">댓글 작성</v-btn>
          </div>
        </div>

        <div class="addition-wrap">
          <a @click="toggleDialog('Share')" class="btn">
            <v-icon small class="icon">mdi-share-variant</v-icon>공유하기
          </a>
          <a @click="toggleDialogReport('post', param)" class="btn">
            <v-icon small class="icon">mdi-bell</v-icon>신고하기
          </a>
          <span v-if="userKey == postUploaderKey">
            <nuxt-link v-if="userKey == postUploaderKey" :to="'/edit/'+param" class="btn">
              <v-icon small class="icon">mdi-pencil</v-icon>수정하기
            </nuxt-link>
            <a @click="postDel(param)" class="btn">
              <v-icon small class="icon">mdi-delete</v-icon>삭제하기
            </a>
            <span v-if="contactsIsEmpty == true"></span>
              <a v-else-if="data.header.recruitable == false" @click="recruitQuit()" class="btn">
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
          {{ data.header.date }}
          {{ data.header.time }}
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
          <div v-if="data.header.category == 2" v-text="optionContentRead(thousandComma(item.content, index))" class="content"></div>
          <div v-else-if="data.header.category == 3 || data.header.category == 4 || data.header.category == 5" v-text="optionContentRead(standardTerm(item.content, index))" class="content"></div>
          <div v-else v-text="optionContentRead(item.content)" class="content"></div>
        </div>

        <v-btn v-if="contactsIsEmpty == true" disabled>
          게시물 작성자가 아직 연락처를<br/> 추가하지 않았습니다
        </v-btn>
        <v-btn v-else-if="data.header.recruitable == false" disabled>
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
            <p>게시물 : {{ uploader.postCount }}개</p>
          </div>
        </div>
        <div class="bio">
          {{ uploader.bio }}
        </div>
      </div>
      <div class="snb">
        <Adsence/>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import Vuecookies from 'vue-cookies';
  import qs from 'qs';
  import articleMixin from '~/mixins/global.js';
  Vue.use(Vuecookies);

  export default {
    mixins: [articleMixin],
    created() {
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
      select: {
        comment: {
          submitStack: 0,
          desc: null,
          descEdit: null
        },
        commentEdit: []
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

      // post count increase
      this.postViewCount();

      // user key read
      if (this.$cookies.isKey('user')) {
        let userCookie = this.$cookies.get('user');
        this.userKey = userCookie.key;
      } else {
        this.userKey = null;
      }
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

          // contact isable check
          let contactsArr = postRes.data.data.header.contacts;
          if (
            contactsArr.length==0 || // 등록된 contact이 없거나
            // contactsArr==false || // recruitable이 false거나
            (postRes.data.data.header.contacts[0].desc==null 
            && postRes.data.data.header.contacts[1].desc==null)
          )
          {
            this.contactsIsEmpty = true;
          } 
          else {
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

          // commentEdit
          for (let i=0; i<this.data.comments.length; i++) {
            this.select.commentEdit.push(false);
          }

          // genre read
          this.genreRead();
          
          // area&subway read
          this.areaAndSubwayRead();

          // breadcrumb update
          this.breadCrumbUpdate();

          if (postRes.data.result == false) {
            alert('존재하지 않는 게시물입니다.');
            this.$router.push('/');
            return;
          }
        }
        catch (err) { 
          console.log(err);
        }
      },
      async genreRead() {
        try {
          const filterRes = await axios.get('/api/info/category');
          let filterItems = filterRes.data.data;
          if (this.data.header.categoryDetail != 0) {
            let genreObj = filterItems.find(obj => obj.key == this.data.header.category).detail;
            this.header.genre = genreObj.find(obj => obj.key == this.data.header.categoryDetail).name;
          }
        }
        catch (err) { console.log(err); }
      },
      async areaAndSubwayRead() {
        try {
          const cityRes = await axios.get('/api/info/citys/detail', {
            params: {
              city: this.data.header.city
            }
          });

          if (this.data.header.districtRegion != 0) {
            this.header.area = cityRes.data.data.area.find(obj => obj.key == this.data.header.districtRegion).name;
          }
          if (this.data.header.subway != 0) {
            this.header.subway = cityRes.data.data.subways.find(obj => obj.key == this.data.header.subway).name+'역';
          }
        }
        catch (err) { console.log(err); }
      },
      async postViewCount() {
        try {
          // read ip now
          const ipRes = await axios.get('https://api.ipify.org?format=json');
          let token = null;
          if (this.$cookies.isKey('token')) {
            token = this.$cookies.get('token');
          } else {
            token = null;
          }

          await axios.get('/api/post/view', {
            params: {
              tableId: this.param,
              action: 'view',
              ip: ipRes.data.ip,
              token: token,
            }
          });
        }
        catch (err) { 
          console.log(err);
        }
      },
      async recruitQuit() {
        try {
          await axios.post('/api/post/terminate/recruit', {
            id: this.param
          },
          {headers: {token: this.$cookies.get('token')}});
          if (this.data.header.recruitable == false) {
            this.data.header.recruitable = true;
          } else {
            this.data.header.recruitable = false;
          }
        }
        catch (err) { console.log(err); }
      },
      async postDel(postKey) {
        let confirmRes = confirm('정말 게시물을 삭제하시겠습니까?');
        if (confirmRes == true) {
          try {
            await axios.post('/api/post/delete', {
              id: this.param
            },
            {headers: {token: this.$cookies.get('token')}});
            this.$router.push('/board?category='+this.data.header.category);
            return;
          }
          catch (err) { console.log(err); }
        } else {
          return;
        }
      },
      commentEnter() {
        this.commentSend();
        console.log('enter work.');
      },
      async commentSend() {
        if (this.$cookies.isKey('user') != true || this.userKey == null) {
          alert('댓글 작성 기능은 로그인 후 이용할 수 있습니다.');
          return;
        }
        if (this.select.comment.desc == null) {
          alert('댓글은 한 글자 이상 작성해주세요.');
          return;
        }
        try {
          await axios.post('/api/comment/insert', {
            id: this.param,
            desc: this.select.comment.desc
          },
          {headers: {token: this.$cookies.get('token')}});
          // this.select.comment.submitStack++;
          this.postRead();
          this.select.comment.desc = null;
        }
        catch (err) { console.log(err); }
      },
      commentEditable(index) {
        Vue.set(this.select.commentEdit, index, !this.select.commentEdit[index]);
        this.select.comment.descEdit = this.data.comments[index].desc;
      },    
      async commentEdit(index) {
        try {
          await axios.post('/api/comment/update', {
            id: this.data.comments[index].key,
            desc: this.select.comment.descEdit
          },
          {headers: {token: this.$cookies.get('token')}});
          this.postRead();
          Vue.set(this.select.commentEdit, index, !this.select.commentEdit[index]);
        }
        catch (err) { console.log(err); }
      },
      async commentDel(commentKey) {
        try {
          await axios.post('/api/comment/delete', {
            id: commentKey
          },
          {headers: {token: this.$cookies.get('token')}});
          this.postRead();
        }
        catch (err) { console.log(err); }
      },
      async breadCrumbUpdate() {
        let categoryName=null; 
        let cityName=null; 

        // category name read
        const categoryRes = await axios.get('/api/info/category');
        categoryName = categoryRes.data.data.find(ele => ele.key == this.data.header.category).name;

        // city name read
        if (this.$cookies.isKey('city')!=true || this.$cookies.get('city')==0) {
          cityName = '전국';
        } 
        else {
          const citysRes = await axios.get('/api/info/citys');
          cityName = citysRes.data.data.citys.find(ele => ele.key == this.data.header.city).name;
        }

        this.$store.commit('urls/setList', {
          category: { key: this.data.header.category, name: categoryName  },
          city: { key: this.data.header.city, name: cityName },
          area: this.$store.state.urls.list.area,
          post: { key: this.$route.params.id, name: this.data.content.title }
        });
      },
      toggleDialog(dialogName) {
        this.$store.commit('dialog/toggle'+dialogName+'DialogActive');
      },
      toggleDialogSlide(index) {
        this.$store.commit('dialog/setDataSlideList', this.data.images);
        this.$store.commit('dialog/setDataSlideIndex', index);
        this.$store.commit('dialog/toggleSlideDialogActive');
      },
      toggleDialogReport(contentName, contentId) {
        if (this.$cookies.isKey('user') != true && this.userKey == null) {
          alert('신고하기 기능은 로그인 후 이용할 수 있습니다.');
          return;
        }

        this.$store.commit('dialog/setDataReport', {
          tableName: contentName,
          tableId: contentId
        });
        this.$store.commit('dialog/toggleReportDialogActive');
      },
      toggleDialogContact() {
        if (this.$cookies.isKey('user') != true || this.userKey == null) {
          alert('작성자에게 연락하기 기능은 로그인 후 이용할 수 있습니다.');
          return;
        }

        this.$store.commit('dialog/setDataContact', {
          mail: this.contacts.mail,
          kakao: this.contacts.kakao
        });
        this.$store.commit('dialog/toggleContactDialogActive');
      },
      optionContentRead(content) {
        if (content == '') {
          return '-';
        } else {
          return content;
        }
      },
      standardTerm(content, index) {
        if (index==1) {
          if (content=='') {
            return '-';
          } else {
            return content+'일/월';
          }
        } 
        else if(index==2) {
          if (content=='') {
            return '-';
          } else {
            return content+'시간/일';
          }
        } 
        else {
          return content;
        }
      },
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
