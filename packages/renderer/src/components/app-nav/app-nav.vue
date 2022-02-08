<template>
  <div class="list-container">
    <p>App Nav Item</p>
    <p>App Nav Item</p>
    <p>App Nav Item</p>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.list-container {
  grid-area: an;
  display: flex;
  flex-direction: column;
  padding: 24px 10px 0 16px;
  background-color: rgb(36, 36, 36);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(56, 56, 56);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgb(36, 36, 36);
  }
}
</style>