<script setup lang="ts">
defineProps<{
  window: IWindowController
}>()
</script>

<template>
  <DesktopWindow v-bind="$props" :content="{ padded: false }">
    <iframe
      class="gridsky-frame"
      src="https://gridsky.pages.dev"
      title="Gridsky"
    />
  </DesktopWindow>
</template>

<style scoped lang="scss">
.gridsky-frame {
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
