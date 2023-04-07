<template>
  <h1>{{ title }}</h1>
  <div>显示父组件的抛出的数组{{ state?.arr }}</div>
  <button @click="incrementFatherCount">父组件count + 1</button>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from 'vue'

export default defineComponent({
  name: 'Inject',
  setup() {
    const title = ref('yxp2918')
    const state = inject<State>('state')
    function incrementFatherCount(){
      (state as State).count++
    }
    return {
      title,
      state,
      incrementFatherCount
    }
  }
})
</script>

<style scoped>
</style>