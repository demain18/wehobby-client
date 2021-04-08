<template>
  <div class="text-center">
    <v-dialog v-model="dialog" @click:outside="toggleDialog()" width="400">
      <v-card>
        <v-card-title class="headline">
          도시 선택
        </v-card-title>
        <v-card-text>

          <p>활동하고자 하는 도시(시,도)를 선택해주세요.</p>
          <v-row align="center">
            <v-col sm="">
              <v-select :items="items" v-model="select" item-text="name" item-value="key" dense></v-select>
            </v-col>
            <!-- <v-col class="d-flex" sm="">
              <v-select :items="itemDetail" label="국내 시도" dense></v-select>
            </v-col> -->
          </v-row>

        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="toggleDialog()">
            닫기
          </v-btn>
          <v-btn color="primary" text @click="cityCookieUpdate()">
            변경
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import Vuecookies from 'vue-cookies';
  import mapGetters from "vuex";
  Vue.use(Vuecookies);

  export default {
    computed: { // watch속성이 있어 값이 유동적으로 변화함
      dialog() {
        return this.$store.state.dialog.cityDialogActive;
      }
    },
    data: () => ({
      // dialog: true,
      select : 0,
      items: [],
    }),
    async mounted() {
      // citys read
      try {
        const res = await axios.get('/api/info/citys');
        this.items = res.data.data.citys;
        this.items.unshift({
          key: 0,
          name: '선택안함(전국)'
        })
      }
      catch (err) { console.log(err.response.data.message); }
      // city key read
      this.select = parseInt(this.$cookies.get('city'));
    },
    methods: {
      toggleDialog() {
        this.$store.commit('dialog/toggleCityDialogActive');
      },
      cityCookieUpdate() {
        if (this.$cookies.isKey('city')) {
          this.$cookies.remove('city');
          this.$cookies.set('city', this.select, '7d');
        } else {
          this.$cookies.set('city', this.select, '7d');
        }
        window.location.href = "/";
      }
    },
  }
</script>

<style lang="scss">
  @import '~assets/css/common.scss';

</style>
