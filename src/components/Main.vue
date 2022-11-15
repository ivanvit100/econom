<template>
  <div id="Main">
    <h1>Факультет экономики ЕИ КФУ</h1>
    <div id="logoContainer" class="animate__animated animate__backInLeft animate__delay-1s">
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
  },
}
</script>

<style scoped>
#Main{
  text-align: center;
}
h1{
  color: white;
  transition: top 1.5s;
}
#logoContainer{
  width: 100%;
}
#logo{
  height: 60vh;
  display: block;
  margin: 10% auto auto auto;
  transition: left 1.5s;
}
</style>