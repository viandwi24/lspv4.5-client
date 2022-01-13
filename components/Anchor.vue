<template>
  <div class="inline-block">
    <a v-if="typeof to === 'undefined'" :href="href" :class="styles">
      <slot />
    </a>
    <NuxtLink tag="a" :to="to" :class="styles">
      <slot />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    href: {
      type: String,
      default: '#'
    },
    to: {
      type: [String, Object],
      default: undefined
    }
  },
  setup(props) {
    const styles = "transition-all duration-300 hover:text-white hover:underline"
    const href = toRef(props, 'href')
    const to = toRef(props, 'to')
    return {
      href,
      to,
      styles,
    }
  }
})
</script>