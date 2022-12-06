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
      txt: 'Курс рубля поднят, речь сказана - сюжет завершен. Вот и конец этой истории. Спасибо Вам за то, что стали её частью. Вы справились со своей целью и смогли поднять рубль с колен, но лишь в моей игре. Хотите ли Вы продолжить заниматься этим уже в реальной жизни? Если Ваш ответ "да", то двери отделения экономики ЕИ КФУ всегда открыты для Вас! ',
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