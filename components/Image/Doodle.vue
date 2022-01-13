<template>
  <div ref="parent"></div>
</template>

<script lang="ts">
import * as Doodles from '~/assets/doodles'
import { createApp } from 'vue'

export default defineComponent({
  props: {
    img: {
      type: String,
      default: '',
    }
  },
  setup(props) {
    const parent = ref(null)
    const theme = useState('theme')

    onMounted(() => {
      const lists = Object.keys(Doodles)
      if (lists.includes(props.img)) {
        const svgData = Doodles[props.img]
        const parentEl = parent.value as HTMLDivElement
        const svgEl = document.createElement('div')
        svgEl.innerHTML = svgData
        svgEl.querySelector('svg').setAttribute('ref', 'svg')

        const fillColor = ref('#f3f4f6')

        const refreshColor = () => {
          try {
            if (document.body.parentElement.classList.contains("dark")) {
              return fillColor.value = '#f3f4f6'
            }
          } catch (e) {
          }
          return fillColor.value = '#1f2937'
        }
        const applyColor = () => {
          const container = svgEl.querySelector('g')
          container.setAttribute('fill', 'transparent')
          const e = container.querySelector('g').childNodes[2] as SVGElement
          if (e && e.getAttribute('fill')) {
            e.setAttribute('fill', fillColor.value)
          }
        }
        
        watch(theme, refreshColor)
        watch(fillColor, applyColor)

        refreshColor()
        applyColor()
        parent.value.appendChild(svgEl)
      }
    })

    return {
      parent,
    }
  }
})
</script>