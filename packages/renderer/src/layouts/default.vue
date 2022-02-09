<template>
  <!-- layout  -->
  <div id="grid">
    <AppList />
    <UserData />
    <AppNav />
    <AppData />
  </div>
</template>

<script>
import AppList from '../components/app-list/app-list.vue'
import UserData from '../components/user-data/user-data.vue'
import AppNav from '../components/app-nav/app-nav.vue'
import AppData from '../components/app-data/app-data.vue'
export default {
  components: {
    AppList,
    UserData,
    AppNav,
    AppData
  }
}

</script>

<style scoped>
#grid {
  display: grid;
  grid-template-columns: 71px 240px auto;
  grid-template-rows: 46px auto 52px;
  grid-template-areas:
    "al ud ad"
    "al an ad"
    "al an ad";
  height: 100vh;
}
</style>
