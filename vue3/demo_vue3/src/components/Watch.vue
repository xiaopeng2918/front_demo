<template>
  <h1>{{ title }}</h1>
  <div>{{ state.num }}</div>
  <button @click="incrementNum">num+1</button>
  <div>
    <label for="input1">firstName</label>
    <input type="text" id="input1" v-model="state.firstName">
  </div>
  <div>
    <label for="input2">lastName</label>
    <input type="text" id="input2" v-model="state.lastName">
  </div>
  <div>fullName: {{state.fullName}}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue'

export default defineComponent({
  name: 'Watch',
  setup() {
    const title = ref('yxp2918')
    const state = reactive({
      num: 0,
      firstName: '',
      lastName: '',
      fullName: ''
    })
    watch(
      () => state.num,
      (newValue, oldValue) => {
        console.log(`num的值由${oldValue}变为了${newValue}`)
      }
    )
    watch(() => [state.firstName, state.lastName], ([firstName, lastName]) =>{
      state.fullName = firstName + lastName;
    })
    function incrementNum() {
      state.num++
    }
    return {
      title,
      state,
      incrementNum
    }
  }
})
</script>

<style scoped>
</style>