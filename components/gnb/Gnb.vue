<template>
  <div>
    <div id="gnb" data-app>
      <div class="wrap">
        <GnbPc/>
        <GnbMobile/>
      </div>
    </div>
    <GnbDrawer/>
  </div>
</template>

<script>
  export default {
    data: () => ({}),
  }

</script>

<style lang="scss">
  // @import '~assets/css/common.scss';
  
</style>
