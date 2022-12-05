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
  name: 'FinalStory',
  data(){
    return{
      counter: 0,
      txt: 'Финальный текст про то, что этотвсё выдумка. ',
      text: ''
    }
  },
  methods:{
    next: function(){
      this.$router.push('Main')
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