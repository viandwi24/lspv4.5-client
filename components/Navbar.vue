<template>
  <div ref="navbar" class="
    top-0 z-40 w-full backdrop-blur flex-none
    ransition-colors duration-500 lg:z-50
    border-b border-gray-900/10 dark:border-gray-50/[0.2]
    supports-backdrop-blur:bg-white/60 bg-transparent
    "
  >
    <div class="max-w-8xl mx-auto">
      <div class="py-4 lg:px-8 mx-4 lg:mx-0">
        <div class="relative flex items-center">
          <!-- title -->
          <NuxtLink tag="a" class="mr-3 flex-none overflow-hidden md:w-auto font-bold text-gray-900 dark:text-gray-200" :to="{ name: 'index' }">
            <span class="sr-only">home</span>
            <span>{{ app.name }} v{{ app.version }} - {{ app.institution }}</span>
          </NuxtLink>
          <!-- menu -->
          <div class="relative hidden lg:flex items-center ml-auto">
            <nav class="text-sm leading-6 font-semibold text-gray-700 dark:text-gray-200">
              <ul class="flex items-center space-x-8">
                <li><Anchor class="hover:text-blue-600 dark:hover:text-blue-500 bg-red-500" :to="{ name: 'masuk' }">Masuk</Anchor></li>
                <li><Button text="Daftar" size="xs" :to="{ name: 'daftar' }" class="font-extrabold" /></li>
              </ul>
            </nav>
            <!-- theme toggle -->
            <div class="flex items-center border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]">
              <Listbox v-model="selectedTheme">
                <ListboxLabel class="sr-only">Theme</ListboxLabel>
                <ListboxButton type="button">
                  <span class="flex justify-center items-center dark:hidden">
                    <IconFeather size="18" type="sun" />
                  </span>
                  <span class="justify-center items-center hidden dark:flex">
                    <IconFeather size="18" type="moon" />
                  </span>
                </ListboxButton>
                <ListboxOptions class="p-1 absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300">
                  <ListboxOption 
                    v-for="theme in [
                      { key: 'light', text: 'Light', icon: 'sun' },
                      { key: 'dark', text: 'Dark', icon: 'moon' },
                      { key: 'system', text: 'System', icon: 'smartphone' },
                    ]"
                    :key="theme.key"
                    :value="theme.key"
                    :class="{ 
                      'py-2 px-2 flex items-center cursor-pointer': true,
                      'text-sky-500 bg-gray-50 dark:bg-gray-600/30': (selectedTheme === theme.key),
                    }"
                  >
                    <IconFeather size="18" :type="theme.icon" class="mr-2" /> {{ theme.text }}
                  </ListboxOption>
                </ListboxOptions>
              </Listbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
export default defineComponent({
  components: {
    Listbox, ListboxButton, ListboxLabel, ListboxOptions, ListboxOption,
  },
  setup() {
    const app = {
      name: 'LSP APP',
      version: '4.5',
      institution: 'SMKN 1 MOJOKERTO',
    }
    const selectedTheme = useState('theme')
    const navbar = ref(null)

    onMounted(() => {
      stickyOnScroll(navbar.value as HTMLElement, 0)
    })    

    return {
      app,
      selectedTheme,
      navbar,
    }
  }
})

function stickyOnScroll(el: HTMLElement, offset: number) {
  const onScroll = (e) => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop > offset) {
      el.classList.add('sticky')
    } else {
      el.classList.remove('sticky')
    }
  }


  // lifecycle hooks
  window.addEventListener('scroll', onScroll)
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    console.log("123")
  })
}
</script>