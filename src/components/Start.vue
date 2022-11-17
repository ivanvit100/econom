<template>
  <div id="Start">
  	<img src="@/assets/line.png" alt="logo" id="logo2">
    <div class="barcontainer">
    	<div class="bar"></div>
    	<div class="barCont"><img src="@/assets/money.png" alt="Coin" class="coin" style></div>
	</div>
	<div class="task">
		<h1>Помогите рублю подняться!</h1>
		<h2>Литературный конкурс</h2>
		<div id="first">
			<div>На товаре быть должна<br>
			Обязательно
			<input type="text" v-model="first" id="firstInput">
		    </div>
		    <br>
		    <div>Журчат ручьи, промокли ноги<br>
			Весной пора платить
			<input type="text" v-model="second" id="secondInput">
		    </div>
		    <br>
		    <div>Дела пойдут у нас на лад:<br>
			Мы в лучший банк внесли свой
			<input type="text" v-model="third" id="thirdInput">
		    </div>
		    <br>
		    <div>Мебель купили, одежду, посуду<br>
			Брали для этого в банке мы
			<input type="text" v-model="fourth" id="fourthInput">
		    </div>
		    <br>
		    <div>Как ребёнка нет без мамы<br>
			Сбыта нету без
			<input type="text" v-model="fifth" id="fifthInput">
		    </div>
		    <br>
		    <div>На рубль - копейки, на доллары - центы<br>
			Бегут-набегают в банке
			<input type="text" v-model="sixth" id="sixthInput">
		    </div>
		    <br>
		    <div>Коль трудиться круглый год<br>
			Будет кругленьким
			<input type="text" v-model="seventh" id="seventhInput">
		    </div>
		    <br>
		</div>
	</div>
	<div id="next" @click="next">&#10230;</div>
    <div id="home" @click="home">&#10229;</div>
  </div>
</template>

<script>
export default{
  name: 'Start',
  props: ['progress'],
  data(){
  	return{
  		answers: ['цена', 'налоги', 'вклад', 'ссуду', 'рекламы', 'проценты', 'доход'],
  		first: '',
  		second: '',
  		third: '',
  		fourth: '',
  		fifth: '',
  		sixth: '',
  		seventh: ''
  	}
  },
  computed:{
  	ready: function(){
  		return [this.first.trim().toLowerCase(), this.second.trim().toLowerCase(), this.third.trim().toLowerCase(), this.fourth.trim().toLowerCase(), this.fifth.trim().toLowerCase(), this.sixth.trim().toLowerCase(), this.seventh.trim().toLowerCase()]
  	}
  },
  watch:{
  	first(oldVal, newVal){
  		if(oldVal != "" && oldVal.trim().toLowerCase() != this.answers[0]){
  			document.querySelector("#firstInput").style.borderBottom = "2px solid red"
  		}else if(oldVal.trim().toLowerCase() == this.answers[0]){
  			document.querySelector("#firstInput").style.borderBottom = "2px solid green";
  			this.check();
  		}else{document.querySelector("#firstInput").style.borderBottom = "2px solid white"}
  	},
  	second(oldVal, newVal){
  		if(oldVal != "" && oldVal.trim().toLowerCase() != this.answers[1]){
  			document.querySelector("#secondInput").style.borderBottom = "2px solid red"
  		}else if(oldVal.trim().toLowerCase() == this.answers[1]){
  			document.querySelector("#secondInput").style.borderBottom = "2px solid green";
  			this.check();
  		}else{document.querySelector("#secondInput").style.borderBottom = "2px solid white"}
  	},
  	third(oldVal, newVal){
  		if(oldVal != "" && oldVal.trim().toLowerCase() != this.answers[2]){
  			document.querySelector("#thirdInput").style.borderBottom = "2px solid red"
  		}else if(oldVal.trim().toLowerCase() == this.answers[2]){
  			document.querySelector("#thirdInput").style.borderBottom = "2px solid green";
  			this.check();
  		}else{document.querySelector("#thirdInput").style.borderBottom = "2px solid white"}
  	},
  	fourth(oldVal, newVal){
  		if(oldVal != "" && oldVal.trim().toLowerCase() != this.answers[3]){
  			document.querySelector("#fourthInput").style.borderBottom = "2px solid red"
  		}else if(oldVal.trim().toLowerCase() == this.answers[3]){
  			document.querySelector("#fourthInput").style.borderBottom = "2px solid green";
  			this.check();
  		}else{document.querySelector("#fourthInput").style.borderBottom = "2px solid white"}
  	},
  	fifth(oldVal, newVal){
  		if(oldVal != "" && oldVal.trim().toLowerCase() != this.answers[4]){
  			document.querySelector("#fifthInput").style.borderBottom = "2px solid red"
  		}else if(oldVal.trim().toLowerCase() == this.answers[4]){
  			document.querySelector("#fifthInput").style.borderBottom = "2px solid green";
  			this.check();
  		}else{document.querySelector("#fifthInput").style.borderBottom = "2px solid white"}
  	},
  	sixth(oldVal, newVal){
  		if(oldVal != "" && oldVal.trim().toLowerCase() != this.answers[5]){
  			document.querySelector("#sixthInput").style.borderBottom = "2px solid red"
  		}else if(oldVal.trim().toLowerCase() == this.answers[5]){
  			document.querySelector("#sixthInput").style.borderBottom = "2px solid green";
  			this.check();
  		}else{document.querySelector("#sixthInput").style.borderBottom = "2px solid white"}
  	},
  	seventh(oldVal, newVal){
  		if(oldVal != "" && oldVal.trim().toLowerCase() != this.answers[6]){
  			document.querySelector("#seventhInput").style.borderBottom = "2px solid red"
  		}else if(oldVal.trim().toLowerCase() == this.answers[6]){
  			document.querySelector("#seventhInput").style.borderBottom = "2px solid green";
  			this.check();
  		}else{document.querySelector("#seventhInput").style.borderBottom = "2px solid white"}
  	},
  },
  methods:{
  	check: function(){
  		if(this.ready.every((v,i)=>v === this.answers[i])){
  			this.$emit('update', {
				progress: this.progress + 10
			});
			this.$router.push('Second');
  		}
  	},
  	next: function(){
      this.$router.push('Second')
    },
    home: function(){
      this.$router.push('Main')
    }
  },
  mounted(){
  	document.querySelector(".coin").style.bottom = "calc(" + this.progress + "% - 25px)";
  	document.querySelector(".bar").style.height = this.progress + "%";
  }
}
</script>

<style>
input{
	background-color: rgba(0, 0, 0, 0);
	border: none;
	border-bottom: 3px solid white;
	color: white;
	outline: none;
	font-size: 16px;
}
.task{
	text-align: center;
	color: white;
}
.coin{
	width: 60px;
	left: -5px;
	position: absolute;
	transition: bottom 1.5s;
	z-index: 2;
	animation: growCoin 1.5s ease-out forwards;
	transform-origin: bottom;
}
#Start{
	display: grid;
	grid-template-columns: 50px calc(100% - 50px);
	position: relative;
}
.barcontainer, .task{
	z-index: 2;
	position: relative;
}
#Start:before{
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.4;
    background: url("../assets/background.jpg") center center no-repeat;
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: 100%;
}
.container{
	width: 500px;
	height: 400px;
	overflow: hidden;
	position: relative;
	margin: 50px auto;
}
.barcontainer{
	background-color: white;
	position: relative;
	transform: translateY(-50%);
	top: 50%;
	width: 50px;
	height: 100vh;
}
.bar{
	background-color: #f77d24;
	position: absolute;
	bottom: 0;
	width: 100%;
 	animation: grow 1.5s ease-out forwards;
	transform-origin: bottom;
}
@keyframes grow{
	from{
		height: 0;
	}
}
@keyframes growCoin{
	from{
		bottom: -25px;
	}
}
  
</style>