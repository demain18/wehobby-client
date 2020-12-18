<template>
  <div class="snb-wrap">
    
    <!-- <div 
      class="snb-btn" 
      v-for="(item, index) in menuList" 
      :key="index" 
      v-bind:class="{ active: item.isActive }"
    >
      <h2><nuxt-link :to="item.url" class="actionDisabled">{{ item.title }}</nuxt-link></h2>
    </div> -->

    <nuxt-link :to="item.url" class="actionDisabled"
      v-for="(item, index) in menuList" 
      :key="index" 
    >
    <div class="snb-btn" v-bind:class="{ active: item.isActive }">
      <h2>
        {{ item.title }}
      </h2>
    </div>
    </nuxt-link>

  </div>
</template>

<script>
  export default {
    created() {
      this.slug = this.$route.path;
      // if (this.slug == '/setting') {
      //   this.slug = '/'
      // }
    },
    data: () => ({
      slug: null,
      menuList: [
        {
          title: '프로필 수정',
          url: '/setting',
          isActive: false
        },
        {
          title: '계정 설정',
          url: '/setting/account',
          isActive: false
        },
        {
          title: '광고 신청',
          url: '/setting/adsence',
          isActive: false
        },
        {
          title: '통계 및 분석',
          url: '/setting/analytics',
          isActive: false
        }
      ],
      urlList: []
    }),
    mounted() {
      let menuList = this.menuList;
      let arr = [];
      for (let i = 0; i < menuList.length; i++) {
        if (menuList[i].url == this.slug) {
          menuList[i].isActive = true;
        }
        // arr[i] = menuList[i].url;
      }
      this.urlList = arr;
      // var arr2 = arr.filter(function (n) {
      //   return n % 5 == 0;
      // });
    }
  }

</script>

<style lang="scss">
  @import '~assets/css/common.scss';

</style>
