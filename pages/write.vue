<template>
  <div>
    <Gnb />
    <div id="wrap">
      <!-- <div class="form">
        <p class="label">제목</p>
        <input type="text" class="size-full">
      </div>
      <div class="form-flex">
        <div class="form">
          <p class="label">도시</p>
          <input type="text" class="size-sm">
        </div>
        <div class="form">
          <p class="label">시구</p>
          <input type="text" class="size-sm">
        </div>
        <div class="form">
          <p class="label">역</p>
          <input type="text" class="size-sm">
        </div>
      </div>
      <div class="form-flex">
        <div class="form">
          <p class="label">대분류</p>
          <input type="text" class="size-sm">
        </div>
        <div class="form">
          <p class="label">소분류</p>
          <input type="text" class="size-sm">
        </div>
      </div>
      <div class="form-flex">
        <div class="form">
          <p class="label">옵션1</p>
          <input type="text" class="size-sm">
        </div>
        <div class="form">
          <p class="label">옵션2</p>
          <input type="text" class="size-sm">
        </div>
      </div>
      <div class="form form-upload">
        <p class="label">이미지 업로드</p>
        <input type="file">
        <div class="img-preview-wrap">
          <div class="img-preview"></div>
          <div class="img-preview"></div>
        </div>
      </div>
      <div class="form form-textarea">
        <textarea class="size-maintxt"></textarea>
      </div>
      <input type="button" value="작성" class="btn"> -->

      <div>
        <!-- <v-text-field label="제목"></v-text-field> -->
        <v-row>
          <v-col>
            <v-text-field label="도시*"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field label="구*"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field label="역"></v-text-field>
          </v-col>
        </v-row>
        <v-row>

        <!-- <v-col>
          <v-select v-model="select.area" :items="lists.area" label="지역*" required></v-select>
        </v-col> -->
        <v-col>
          <v-select v-model="select.category" :items="lists.category" attach label="카테고리*" required></v-select>
        </v-col>
        <v-col>
          <v-text-field label="장르"></v-text-field>
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
            <v-file-input small-chips multiple label="이미지 업로드"></v-file-input>
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

        <!-- <v-btn depressed>
          취소
        </v-btn> -->
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
  import Vue from 'vue'
  import Vuetify from 'vuetify'

  export default {
    data: () => ({
      select: {
        area: null,
        category: null
      },
      lists: {
        area: [
          'area1',
          'area2',
          'area3'
        ],
        category: [
          '회원모집',
          '중고물품',
          '알바모집'
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
