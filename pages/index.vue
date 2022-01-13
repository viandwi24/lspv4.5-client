<template>
  <div class="flex-1 flex max-w-8xl mx-auto h-full justify-center items-center pb-20 relative">
    <div class="background-overlay">
      <div class="absolute bottom-0 left-0 md:w-60 lg:w-96 -translate-x-60">
        <ImageDoodle img="ReadingSideDoodle" />
      </div>
      <div class="absolute top-0 right-0 md:w-60 lg:w-96 translate-x-60">
        <ImageDoodle img="DumpingDoodle" />
      </div>
      <div class="absolute top-0 left-0 translate-x-64 translate-y-4 h-14 w-14 rounded-full bg-gray-900 dark:bg-white"></div>
      <div class="absolute hidden md:block top-0 left-0 translate-x-18 translate-y-20 h-28 w-28 rounded-full bg-blue-600 linear-wipe"></div>
      <div class="absolute hidden md:block bottom-0 right-0 -translate-x-4 -translate-y-40 h-16 w-16 rounded bg-purple-500 linear-wipe"></div>
      <div class="absolute bottom-0 right-0 triangle-shape"></div>
    </div>
    <div class="flex flex-col z-10">
      <div class="text-center">
        <span
          v-for="item in ['ensure', 'your', 'competency']"
          class="linear-wipe-text drop-shadow-xl text-5xl lg:text-9xl block font-bold uppercase"
          :key="item"
        >
          {{ item }}
        </span>
      </div>
      <div class="flex space-x-4 justify-center mt-10">
        <Button size="lg" text="Masuk" :to="{ name: 'masuk' }" class="font-extrabold" />
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