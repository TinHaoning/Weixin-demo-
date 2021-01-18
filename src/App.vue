<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Tab from '@/components/Tab.vue'

export default {
  name: 'App',
  components: {
    Header,
    Tab,
	}
}
</script>

<style>
body{
  margin: 0;
  height: 100vh;
}
h1, h2, h3, h4, h5{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color: #fff;
  font-size: 16px;
}
.container{
  width: 1370px;
  margin: 0 auto;
}
</style>
