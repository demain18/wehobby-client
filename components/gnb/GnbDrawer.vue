<template>
  <div>
    <div class="drawer-wrap" :class="{drawerWrapActive:isActive}">
      <div class="drawer">
        <div v-if="token.verify == true" class="content">
          <v-avatar>
            <img :src="repreImageRead(user.image)" style="object-fit: cover;">
          </v-avatar>
          <span class="title">
            {{ user.nickname }}
          </span>
        </div>
        <p v-else-if="token.verify == false" style="padding: 15px 0px 11px 20px;">
          <nuxt-link to="/auth">로그인/회원가입</nuxt-link>
        </p>
        
        <v-divider></v-divider>

        <v-list flat>
          <v-list-item-group color="primary">
            <v-list-item @click="toggleCityDialog()">
              <v-list-item-icon>
                <v-icon>mdi-domain</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>도시 선택</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            
            <div v-if="token.verify==true">
              <v-list-item :to="'/profile/'+user.key">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>프로필</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item to="/setting">
                <v-list-item-icon>
                  <v-icon>mdi-cog</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>설정</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="logout()">
                <v-list-item-icon>
                  <v-icon>mdi-exit-to-app</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>로그아웃</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-list-item-group>
        </v-list>

        <v-divider></v-divider>

        <v-list flat>
          <v-list-item-group color="primary">

            <div v-for="(item, index) in menuList" :key="index">
            <v-list-item :to="item.link">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            </div>

          </v-list-item-group>
        </v-list>
      </div>
      <div class="drawer-close" v-on:click="toggle()"></div>
    </div>
  </div>
</template>

<script>
  import verifyMixin from '~/mixins/verify.js';
  import globalMixin from '~/mixins/global.js';

  import {
    mapGetters
  } from "vuex";

  export default {
    name: "GnbDrawer",
    mixins: [verifyMixin, globalMixin],
    computed: {
      ...mapGetters({
        isActive: 'gnb/getToggleDrawer'
      }),
    },
    data: () => ({
      // isActive: true,
      selectedItem: 1,
      user: {},
      token: {
        verify: null
      },
      menuList: [{
          text: '회원모집',
          icon: 'mdi-account-multiple',
          link: '/board?category=1',
        },
        {
          text: '중고물품',
          icon: 'mdi-basket',
          link: '/board?category=2',
        },
        {
          text: '아르바이트',
          icon: 'mdi-smart-card',
          link: '/board?category=3',
        },
        {
          text: '재능교환/판매',
          icon: 'mdi-book-open-variant',
          link: '/board?category=4',
        },
        {
          text: '이벤트',
          icon: 'mdi-calendar',
          link: '/board?category=5',
        },
      ]
    }),
    async mounted() {
      this.isVerify();
      // this.user = this.$cookies.get('user');
      // user info read
      if (this.$cookies.isKey('user')) {
        this.user = this.$cookies.get('user');
        try {
          const res = await this.$axios.$get('/api/profile/read', {
            params: {
              id: this.user.key
            }
          });
          this.user.image = res.data.imgRepre;
        } 
        catch (err) {console.log(err)}
      }
    },
    methods: {
      toggle() {
        this.$store.commit('gnb/toggleDrawer');
      },
      logout() {
        this.$cookies.remove('token');
        this.$cookies.remove('user');
        window.location.href = "/";
      },
      toggleCityDialog() {
        this.$store.commit('dialog/toggleCityDialogActive');
      },
    }
  }

</script>

<style lang="scss">
  // @import '~assets/css/common.scss';


  /* Drawer */

  .drawer-wrap {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    z-index: 10 !important;

    display: none;
    opacity: 0;
    transition: opacity 0.15s linear;
  }

  .drawerWrapActive {
    display: block;
    opacity: 1;
    transition: opacity 0.15s linear;
  }

  .drawer {
    width: 230px;
    height: 100%;
    background-color: #ffffff;
    position: absolute;
    top: 0px;
    left: 0px;
  }

  .drawer-close {
    width: 100%;
    height: 100%;
    // border: 2px solid blue;
    z-index: 2;
  }

  .drawer .content {
    padding: 10px 15px;
  }

  .drawer .title {
    font-size: 18px;
    font-weight: bold;
    margin-left: 5px;
    position: relative;
    top: 1px;
  }

  .drawer .v-list-item {
    // min-height: 30px !important;
    padding-left: 15px !important;
  }

</style>
