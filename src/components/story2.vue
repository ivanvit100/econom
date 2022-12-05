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
  name: 'Story2',
  data(){
    return{
      counter: 0,
      txt: 'Поздравляем, вам успешно удалось восстановить курс рубля! В честь данного события Путин выступает перед народом в кремле. К сожалению, при отправке текста произошла ошибка, и текст исказился. Можете ли вы оказать помощь и исправить его? ',
      text: ''
    }
  },
  methods:{
    next: function(){
      this.$router.push('FinalQuest')
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