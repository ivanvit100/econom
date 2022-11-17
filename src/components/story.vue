<template>
  <div id="Story">
    <img src="@/assets/line.png" alt="logo" id="logo2">
    Что-то там, темная улица, ночь, улица, фонарь...<br>
    Короч да, какой-то диалог перед падением рубля
    <div id="next" @click="next">&#10230;</div>
    <div id="home" @click="home">&#10229;</div>
  </div>
</template>

<script>
export default{
  name: 'Story',
  props: ['progress'],
  methods:{
    next: function(){
      this.$router.push('Start')
    },
    home: function(){
      this.$router.push('Main')
    }
  }
}
</script>

<style> 
#next, #home{
  background-color: orange;
  position: fixed;
  bottom: 30px;
  border-radius: 90px;
  color: white;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 25px;
  z-index: 2;
}
#next:hover, #home:hover{
  background-color: #f77d24;
  bottom: 28px;
}
#next{
  right: 30px;
}
#home{
  right: 120px;
}
</style>