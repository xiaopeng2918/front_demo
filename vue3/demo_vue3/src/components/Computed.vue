<template>
  <h1>{{ title }}</h1>
  <div>
    <span> num1:{{ state.num1 }} </span>
    <span> num2: {{ state.num2 }}</span>
    <span style="margin-left: 40px;">sum=num1 + num2： {{ sum }}</span>
    <div>
      <button @click="incrementNum1">num1 + 1</button>
      <button @click="incrementNum2">num2 + 1</button>
      <button @click="incrementSum">sum + 1</button>
      <button @click="decrementSum">sum - 1</button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  name: 'Computed',
  setup() {
    const title = ref('yxp2918')
    const state = reactive({
      num1: 0,
      num2: 0
    })
    const sum = computed({
      get(){
        return state.num1 + state.num2;
      },
      set(value:number){
        state.num2 = value - state.num1;
      }
    })
    function incrementNum1() {
      state.num1++
    }
    function incrementNum2() {
      state.num2++
    }
    function decrementSum(){
      sum.value--;
    }
    function incrementSum(){
      sum.value++;
    }
    
    return {
      state,
      title,
      sum,
      incrementNum1,
      incrementNum2,
      decrementSum,
      incrementSum
    }
  }
})
</script>

<style scoped>
</style>