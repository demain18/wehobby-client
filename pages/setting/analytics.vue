<template>
  <div>
    <Gnb />
    <div id="wrap">
      <SettingSnb />
      <div class="content-wrap">
        <h1 class="content-title">통계 및 분석</h1>
        <p class="content-sub">내가 작성한 글에 대한 통계를 확인할 수 있습니다</p>

        <v-simple-table style="width: 100%; margin-bottom: 15px;">
          <template v-slot:default>
            <thead>
              <tr>
                <th style="text-align:left;">
                  글 제목
                </th>
                <th style="text-align:left;">
                  조회수
                </th>
                <th style="text-align:left;">
                  댓글수
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in postData" v-bind:key="index">
                <td><nuxt-link :to="'/post/'+item.key" class="highlight">{{ item.title }}</nuxt-link></td>
                <td>{{ item.count.view }}</td>
                <td>{{ item.count.comment }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
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
    data: () => ({
      desserts: [
          {
            link: '',
            title: '같이 몬헌 파티할 플스유저 구합니다',
            views: 159,
            comments: 2
          },
          {
            link: '',
            title: '넷플릭스 친구 공유 함께하실분 구합니다',
            views: 237,
            comments: 3
          }
      ],
      postData: []
    }),
    async mounted() {
      try {
        for (let x=1; x<100; x++) {
          const res = await axios.get('https://api.wehobby.kr/1.0/api/board/read', {
            params: {
              page: x,
              uploader: (this.$cookies.get('user')).key
            }
          });

          if (res.data.data.postItems.length > 0) {
            for (let i=0; i<res.data.data.postItems.length; i++) {

              const postRes = await axios.get('https://api.wehobby.kr/1.0/api/post/read', {
                params: {
                  id: res.data.data.postItems[i].key
                }
              });

              this.postData.push({
                key: res.data.data.postItems[i].key,
                title: res.data.data.postItems[i].title,
                count: {
                  view: postRes.data.data.header.view,
                  comment: this.undefinedConv(postRes.data.data.comments)
                }
              })

            }
          } else {
            return;
          }
        }
      }
      catch (err) { console.log(err); }
    },
    methods: {
      undefinedConv(content) {
        if (content==undefined) {
          return 0;
        } else {
          return content.length;
        }
      }
    }
  }

</script>

<style scoped lang="scss">
  @import '~assets/css/setting.css';
  @import '~assets/css/mobile/setting.css';

</style>
