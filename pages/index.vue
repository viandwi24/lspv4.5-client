<template>
  <div class="flex-1 flex max-w-8xl mx-auto h-full justify-center items-center pb-20">
    <div class="flex flex-col">
      <div class="text-center">
        <span
          v-for="item in ['ensure', 'your', 'competency']"
          class="text-hero drop-shadow-xl text-5xl lg:text-9xl block font-bold uppercase"
          :key="item"
        >
          {{ item }}
        </span>
      </div>
      <div class="flex space-x-4 justify-center mt-10">
        <Button size="lg" text="Masuk" :to="{ name: 'masuk' }" />
        <Button size="lg" text="Daftar" type="secondary" :to="{ name: 'daftar' }" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  layout: 'page',
  setup() {
    useMeta({
      title: 'LSP APP v4.5 - SMKN 1 MOJOKERTO',
    })
  }
})
</script>

<style lang="scss">
.text-hero {
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg, theme('colors.blue.500'), theme('colors.purple.500'));
  position: relative;
  z-index: 1;
  -webkit-animation: animated-gradient-text_fade-foreground-1__efWVr 8s infinite;
  animation: animated-gradient-text_fade-foreground-1__efWVr 8s infinite;
}
@-webkit-keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(360deg);
  }
}
</style>