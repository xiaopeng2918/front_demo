<template>
    <h1>{{ title }}</h1>
    <h3>{{ count }}</h3>
    <h3>countCopt: {{ countCopy }}</h3>
    <button @click="incrementStoreCount">store中的count+1</button>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'UseStore',
  setup() {
  const title = ref('UseStore') 
  const store = useStore()
  const count = computed(() => {
    return store.state.count
  })
  const countCopy = computed(() => {
    return store.state.count
  })
  function incrementStoreCount(){
    store.commit('increment')
  }
    return {
      title,
      count,
      incrementStoreCount,
      countCopy
    };
  },
});
</script>

<style scoped>

</style>