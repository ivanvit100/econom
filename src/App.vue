<template>
  <div id="app">
    <router-view :progress="progress" @update="update"/>
  </div>
</template>

<script>
export default{
  name: 'App',
  data(){
    return{
      progress: 5
    }
  },
  methods:{
    update: function(data){
      this.progress = data.progress;
    }
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
#app{
  background: rgb(63,63,63);
  background: linear-gradient(180deg, rgba(63,63,63,1) 0%, rgba(23,23,23,1) 100%);
  height: 100vh
}
#logo2{
  height: 100px;
  position: absolute;
  right: 10%;
  z-index: 2;
}
</style>
