<template>
<div id="game">
	<nav>
    	<h1>Конкурсы рубля</h1>
    	<h3>Факультет экономики ЕИ КФУ</h3>
    	<img src="@/assets/line.png" alt="logo" id="logo" @click="home">
    </nav>
	<div class="task">{{game}}</div>
</div>
</template>

<script>
export default{
  name: 'Game',
  data(){
  	return{
  	}
  },
  computed:{
  	game: function(){
  		return this.$route.params.gameId
  	}
  },
  methods:{
    home: function(){
      this.$router.push('Main')
    },
    /*game: function(id){
      this.$router.push({name: 'Games', params: {gameId: id}})
    }*/
  },
  mounted(){
  }
}
</script>

<style scoped>
h1, h3{
  margin-bottom: auto;
  margin-top: auto;
  font-family: 'Roboto Slab', serif;
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

<style>
.task{
	text-align: center;
 	color: white;
}
</style>