<template>
  <!-- layout  -->
  <div id="grid">
    <AppList />
    <UserData user-name="Teeheero" />
    <AppNav />
    <AppData />
  </div>
</template>

<script>
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
