<template>
  <div>
    <Gnb />
    <DialogVerify/>
    <div id="wrap">
      <SettingSnb />
      <div class="content-wrap">
        <h1 class="content-title">프로필 수정</h1>
        <p class="content-sub">프로필에서 보여줄 정보를 수정하세요</p>

        <div class="form form-profile">
          <p class="label">대표 이미지</p>
          <img v-if="repreImageChanged==false" :src="repreImageRead(select.repreImage)" class="img-profile">
          <div v-else class="img-profile placeholder">변경을 눌러 대표 이미지 변경을 적용해주세요</div>
        </div>
        <v-btn @click="fileUploadSend(); repreImageChanged=true;" depressed style="margin-top: -10px; margin-bottom: 15px;">
          대표 이미지 업로드
        </v-btn>
        <v-file-input type="file" id="fileUpload" @change="handleFile($event)" style="display: none;"></v-file-input>

        <v-row>
          <v-col>
            <v-text-field v-model="select.nick" label="닉네임"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="select.name" label="이름" disabled></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="form">
            <p class="label">본인 인증</p>
            <v-btn depressed disabled v-if="select.userVerify == false" @click="toggleDialogContact()">
              전화번호로 인증
            </v-btn>
            <!-- <v-chip v-else class="icon-vertify" color="blue lighten-5" text-color="blue lighten-1">
              <v-avatar left>
                <v-icon>mdi-checkbox-marked-circle</v-icon>
              </v-avatar>
              인증됨
            </v-chip> -->
          </v-col>
        </v-row>

        <v-row>
          <v-col class="form">
            <p class="label" style="margin-bottom: 15px!important;">소개</p>
            <v-textarea solo v-model="select.bio" label="이곳에 본문을 작성해주세요" rows="4" class="textarea"></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <!-- <v-text-field v-model="select.birth" placeholder="비공개" label="출생년도"></v-text-field> -->
            <v-select v-model="select.birth" :items="list.age" attach clearable label="출생년도" placeholder="비공개"></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="select.job" label="직업" placeholder="비공개" ></v-text-field>
            <!-- <v-select :items="list." filled label="Filled style"></v-select> -->
          </v-col>
        </v-row>

        <v-row class="ele-last">
          <v-col>
            <v-select v-model="select.sex" :items="list.sex" attach clearable label="성별" placeholder="비공개"></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field v-model="select.contact.email" label="이메일" placeholder="example@contact.com"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="select.contact.kakaoTalk" label="카카오톡" placeholder="example-id"></v-text-field>
          </v-col>
        </v-row>

        <v-btn @click="profileEditSend()" depressed :disabled="!submitAble">
          변경
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
  import globalMethods from '~/mixins/global.js';
  import imageUpload from '~/mixins/upload.js';
  import qs from 'qs'
  Vue.use(Vuecookies);

  export default {
    mixins: [
      globalMethods,
      imageUpload
    ],
    created() {},
    data: () => ({
      submitAble: false,
      submitStack: 0,
      select: {
        key: null,
        repreImage: null,
        nick: null,
        name: null,
        userVerify: true,
        bio: null,
        birth: null,
        job: null,
        sex: null,
        contact: {
          email: null,
          kakaoTalk: null,
        }
      },
      list: {
        sex: [
          '남성',
          '여성',
          // '비공개'
        ],
        age: []
      },
      repreImageChanged: false
    }),
    async mounted() {
      // birth list calc
      for (let i = 1950; i <= 2020; i++) {
        this.list.age.push(i)
      }
      // this.list.age[this.list.age.length] = '비공개';
      this.list.age.reverse();

      // profile read
      this.profileRead();
    },
    watch: {
      select: {
        deep: true,
        handler() {
          this.submitStack++;
          if (this.submitStack>1) {
            this.submitAble = true;
          }
        }
      },
      'uploadFormData'(to, from) {
        this.submitStack++;
        if (this.submitStack>1) {
          this.submitAble = true;
        }
      },
    },
    methods: {
      async profileRead() {
        try {
          const res = await this.$axios.$post('/api/profile/read', {}, {headers: {token: this.$cookies.get('token')}});
          this.select = {
            key: res.data.key,
            repreImage: res.data.repreImage,
            nick: res.data.nickname,
            name: res.data.name,
            userVerify: res.data.vertify,
            bio: res.data.bio,
            birth: parseInt(res.data.birth),
            job: res.data.job,
            sex: res.data.sex,
            contact: {
              email: res.data.contactMail,
              kakaoTalk: res.data.contactKakao
            }
          }
        }
        catch (err) { console.log(err); }
      },
      async profileEditSend() {
        try {
          await this.$axios.$post('/api/profile/update', {
            nickname: this.select.nick,
            vertify: this.select.userVerify,
            bio: this.select.bio,
            birth: this.select.birth,
            job: this.select.job,
            sex: this.select.sex,
            contact_email: this.select.contact.email,
            contact_kakao: this.select.contact.kakaoTalk
          }, 
          {headers: {token: this.$cookies.get('token')}});

          this.imageUploadSend(this.select.key, 'auth', 'repre');

          this.profileRead();
          this.submitStack = 0;
          this.submitAble = false;
        }
        catch (err) { alert(err.response.data.message) }
      },
      toggleDialogContact() {
        this.$store.commit('dialog/toggleVerifyDialogActive');
      },
      fileUploadSend() {
        document.getElementById("fileUpload").click();
      }
    }
  }

</script>

<style scoped lang="scss">
  @import '~assets/css/setting.css';
  @import '~assets/css/mobile/setting.css';

  #wrap .content-wrap .content-sub {
    padding-bottom: 15px;
  }

</style>
