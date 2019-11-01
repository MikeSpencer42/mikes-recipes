<template>
  <div id="app">
      <AppHeader></AppHeader>
      <!-- TODO: toggle between list and detail -->
      <AppList></AppList>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppList from './components/AppList.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppList
  }
}
</script>

<style lang="scss">
#app {

}
</style>
