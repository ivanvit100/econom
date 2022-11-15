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
  background-color: rgb(31, 89, 160);
}
</style>
