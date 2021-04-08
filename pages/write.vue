<template>
  <div>
    <Gnb />
    <div id="wrap">
      <div>
        <v-row>
          <v-col>
            <v-select :items="list.city" item-text="name" item-value="key" v-model="select.city" :rules="[rules.required]" label="시/도*"></v-select>
          </v-col>
          <v-col>
            <v-select :items="list.area" item-text="name" item-value="key" v-model="select.area" :disabled="select.city == null" label="구/군" placeholder="선택안함"></v-select>
          </v-col>
          <v-col>
            <v-select :items="list.subway" item-text="name" item-value="key" v-model="select.subway" :disabled="select.city == null || select.city > 7" label="지하철역" placeholder="선택안함"></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-select :items="list.category" item-text="name" item-value="key" v-model="select.category" :rules="[rules.required]" label="카테고리*"></v-select>
          </v-col>
          <v-col>
            <v-select :items="list.categoryDetail" item-text="name" item-value="key" v-model="select.genre" :disabled="select.category == null" label="장르" placeholder="선택안함"></v-select>
          </v-col>
        </v-row>

        <v-text-field v-model="select.title" :rules="[rules.required]" label="제목*"></v-text-field>

        <v-row>
          <v-col>
            <v-text-field v-if="optionListRead(0) == 'num'" :disabled="select.category == null" v-model="select.optionData[0]" :label="select.options[0]" type="number"></v-text-field>
            <v-select v-else :disabled="select.category == null" :items="optionListRead(0)" v-model="select.optionData[0]" :label="select.options[0]"></v-select>
          </v-col>
          <v-col>
            <v-text-field v-if="optionListRead(1) == 'num'" :disabled="select.category == null" v-model="select.optionData[1]" :label="select.options[1]" type="number"></v-text-field>
            <v-select v-else :disabled="select.category == null" :items="optionListRead(1)" v-model="select.optionData[1]" :label="select.options[1]"></v-select>
          </v-col>
          <v-col>
            <v-text-field v-if="optionListRead(2) == 'num'" :disabled="select.category == null" v-model="select.optionData[2]" :label="select.options[2]" type="number"></v-text-field>
            <v-select v-else :disabled="select.category == null" :items="optionListRead(2)" v-model="select.optionData[2]" :label="select.options[2]"></v-select>
          </v-col>
        </v-row>

        <!-- <v-text-field v-model="select.title" :rules="[rules.required]" label="제목*"></v-text-field> -->

        <v-row>
          <v-col>
            <v-file-input v-model="select.upload" small-chips multiple hint="jpg, png 형식이며 파일 크기가 5mb를 넘지 않는 이미지만 업로드 가능합니다" persistent-hint placeholder="이미지 업로드"></v-file-input>
          </v-col>
        </v-row>

        <div class="preview-grid">
          <!-- <div class="preview">
            <img src="~assets/img/dummy/1.jpg">
            <v-btn fab x-small class="btn-close">
              <v-icon>
                mdi-close
              </v-icon>
            </v-btn>
          </div> -->
        </div>
        <div style="clear: both;"></div>

        <vue-editor v-model="select.desc" :editor-toolbar="customToolbar" class="textarea" />
        <!-- <v-textarea v-model="select.desc" solo label="이곳에 본문을 작성해주세요" rows="7" class="textarea"></v-textarea> -->

        <v-btn :disabled="select.submitAble == false" @click="postWriteSubmit()" depressed class="btn-main-color">
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
  import { VueEditor } from "vue2-editor";
  import qs from 'qs';
  Vue.use(Vuecookies);

  export default {
    components: { VueEditor },
    created() {},
    data: () => ({
      customToolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        // ["image", "code-block"]
      ],
      select: {
        city: null,
        area: null,
        subway: null,
        category: null,
        genre: null,
        title: null,
        options: [
          '옵션1',
          '옵션2',
          '옵션3'
        ],
        optionData: [
          null,
          null,
          null
        ],
        upload: null,
        desc: null,
        submitAble: false,
      },
      rules: {
        required: value => !!value || '비워둘 수 없는 항목입니다.',
        // required(value) {
        //   if (value == null) {
        //     return '비워둘 수 없는 항목입니다';
        //   }
        // }
      },
      list: {
        city: [],
        area: [],
        subway: [],
        category: [],
        categoryDetail: [],
        options: [
          [ // 회원 모집
            {
              list: [
                '무관',
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
              list: [
                '무관',
                '남성',
                '여성'
              ],
              name: '성별'
            },
            {
              list: [
                '무관',
                '불가함'
              ],
              name: '흡연'
            },
          ],
          [ // 중고 물품
            {
              list: 'num',
              name: '가격'
            },
            {
              list: [
                '미개봉',
                '중고'
              ],
              name: '상품상태'
            },
            {
              list: [
                '교환 가능',
                '교환 불가능'
              ],
              name: '교환여부'
            },
          ],
          [ // 아르바이트
            {
              list: [
                '구인',
                '구직',
                '대타/인수인계'
              ],
              name: '분류'
            },
            {
              list: 'num',
              name: '근무기간(한달에 n일)'
            },
            {
              list: 'num',
              name: '근무시간(하루에 n시간)'
            },
          ],
          [ // 재능교환/핀매
            {
              list: [
                '교환',
                '판매',
                '구매'
              ],
              name: '분류'
            },
            {
              list: 'num',
              name: '기간(한달에 n일)'
            },
            {
              list: 'num',
              name: '시간(하루에 n시간)'
            },
          ],
          [ // 이벤트
            {
              list: [
                '주최자',
                '중계자'
              ],
              name: '작성자'
            },
            {
              list: 'num',
              name: '기간(한달에 n일)'
            },
            {
              list: 'num',
              name: '시간(하루에 n시간)'
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
    watch: {
      'select.city'(to, from) {
        this.cityDataRead();
        this.select.area = null;
        this.select.subway = null;
      },
      'select.category'(to, from) {
        this.list.categoryDetail = this.list.category[to-1].detail;
        this.select.options = [
          this.list.options[this.select.category-1][0].name,
          this.list.options[this.select.category-1][1].name,
          this.list.options[this.select.category-1][2].name,
        ]
        this.select.genre = null;
        this.select.optionData = [
          null,
          null,
          null
        ];
      },
      select: {
        deep: true,
        handler() {
          if (this.select.city != null && this.select.category != null && this.select.title != null && this.select.title != '') {
            this.select.submitAble = true;
          } else {
            this.select.submitAble = false;
        }
        }
      }
    },
    methods: {
      async cityDataRead() {
        try {
          const res = await axios.get('/api/info/citys/detail', {params: { city: this.select.city }});
          this.list.area = res.data.data.area;
          this.list.subway = res.data.data.subways;
        }
        catch (err) { console.log(err); }
      },
      optionListRead(index) {
        let category = this.select.category;
        if (category == null) {
          return [];
        } else {
          return this.list.options[category-1][index].list;
        }
      },
      async postWriteSubmit() {
        if (this.select.submitAble == true) {
          try {
            const res = await axios.post('/api/post/insert',
              {
                city: this.select.city,
                district_region: this.select.area,
                subway: this.select.subway,
                category: this.select.category,
                category_detail: this.select.genre,
                option1: this.select.optionData[0],
                option2: this.select.optionData[1],
                option3: this.select.optionData[2],
                title: this.select.title,
                desc: this.select.desc
              }, {
              headers: {
                token: this.$cookies.get('token'),
              }}
            );
            this.$router.push('/post/'+res.data.data.postIdKey);
          }
          catch (err) { console.log(err); }
        }
      }
    },
  }

</script>

<style scoped lang="scss">
  // @import '~assets/css/common.scss';
  @import '~assets/css/write.css';
  @import '~assets/css/mobile/write.css';

</style>
