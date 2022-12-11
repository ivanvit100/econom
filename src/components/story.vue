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
      txt: 'Тёмную улицу небольшого городка едва обволакивал тусклый лунный свет. Двое мужчин, одетых достаточно невзрачно, непринужденно обсуждали свой план. Из их шепота трудно было уловить хоть что-то, но фразы о падении рубля были слышны отчетливо словно раскаты грома. ',
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
    document.querySelector("audio").volume = 0.3;
    document.querySelector("audio").play();
  }
}
</script>