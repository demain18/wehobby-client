<template>
  <div>
    <Gnb />
    <div id="wrap">
      <SettingSnb />
      <div class="content-wrap">
        <h1 class="content-title">프로필 수정</h1>
        <p class="content-sub">프로필에서 보여줄 정보를 수정하세요</p>

        <div class="form form-profile">
          <p class="label">대표 사진</p>
          <img src="~assets/img/repre_1.jpg" class="img-profile">
        </div>

        <v-row>
          <v-col>
            <v-text-field v-model="select.nick" label="닉네임"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="select.name" label="이름" disabled></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="select.email" label="이메일" disabled></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="form">
            <p class="label">본인 인증</p>
            <v-btn depressed v-if="select.userVertify == false">
              전화번호로 인증
            </v-btn>
            <div class="alert" v-else>
              <v-icon medium class="icon">
                mdi-check-circle
              </v-icon>
              본인인증이 완료됬습니다
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-textarea solo v-model="select.bio" label="이곳에 본문을 작성해주세요" rows="4" class="textarea"></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="select.age" placeholder="비공개" label="나이"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="select.job" placeholder="비공개" label="직업"></v-text-field>
          </v-col>
        </v-row>

        <!-- <v-alert dense text type="success">
          I'm a dense alert with the <strong>text</strong> prop and a <strong>type</strong> of success
        </v-alert> -->

        <v-row class="ele-last">
          <v-col>
            <v-text-field v-model="select.sex" placeholder="비공개" label="성별"></v-text-field>
          </v-col>
        </v-row>

        <v-btn depressed :disabled="!submitAble">
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
  // 변경사항 있을경우 변경 버튼 primary로 변경
  export default {
    data: () => ({
      submitAble: false,
      select: {
        image: null,
        nick: '백산',
        name: '김명준',
        email: '100mountain@gmail.com',
        userVertify: true,
        bio: '화려한것들과 공부하는것을 좋아하는, 약간은 모순된 취미성향을 가지고 있는 사람입니다. 비슷한 취미를 가진 분들끼리 만나 즐거운 시간을 보냈으면 합니다!',
        age: 20,
        job: '대학생/기타리스트',
        sex: '남자'
      },
      lists: {
        sex: [
          '남성',
          '여성',
          '밝히지 않음'
        ]
      }
    })
  }

</script>

<style scoped lang="scss">
  @import '~assets/css/setting.css';
  @import '~assets/css/mobile/setting.css';

  #wrap .content-wrap .content-sub {
    padding-bottom: 15px;
  }
</style>
