<template>
  <div class="container">
    <div class="title">{{ userName }}</div>
    <div class="icon">
      <q-icon name="fas fa-chevron-down" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    serverName: String,
  }
}
</script>

<style scoped>
.container {
  grid-area: ud;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(44, 44, 44);
  padding: 0 20px 0 16px;
  box-shadow: rgba(0, 0, 0, 0.9) 0 1px 0 0;
  cursor: pointer;
}
.title {
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 2px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.icon {
  color: #fff;
  cursor: pointer;
}
</style>