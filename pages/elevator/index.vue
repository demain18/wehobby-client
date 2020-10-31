<template>
  <div class="container">
    <h1>This is elevator page.</h1>
    <ul class="list">
      <li><nuxt-link to="/">Main</nuxt-link></li>
      <li><nuxt-link to="/board">Board</nuxt-link></li>
      <li><nuxt-link to="/post">Post</nuxt-link></li>
      <li><nuxt-link to="/test">Test</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
  export default {}

</script>

<style>
  .container {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
    padding-top: 80px;
    color: rgb(82, 82, 82);
  }

  .list {
    margin-top: 20px;
  }
</style>
