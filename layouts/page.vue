<template>
  <div>
    <slot name="app-before" />
    <div class="flex flex-col min-h-screen">
      <Navbar />
      <div class="flex-1 w-full flex flex-col">
        <slot />
      </div>
      <Footer />
    </div>
    <slot name="app-after" />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    useTheme(true)
  }
})
</script>