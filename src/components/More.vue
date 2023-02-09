<template>
  <div id="More">
    <nav>
      <h1>Экономический квест</h1>
      <h3>Отделение экономических и юридических наук ЕИ КФУ</h3>
      <img src="@/assets/line.png" alt="logo" id="logo" @click="home">
    </nav>
    <center><h2>Список направлений</h2></center>
    <ul>
      <li v-for="item in items" @click="game(item.game)">{{item.name}}</li>
      <li @click="createTask">Добавить задания</li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'More',
  props: ['progress'],
  data(){
  	return{
      items: []
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
    let keys = Object.keys(Tasks);
    for(var i = 0; i < keys.length; i++){
      this.items.push({"name": Tasks[keys[i]]["title"], "game": keys[i]})
    }
    this.items.push({"name": "Добавить задания", "game": "add"})
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