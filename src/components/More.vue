<template>
  <div id="More">
    <nav>
      <h1>Конкурсы рубля</h1>
      <h3>Факультет экономики ЕИ КФУ</h3>
      <img src="@/assets/line.png" alt="logo" id="logo" @click="home">
    </nav>
    <center><h2>Список направлений</h2></center>
    <ul>
      <li v-for="item in items" @click="game(item.game)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'More',
  props: ['progress'],
  data(){
  	return{
      items: [{'name': 'Инновационная экономика и технологическо предпринимательство', 'game': 'new'}, {'name': 'Менеджмент', 'game': 'manage'}, {'name': 'Макроэкономика', 'game': 'macro'}, {'name': 'Международный бизнес', 'game': 'world'}, {'name': 'История экономических учений', 'game': 'history'}, {'name': 'Экономическая теория', 'game': 'theory'}, {'name': 'Финансы', 'game': 'finance'}, {'name': 'Бухгалтерский управленческий учёт', 'game': 'accounting'}, {'name': 'Деньги, кредит, банк', 'game': 'money'}, {'name': 'Эконометрика', 'game': 'metric'}, {'name': 'Бюджетная система РФ', 'game': 'ru'}, {'name': 'Бизнес-планирование', 'game': 'plan'}, {'name': 'Инвестирование', 'game': 'invest'}, {'name': 'Корпоративные финансы', 'game': 'corp'}, {'name': 'Мировая экономика и международные экономические отношения', 'game': 'worldeco'}, {'name': 'Маркетинг', 'game': 'market'}, {'name': 'Теория бухгалтерского учёта', 'game': 'counttheory'}, {'name': 'Финансовый учёт и отчётность', 'game': 'report'}, {'name': 'Теория экономического анализа', 'game': 'analitic'}, {'name': 'Налоги и налогооблажение организаций', 'game': 'taxes'}, {'name': 'Менеджмент', 'game': 'manage'}, {'name': 'Экономическая безопасность', 'game': 'safety'}, {'name': 'Страхование и страховая деятельность', 'game': 'insurace'}, {'name': 'Финансовый менеджмент', 'game': 'finmanage'}, {'name': 'Экономика инновационной деятельности', 'game': 'neweco'}, {'name': 'Внешнеэкономическая деятельность: особенности учёта', 'game': 'outeco'}, {'name': 'Основы предпринимательства', 'game': 'base'}, {'name': 'Экономика организации', 'game': 'corp'}]
  	}
  },
  methods:{
    home: function(){
      this.$router.push('Main')
    },
    game: function(id){
      this.$router.push({name: 'Game', params: {gameId: id}})
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
li{
  color: white;
  margin: 10px;
}
li:hover{
  font-size: 17px;
  margin: 9px;
}
li:hover::marker{
  color: orange !important;
  font-size: 17px !important;
}
ul{
  background-color: black;
  border: 5px solid white;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
h1, h3, h2{
  margin-bottom: auto;
  margin-top: auto;
  font-family: 'Roboto Slab', serif;
}
h2{
  color: white;
  text-shadow: 2px 2px 0 black, 2px -2px 0 black, -2px 2px 0 black, -2px -2px 0 black, 2px 0px 0 black, 0px 2px 0 rgb(165, 42, 36), -2px 0px 0 black, 0px -2px 0 black, 2px 2px 2px black;
  font-size: 28px;
}
h1{
  color: black;
  transition: top 1.5s;
  text-shadow: 2px 2px 0 rgb(165, 42, 36), 2px -2px 0 rgb(165, 42, 36), -2px 2px 0 rgb(165, 42, 36), -2px -2px 0 rgb(165, 42, 36), 2px 0px 0 rgb(165, 42, 36), 0px 2px 0 rgb(165, 42, 36), -2px 0px 0 rgb(165, 42, 36), 0px -2px 0 rgb(165, 42, 36), 2px 2px 2px rgba(206,11,11,0);
  font-size: 32px;
}
h3{
  font-size: 20px;
}
</style>