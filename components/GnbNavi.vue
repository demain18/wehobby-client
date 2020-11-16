<template>
  <v-navigation-drawer v-model="drawer" absolute temporary>
    <v-list-item>
      <v-list-item-avatar>
        <!-- <v-img src="require('~assets/img/repre_1.jpg')"></v-img> -->
        <img src="~assets/img/repre_1.jpg">
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title style="margin-left: 8px">백산</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in userItem" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title style="margin-left: 8px">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title style="margin-left: 8px">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <!-- </v-sheet> -->
</template>

<script>
  import {
    mapGetters
  } from "vuex";

  export default {
    computed: {
      // drawer() {
      //   return this.$store.state.gnb.drawer
      // },

      // drawer: {
      //   set: function() {
      //     return this.$store.state.gnb.drawer
      //   },
      // },

      ...mapGetters({
        drawer: 'gnb/getToggleDrawer'
      }),
    },
    watch: {
      drawer(val, oldVal) {
        console.log('watched: ', val)
      }
    },
    data: () => ({
      // Store States
      // drawer: null,

      userItem: [{
          title: '도시선택',
          icon: 'mdi-domain'
        },
        {
          title: '로그아웃',
          icon: 'mdi-exit-to-app'
        },
        {
          title: '설정',
          icon: 'mdi-cog'
        },
      ],
      items: [{
          title: '회원모집',
          icon: 'mdi-account-multiple'
        },
        {
          title: '중고물품',
          icon: 'mdi-basket'
        },
        {
          title: '아르바이트',
          icon: 'mdi-smart-card'
        },
        {
          title: '재능교환/판매',
          icon: 'mdi-book-open-variant'
        },
        {
          title: '이벤트',
          icon: 'mdi-calendar'
        },
      ],
    }),
  }

</script>

<style lang="scss">
  @import '~assets/css/common.scss';

</style>
