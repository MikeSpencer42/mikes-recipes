<template>
  <div id="app">
      <AppHeader></AppHeader>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    HelloWorld
  }
}
</script>

<style lang="scss">
#app {

}
</style>
