<template>
  <div class="container">
    <AppButton isHome />
    <div class="separator"></div>
    <AppButton />
    <AppButton />
  </div>
</template>

<script>
import AppButton from './app-button.vue'

export default {
  components: {
    AppButton
  }
}
</script>

<style lang="scss" scoped>
.container {
  grid-area: al;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(32, 34, 37);
  padding: 11px 0;
  max-height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
.separator {
  width: 32px;
  margin-bottom: 8px;
  border-bottom: solid 2px #8a8c90;
}
</style>