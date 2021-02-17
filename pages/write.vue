<template>
  <div>
    <Gnb />
    <div id="wrap">
      <div>
        <v-row>
          <v-col>
            <!-- <v-text-field :rules="[rules.required]" label="시/구*"></v-text-field> -->
            <v-select :items="lists.city" :rules="[rules.required]" label="시/구*" ></v-select>
          </v-col>
          <v-col>
            <!-- <v-text-field label="구/군*"></v-text-field> -->
            <v-select :items="lists.area" label="구/군" ></v-select>
          </v-col>
          <v-col>
            <!-- <v-text-field label="지하철 역"></v-text-field> -->
            <v-select :items="lists.subway" label="지하철역" ></v-select>
          </v-col>
        </v-row>
        <v-row>

          <v-col>
            <v-select :items="lists.category"  :rules="[rules.required]" label="카테고리*" required></v-select>
          </v-col>
          <v-col>
            <!-- <v-text-field label="장르"></v-text-field> -->
            <v-select :items="lists.categoryDetail" label="장르" required></v-select>
          </v-col>

        </v-row>
        <v-text-field label="제목*"></v-text-field>
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
          <div class="preview">
            <img src="~assets/img/dummy/2.jpg">
            <v-btn fab x-small class="btn-close">
              <v-icon>
                mdi-close
              </v-icon>
            </v-btn>
          </div>
        </div>
        <div style="clear: both;"></div>

        <v-textarea solo label="이곳에 본문을 작성해주세요" rows="7" class="textarea"></v-textarea>

        <v-btn depressed class="btn-main-color">
          등록
        </v-btn>
        <v-btn depressed>
          취소
        </v-btn>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  export default {
    created() {},
    data: () => ({
      select: {
        city: null,
        area: null,
        subway: null,
        category: null,
        categoryDetail: null,
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
      lists: {
        city: [
          'ex1) 서울특별시',
          'ex2) 대구광역시',
          'ex2) 대전광역시'
        ],
        area: [
          'ex1) 노원구',
          'ex2) 은평구',
          'ex2) 중랑구'
        ],
        subway: [
          'ex1) 서울역',
          'ex2) 을지로 3가역',
          'ex3) 고속터미널역'
        ],
        category: [
          'ex1) 회원모집',
          'ex2) 중고물품',
          'ex3) 알바모집'
        ],
        categoryDetail: [
          'ex1) 친구',
          'ex2) 음식점/카페',
          'ex3) 게임'
        ]
      }
    }),
  }

</script>

<style scoped lang="scss">
  // @import '~assets/css/common.scss';
  @import '~assets/css/write.css';
  @import '~assets/css/mobile/write.css';

</style>
