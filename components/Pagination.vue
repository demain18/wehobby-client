<template>
  <div class="paging-wrap">
    <div class="count">
      <v-btn icon><v-icon class="elevator-btn">mdi-chevron-double-left</v-icon></v-btn>
      <v-btn icon><v-icon class="elevator-btn">mdi-chevron-left</v-icon></v-btn>

      <div v-for="(item, index) in paging.pages" v-bind:key="index">
        <v-btn icon disabled class="btn" v-if="paging.pageBase.now==item">
          {{ item }}
        </v-btn>
        <v-btn icon class="btn" v-else>
          {{ item }}
        </v-btn>
      </div>

      <v-btn icon><v-icon class="elevator-btn">mdi-chevron-right</v-icon></v-btn>
      <v-btn icon><v-icon class="elevator-btn">mdi-chevron-double-right</v-icon></v-btn>
    </div>
          </div>
</template>

<script>
  export default {
    created() {
      /*
      나중에 fir도 지울 것
      */
      let length = (this.paging.count-1)/2; // 양방향 갯수
      let now = this.paging.pageBase.now-length; // 시작점 설정
      let firEmpty = 0; // 우측 부족한 갯수
      let lastEmpty = 0; // 좌측 부족한 갯수

      if (this.paging.pageBase.last <= 4) 
      {
        for (let i=0; i<this.paging.pageBase.last; i++) {
          this.paging.pages.push(i+1);
        }
      }
      else 
      {
        for (let i=0; i<length; i++) {
          if (now>=1) { // now값이 fir보다 크면 배열 추가
            this.paging.pages.push(now);
            now++;
          } else {
            this.paging.pages.push('$');
            now++;
            firEmpty++;
          }
        }
        this.paging.pages.push(now); // 복구된 now값 배열 추가
        for (let i=0; i<length; i++) {
          if (now<this.paging.pageBase.last) { // now값이 last보다 작으면 배열 추가
            now++;
            this.paging.pages.push(now);
          } else {
            this.paging.pages.push('#');
            // now++;
            lastEmpty++;
          }
        }

        // fir, last empty 계산해서 pages배열 앞뒤로 지우고 추가
        // console.log('firEmpty: '+firEmpty+' / lastEmpty: '+lastEmpty+' / now: '+now);
        for (let i=0; i<firEmpty; i++) {
          now++;
          this.paging.pages.shift();
          this.paging.pages.push(now);
        }
        now -= length;
        for (let i=0; i<lastEmpty; i++) {
          if (this.paging.pageBase.now % 2 == 0) {
            now -= 1;
          }
          now -= 1;
          this.paging.pages.pop();
          this.paging.pages.unshift(now);
        }
      }
    },
    data: () => ({
      paging: {
        count: 5, // 홀수만 가능
        pageBase: {
          fir: 1, // 1 고정
          last: 10, // 총 페이지 갯수
          now: 1, // 현재 페이지 위치
        },
        pages: []
      }
    }),
    mounted() {
      
    }
  }

</script>

<style lang="scss">
  @import '~assets/css/common.scss';

</style>
