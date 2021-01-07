<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline">
          연락하기
        </v-card-title>

        <v-card-text>
          <p style="margin-bottom: 15px!important">연락 수단을 선택해주세요.</p>
          <!-- <ul class="dialog-list">
            <li>
              <nuxt-link to="">메일</nuxt-link>
            </li>
            <li>카카오톡</li>
            <li>라인</li>
          </ul> -->
          <v-row justify="center">
            <v-expansion-panels accordion>
              <v-expansion-panel v-for="(item,i) in items" :key="i">
                <v-expansion-panel-header>
                  <!-- <v-icon small v-text="item.icon" class="header-icon"></v-icon> -->
                  <!-- {{ item.title }} -->
                  {{ item.title }}
                  <template v-slot:actions>
                    <v-icon color="error" v-text="item.icon" class="icon-dropdown">
                      <!-- mdi-check -->
                    </v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{ item.desc }}
                  <v-btn small icon>
                    <v-icon small dark>
                      mdi-content-copy
                    </v-icon>
                  </v-btn>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            닫기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dialog: true,
      items: [{
          icon: 'mdi-email',
          title: '이메일',
          desc: 'hbfs0825@gmail.com'
        },
        {
          icon: 'mdi-chat',
          title: '카카오톡',
          desc: 'tallio'
        },
        {
          icon: 'mdi-message',
          title: '라인',
          desc: 'myline1234'
        }
      ]
    }),
  }

</script>

<style lang="scss">
  @import '~assets/css/common.scss';

  .icon-dropdown {
    position: absolute !important;
    right: 20px !important;
    top: 12px !important;
  }

</style>
