<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default{
  name: 'App',
  methods:{
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
  background-color: rgb(31, 89, 160);
}
#logoContainer{
  width: 100%;
}
#logo{
  height: 60vh;
  display: block;
  margin: 15% auto auto auto;
}
</style>
