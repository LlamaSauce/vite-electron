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
  background-color: #2f3136;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(32, 34, 37);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #2f3136;
  }
}
</style>