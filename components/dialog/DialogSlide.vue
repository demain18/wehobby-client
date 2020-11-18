<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="800">
      <!-- <v-card> -->
        <!-- <template> -->
          <v-carousel height="600">
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
          </v-carousel>
        <!-- </template> -->
      <!-- </v-card> -->
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dialog: true,
      items: [
        {
          src: 'https://sparklejunserver.web.app/upload/hosting/dummy/1.jpg',
        },
        {
          src: 'https://sparklejunserver.web.app/upload/hosting/dummy/2.jpg',
        },
        {
          src: 'https://sparklejunserver.web.app/upload/hosting/dummy/3.jpg',
        },
        {
          src: 'https://sparklejunserver.web.app/upload/hosting/dummy/4.jpg',
        },
      ]
    }),
  }

</script>

<style lang="scss">
  @import '~assets/css/common.scss';

  .v-window__next {
    right: 0px;
    // top: calc(50% - 20px);
  }

  .v-carousel__controls {
    background: rgba(0, 0, 0, 0);
  }

</style>
