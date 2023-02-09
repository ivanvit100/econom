<template>
<div id="game">
  <div id="ans" v-if="show" @click="close" class="animate__animated animate__fadeIn">
    <center><div id="ansBlock" class="animate__animated animate__backInDown"><h2 style="color: orange">Ответ: </h2><p v-html="ans"></p></div></center>
  </div>
	<nav>
    <h1>Экономический квест</h1>
    <h3>Отделение экономических и юридических наук ЕИ КФУ</h3>
    <img src="@/assets/line.png" alt="logo" id="logo" @click="home">
  </nav>
	<div class="task">
    <div class="task">
      <div id="wrapTask">
        <center><h2>{{title}}</h2></center>
        <span id="list">{{list}}/{{count}}</span>
        <p v-html="text"></p>
        <button @click="answer(game, 0)">?</button>
      </div>
    </div>
  </div>
  <div id="next" @click="next">&#10230;</div>
  <div id="home" @click="home">&#10229;</div>
</div>
</template>

<script>
export default{
  name: 'Game',
  data(){
  	return{
      list: 1,
      count: 1,
      ans: "",
      title: "",
      text: "",
      show: false
  	}
  },
  computed:{
  	game: function(){
  		return this.$route.params.gameId
  	},
  },
  methods:{
    home: function(){
      this.$router.push('More')
    },
    next: function(id){
      if(this.list < Object.keys(Tasks[this.game]["tasks"])){
        this.list += 1;
        this.text = Tasks[this.game]["tasks"][this.list]["text"];
        this.ans = Tasks[this.game]["tasks"][this.list]["answer"];
      }
    },
    answer: function(id, num){
      //this.ans = this.answers[id][num];
      this.show = true;
    },
    close: function(){
      this.show = false;
    }
  },
  mounted(){
    this.title = Tasks[this.game]["title"];
    this.text = Tasks[this.game]["tasks"][this.list]["text"];
    this.ans = Tasks[this.game]["tasks"][this.list]["answer"];
    this.count = Object.keys(Tasks[this.game]["tasks"]).length;
  }
}
</script>

<style scoped>
#ans{
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  z-index: 99;
  top: 0;
  left: 0;
}
#ansBlock{
  width: 60vw;
  height: 60vh;
  text-align: left;
  transform: translateY(25%);
  color: white;
}
button{
  position: absolute;
  top: 35px;
  right: 35px;
  border-radius: 10px;
  border: none;
  width: 30px;
  height: 30px;
  font-size: 18px;
  background-color: orange;
  color: white;
}
button:hover{
  background-color: #f77d24;
  top: 37px;
}
#list{
  position: absolute;
  top: 38px;
  left: 38px;
}
#wrapTask{
  text-align: left;
  position: absolute;
  height: 60vh;
  width: 80vw;
  top: 50%;
  left: 50%;
  transform: translate(-8%, 0%);
}
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