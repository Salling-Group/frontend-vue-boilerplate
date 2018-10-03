<template>
  <div id="app">
    <div class="container">
      <the-navigation></the-navigation>
      <router-view/>
    </div>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
  },
};
</script>

<style lang="scss">
#app {
  padding: 2rem 0;

  .navbar {
    margin-bottom: 2rem;
  }
}
</style>
