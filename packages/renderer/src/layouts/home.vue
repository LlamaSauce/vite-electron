<template>
  <!-- layout  -->
  <div id="grid">
    <AppList />
    <UserData />
    <AppNav />
    <AppData />
    <AppInfo />
  </div>
</template>

<script>
import AppList from '../components/app-list/app-list.vue'
import UserData from '../components/user-data/user-data.vue'
import AppNav from '../components/app-nav/app-nav.vue'
import AppData from '../components/app-data/app-data.vue'
import AppInfo from '../components/app-info/app-info.vue'

export default {
  components: {
    AppList,
    UserData,
    AppNav,
    AppData,
    AppInfo
  }
}

</script>

<style scoped>
#grid {
  display: grid;
  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows: 46px auto 52px;
  grid-template-areas:
    "al ud ad ai"
    "al an ad ai"
    "al an ad ai";
  height: 100vh;
}
</style>
