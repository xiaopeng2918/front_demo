<template>
  <h1>{{ title }}</h1>
  <div>message: {{ messageRef }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRef } from 'vue'

export default defineComponent({
  name: 'ToRef',
  setup() {
    const title = ref('yxp2918')
    const state = reactive({
      message: 'Hello, Vue3!',
      count: 0
    })
    const messageRef = toRef(state, 'message')
    return {
      title,
      state,
      messageRef
    }
  }
})
</script>

<style scoped>
</style>