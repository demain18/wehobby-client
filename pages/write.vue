<template>
  <div>
    <Gnb />
    <div id="wrap">
      <div>
        <v-row>
          <v-col>
            <v-select :items="list.city" item-text="name" item-value="key" v-model="select.city" :rules="[rules.required]" label="시/도*" ></v-select>
          </v-col>
          <v-col>
            <v-select :items="list.area" item-text="name" item-value="key" v-model="select.area" :disabled="select.city == null" label="구/군" ></v-select>
          </v-col>
          <v-col>
            <v-select :items="list.subway" item-text="name" item-value="key" v-model="select.subway" :disabled="select.city == null || select.city > 7" label="지하철역" ></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-select :items="list.category" item-text="name" item-value="key" v-model="select.category" :rules="[rules.required]" label="카테고리*"></v-select>
          </v-col>
          <v-col>
            <v-select :items="list.categoryDetail" item-text="name" item-value="key" v-model="select.genre" :disabled="select.category == null" label="장르" required></v-select>
          </v-col>
        </v-row>

        <v-text-field v-model="select.title" :rules="[rules.required]" label="제목*"></v-text-field>

        <v-row>
          <v-col>
            <v-text-field label="옵션1"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field label="옵션2"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field label="옵션3"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-file-input small-chips multiple hint="jpg,png 형식이고 크기과 5mb를 넘지 않는 이미지만 업로드 가능합니다" persistent-hint placeholder="이미지 업로드"></v-file-input>
          </v-col>
        </v-row>

        <div class="preview-grid">
          <div class="preview">
            <img src="~assets/img/dummy/1.jpg">
            <v-btn fab x-small class="btn-close">
              <v-icon>
                mdi-close
              </v-icon>
            </v-btn>
          </div>
          <!-- <div class="preview">
            <img src="~assets/img/dummy/2.jpg">
            <v-btn fab x-small class="btn-close">
              <v-icon>
                mdi-close
              </v-icon>
            </v-btn>
          </div> -->
        </div>
        <div style="clear: both;"></div>

        <v-textarea v-model="select.desc" solo label="이곳에 본문을 작성해주세요" rows="7" class="textarea"></v-textarea>

        <v-btn depressed class="btn-main-color">
          등록
        </v-btn>
        <!-- <v-btn depressed>
          취소
        </v-btn> -->
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
    created() {},
    data: () => ({
      select: {
        city: null,
        area: 0,
        subway: 0,
        category: null,
        genre: 0,
        title: null,
        options: {
          0: null,
          1: null,
          2: null
        },
        upload: {},
        desc: null,
        publish: false,
      },
      rules: {
        required: value => !!value || '비워둘 수 없는 항목입니다.',
      },
      list: {
        city: [],
        area: [],
        subway: [],
        category: [],
        categoryDetail: [],
        option: [
          [
            {
              type: 'num',
              list: [
                '10대',
                '20대',
                '30대',
                '40대',
                '50대',
                '50대 이상'
              ],
              name: '모집나이'
            },
            {
              type: 'num',
              list: [
                '무관',
                '남성',
                '여성'
              ],
              name: '성별'
            },
            {
              type: 'num',
              list: [
                '무관',
                '불가함'
              ],
              name: '흡연'
            },
          ]
        ]
      }
    }),
    async mounted() {
      // city read
      try {
        const cityRes = await axios.get('/api/info/citys');
        this.list.city = cityRes.data.data.citys;
      }
      catch (err) { console.log(err); }

      // category read
      try {
        const categoryRes = await axios.get('/api/info/category');
        this.list.category = categoryRes.data.data;
      }
      catch (err) { console.log(err); }
    },
    methods: {
      async cityDataRead() {
        try {
          const res = await axios.get('/api/info/citys/detail', {params: { city: this.select.city }});
          this.list.area = res.data.data.area;
          this.list.subway = res.data.data.subways;
          this.list.area.unshift({ key: 0, name: '선택 안함' });
          this.list.subway.unshift({ key: 0, name: '선택 안함' });
        }
        catch (err) { console.log(err); }
      },
      categoryDataUnshift() {
        this.list.categoryDetail.unshift({ key: 0, name: '선택 안함' });
      },
      optionRead(index) {
        return this.list.option[this.select.category][index].name;
      }
    },
    watch: {
      'select.city'(to, from) {
        this.cityDataRead();
      },
      'select.category'(to, from) {
        this.list.categoryDetail = this.list.category[(to-1)].detail;
        this.categoryDataUnshift();
      },
    }
  }

</script>

<style scoped lang="scss">
  // @import '~assets/css/common.scss';
  @import '~assets/css/write.css';
  @import '~assets/css/mobile/write.css';

</style>
