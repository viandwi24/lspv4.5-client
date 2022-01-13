<template>
  <div class="mb-4">
    <label v-if="label" class="block text-sm font-bold mb-2" :for="id">
      <slot name="label">{{ label }}</slot>
    </label>
    <input
      class="
        appearance-none border  rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline
        text-gray-800 dark:text-gray-100
        border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900
      "
      :id="id"
      :type="type"
      :placeholder="label"
    >
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    label: {
      type: String,
    },
    id: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    }
  },
  setup(props) {
    const id = ref(props.id)

    if (!id.value) id.value = `${props.label.toLowerCase().replace(' ', '-')}`

    return {
      id,
    }
  }
})
</script>