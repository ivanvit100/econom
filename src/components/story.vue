<template>
  <div id="Story">
    <div class="story"></div>
    <div class="text">{{text}}</div>
    <div id="next" @click="next">&#10230;</div>
    <div id="home" @click="home">&#10229;</div>
  </div>
</template>

<script>
export default{
  name: 'Story',
  data(){
    return{
      counter: 0,
      txt: 'Тёмную улицу небольшого городка едва обволакивал тусклый лунный свет. Двое мужчин, одетых достаточно невзрачно, непринужденно обсуждали свой план. Из их шепота трудно было уловить хоть что-то, но фразы о падении рубля были слышны отчетливо словно раскаты грома.',
      text: ''
    }
  },
  methods:{
    next: function(){
      this.$router.push('Start')
    },
    home: function(){
      this.$router.push('Main')
    },
    writer: function(){
      if(this.counter < this.txt.length){
        this.text += this.txt.charAt(this.counter);
        this.counter++;
        setTimeout(this.writer, 50);
      }
    }
  },
  mounted(){
    this.writer();
  }
}
</script>

<style> 
#Story{
  display: grid;
  grid-template-rows: calc(100vh - 150px) 150px;
}
.story{
  height: 100%;
  width: 100%;
  background: url("../assets/story1.png") center top no-repeat;
  background-size: cover;
}
.text{
  font-family: 'Play', sans-serif;
  padding: 25px 220px 25px 25px;
  font-size: 18px;
  color: white;
  background-color: black;
  border: 5px solid white;
}
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
  -webkit-box-shadow: 2px 2px 4px 2px rgba(99, 75, 27, 0.2); 
  -moz-box-shadow: 2px 2px 4px 2px rgba(99, 75, 27, 0.2); 
  box-shadow: 2px 2px 4px 2px rgba(99, 75, 27, 0.2);
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