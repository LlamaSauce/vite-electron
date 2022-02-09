<template>
  <div class="app-button" :class="{ 'appButton-isHome': isHome }">
    <img
      v-if="isHome"
      src="https://cdn.discordapp.com/emojis/933545685683433552.webp?size=96&quality=lossless"
      alt="alt"
    />
  </div>
</template>

<script>
export default {
  props: {
    selected: Boolean,
    isHome: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.app-button {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
  border-radius: 50%;
  background-color: rgb(73, 73, 73);
  cursor: pointer;
  position: relative;
  transition: 0.2s;
  &.active,
  &:hover {
    border-radius: 16px;
    background-color: rgb(18, 60, 95);
  }
  img {
    width: 48px;
    height: 48px;
    color: rgb(73, 73, 73);
    border-radius: 50%;
    transition: 0.2s;
    &.active,
    &:hover {
      border-radius: 16px;
      background-color: rgb(18, 60, 95);
    }
  }
}
.appButton-isHome {
  background-color: rgb(73, 73, 73);
}
</style>