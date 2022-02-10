<template>
  <div class="app-info"></div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.app-info {
  grid-area: ai;
  display: flex;
  flex-direction: column;
  padding: 3px 6px 10px 16px;
  background-color: #2f3136;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(32, 34, 37);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #36393f;
  }
}
</style>