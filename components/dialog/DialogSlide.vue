<template>
  <div class="text-center">
    <v-dialog v-model="dialog" @click:outside="toggleDialog()" width="800">

      <v-carousel v-model="index" height="600">
        <v-carousel-item v-for="(item, index) in slide" :key="index" :src="item"></v-carousel-item>
      </v-carousel>

    </v-dialog>
  </div>
</template>

<script>
  export default {
    computed: {
      dialog() {
        return this.$store.state.dialog.slideDialogActive;
      },
      slide() {
        return this.$store.state.dialog.data.slide.list;
      },
      index() {
        return this.$store.state.dialog.data.slide.index;
      },
    },
    data: () => ({
      // dialog: false,
    }),
    methods: {
      toggleDialog() {
        this.$store.commit('dialog/toggleSlideDialogActive');
      }
    }
  }

</script>

<style lang="scss">
  @import '~assets/css/common.scss';

  .v-window__next {
    right: 0px;
  }

  .v-carousel__controls {
    background: rgba(0, 0, 0, 0);
  }
  
  .v-dialog {
    background-color: rgba(0, 0, 0, 0.411);
  }

  .v-image__image--cover {
    background-size: contain!important;
  }

</style>
