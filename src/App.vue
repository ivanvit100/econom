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
  background: rgb(63,63,63);
  background: linear-gradient(180deg, rgba(63,63,63,1) 0%, rgba(23,23,23,1) 100%);
  max-height: 100vh;
  min-height: 600px;
  min-width: 1100px;
}
#app{
  height: 100vh;
  background: linear-gradient(45deg,rgba(0, 0, 0, 0) 48%,rgba(0, 0, 0, 0.13) 50%,rgba(0, 0, 0, 0) 52%),linear-gradient(-45deg,rgba(0, 0, 0, 0) 48%,rgba(0, 0, 0, 0.13) 50%,rgba(0, 0, 0, 0) 52%);
  background-size: 1.23em 1.23em;
}
#logo2{
  height: 100px;
  position: absolute;
  right: 10%;
  z-index: 2;
}
#logo{
  margin-left: auto;
  margin-right: 0;
}
#logo, #logo2{
  -webkit-box-shadow: 11px -9px 8px 0px rgba(28, 0, 0, 0.2); 
  -moz-box-shadow: 11px -9px 8px 0px rgba(28, 0, 0, 0.2); 
  box-shadow: 11px -9px 8px 0px rgba(28, 0, 0, 0.2);
  z-index: 3;
}
</style>
