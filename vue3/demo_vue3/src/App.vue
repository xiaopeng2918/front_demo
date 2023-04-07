<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>store中的count {{storeCount}}</div>
  <HelloWorld />
  <div>count：{{ state.count }} {{ state.message }}</div>
  <button @click="increment">点击count+1</button>
  <br />
  <div>counter：{{ counter }}</div>
  <button @click="counter++">点击counter+1</button>
  <br />
  <h3>响应式数组</h3>
  <div>{{ state.arr }}</div>
  <button @click="arrPushElement">给数组加元素5</button>
  <br />
  <h3>onActivated与onDeactivated使用</h3>
  <keep-alive>
    <Activated v-if="state.show" />
  </keep-alive>
  <button @click="toggleShow">组件显示/消失</button>
  <br />
  <h3>computed</h3>
  <Computed />
  <br />
  <h3>watch</h3>
  <Watch />
  <br />
  <h3>watchEffect</h3>
  <WatchEffect />
  <br />
  <h3>ToRef</h3>
  <ToRef />
  <hr />
  <h3>Inject</h3>
  <Inject />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs, provide, computed } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Activated from './components/Activated.vue'
import Computed from './components/Computed.vue'
import Watch from './components/Watch.vue'
import WatchEffect from './components/WatchEffect.vue'
import ToRef from './components/ToRef.vue'
import Inject from './components/Inject.vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Activated,
    Computed,
    Watch,
    WatchEffect,
    ToRef,
    Inject
  },
  setup() {
    const counter = ref(0)
    const store = useStore()
    const storeCount = computed(() => store.state.count)
    const state = reactive({
      count: 0,
      message: 'hello world',
      arr: [1, 2, 3],
      show: true // 控制组件的激活与停用
    })
    provide('state', toRefs(<State>state))
    function increment() {
      state.count++
    }

    function arrPushElement() {
      state.arr.push(5)
    }
    function toggleShow() {
      state.show = !state.show
    }

    onMounted(() => {
      console.log('mounted')
    })
    return {
      state,
      increment,
      counter,
      arrPushElement,
      toggleShow,
      storeCount,
    }
  }
})
</script>
