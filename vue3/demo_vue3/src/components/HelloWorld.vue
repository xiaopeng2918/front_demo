<template>
  <h1>{{ state.msg }}</h1>
  <button @click="state.count++">count is: {{ state.count }}</button>
</template>

<script lang="ts">
import { defineComponent, onUpdated, reactive } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const state = reactive({
      count: 0,
      msg: 'helloWorld'
    })
    onUpdated(() => {
      console.log('HelloWorld组件被更新')
    })
    return {
      state
    }
  }
})
</script>
