<template>
  <h1>{{ title }}</h1>
</template>

<script lang="ts">
import { defineComponent, onActivated, onDeactivated, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'Activated',
  setup() {
    const title = ref('哈哈哈')
    onMounted(() => {
      console.log("组件已经被挂载")
      title.value = 'yxp29118'
    })
    onActivated(() => {
      console.log('Activated组件被激活')
    })
    onDeactivated(() => {
      console.log('Activated组件被停用')
    })
    return {
      title
    }
  }
})
</script>

<style scoped>
</style>