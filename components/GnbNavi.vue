<template>
  <!-- <v-sheet height="200" class="overflow-hidden" style="position: relative;">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-btn color="pink" dark @click.stop="drawer = !drawer">
          Toggle
        </v-btn>
      </v-row>
    </v-container>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <p>hello</p>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet> -->

  <!-- <v-sheet class="overflow-hidden" style="position: relative;"> -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <!-- <v-img src="require('~assets/img/repre_1.jpg')"></v-img> -->
          <img src="~assets/img/repre_1.jpg">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title style="margin-left: 8px">테스트사용자</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  <!-- </v-sheet> -->
</template>

<script>
  export default {
    computed: {
      drawer() {
        return this.$store.state.gnb.drawer
      },
    },
    data: () => ({
      // drawer: false,
      items: [{
          title: 'Home',
          icon: 'mdi-view-dashboard'
        },
        {
          title: 'About',
          icon: 'mdi-forum'
        },
      ],
    }),
  }

</script>

<style lang="scss">
  @import '~assets/css/common.scss';

</style>
