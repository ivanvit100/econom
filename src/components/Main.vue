<template>
  <div id="Main">
    <h1>Факультет экономики ЕИ КФУ</h1>
    <div id="logoContainer">
      <img id="logo" src="@/assets/logo.png" @click="start">
    </div>
  </div>
</template>

<script>
export default{
  name: 'Main',
  methods:{
    start: function(){
      this.$router.push('Start')
    }
  }
}
</script>

<style scoped>
#Main{
  text-align: center;
}
h1{
  color: white;
}
</style>