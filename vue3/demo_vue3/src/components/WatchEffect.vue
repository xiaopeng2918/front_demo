<template>
    <h1>{{ title }}</h1>
    <div>
      firstName: <input type="text" v-model="state.firstName">
      lastName: <input type="text" v-model="state.lastName">
    </div>
    <div>fullName: {{ state.fullName }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watchEffect } from 'vue';

export default defineComponent({
  name: 'WatchEffect',
  setup() {
  const title = ref('yxp2918') 
  const state = reactive({
    firstName: '',
    lastName: '',
    fullName: ''
  })
  watchEffect(() => {
    state.fullName = state.firstName + state.lastName;
  })
    return {
      title,
      state
    };
  },
});
</script>

<style scoped>

</style>