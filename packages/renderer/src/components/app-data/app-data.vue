<template>
  <div class="container">
    <div class="grid grid-cols-12 gap-4">
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
      <div>05</div>
      <div>06</div>
      <div>07</div>
      <div>08</div>
      <div>09</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-data-container {
  grid-area: ad;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #36393f;
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