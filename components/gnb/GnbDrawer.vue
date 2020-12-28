<template>
  <div>
    <div class="drawer-wrap" :class="{drawerWrapActive:isActive}">
      <div class="drawer">
        <!-- <p>This is drawer</p> -->
        <div class="content">
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
          </v-avatar>
          <span class="title">
            백산
          </span>
        </div>

        <v-divider></v-divider>

        <v-list flat>
          <!-- <v-subheader>REPORTS</v-subheader> -->
          <v-list-item-group color="primary">
            <v-list-item v-for="(item, i) in itemsOne" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>

        <v-divider></v-divider>

        <v-list flat>
          <!-- <v-subheader>REPORTS</v-subheader> -->
          <v-list-item-group color="primary">
            <v-list-item v-for="(item, i) in itemsTwo" :key="i" :to="item.link">
              <!-- <nuxt-link :to="item.link"> -->
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              <!-- </nuxt-link> -->
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
      <div class="drawer-close" v-on:click="toggle()"></div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from "vuex";

  export default {
    name: "GnbDrawer",
    computed: {
      // isActive() {
      //   return this.$store.state.gnb.drawer
      // },
      ...mapGetters({
        isActive: 'gnb/getToggleDrawer'
      }),
    },
    methods: {
      toggle() {
        this.$store.commit('gnb/toggleDrawer')
      }
    },
    data: () => ({
      // isActive: true,
      selectedItem: 1,
      itemsOne: [{
          text: '도시선택',
          icon: 'mdi-domain',
          link: '/',
        },
        {
          text: '로그아웃',
          icon: 'mdi-exit-to-app',
          link: '/',
        },
        {
          text: '설정',
          icon: 'mdi-cog',
          link: '/',
        },
      ],
      itemsTwo: [{
          text: '회원모집',
          icon: 'mdi-account-multiple',
          link: '/board',
        },
        {
          text: '중고물품',
          icon: 'mdi-basket',
          link: '/',
        },
        {
          text: '아르바이트',
          icon: 'mdi-smart-card',
          link: '/',
        },
        {
          text: '재능교환/판매',
          icon: 'mdi-book-open-variant',
          link: '/',
        },
        {
          text: '이벤트',
          icon: 'mdi-calendar',
          link: '/',
        },
      ]
    })
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
    z-index: 1;

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
    z-index: 3;
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

  .drawer .v-list-item__content {
    margin-left: 18px;
  }

</style>
