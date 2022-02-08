<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">.col</div>
      <div class="col">.col</div>
    </div>

    <div class="row">
      <div class="col">.col</div>
      <div class="col">.col</div>
      <div class="col">.col</div>
      <div class="col">.col</div>
    </div>
  </div>
</template>

<style lang="sass" scoped>

.row > div
  padding: 10px 15px
  background: rgba(36, 36, 36,.15)
  border: 1px solid rgba(56, 56, 56.2)
.row + .row
  margin-top: 1rem
</style>

<!-- <route lang="yaml">
meta:
  layout: home
</route> -->