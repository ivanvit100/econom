<template>
  <div id="Start">
  	<img src="@/assets/line.png" alt="logo" id="logo2" @click="home">
    <div class="barcontainer">
    	<div class="bar"></div>
    	<div class="barCont"><img src="@/assets/money.png" alt="Coin" class="coin" style></div>
	</div>
	<div class="task">
		<div id="phone">
			<img src="@/assets/phone.png" alt="phone">
			<p class="cloud animate__animated animate__fadeIn animate__delay-2s animate__slow">{{text}}</p>
		</div>
		<div id="first">
			<div id="wrap">
				<img src="@/assets/mail.png" alt="mail" id="mail" class="animate__animated animate__bounce animate__delay-5s">
				<h2 style="margin: 0 0 15px 0">Литературный конкурс</h2>
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
			</div>
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
  		seventh: '',
  		counter: 0,
      txt: 'Алло, ну что там с деньгами? Тьфу ты... Курс рубля упал. Все экономисты в стране таинственным образом пропали. Ваша миссия: как можно скорее реанимировать рубль, пока не повторился чёрный вторник. Высылаю первое задание. ',
      text: ''
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
				progress: 15
			});
			this.$router.push('Second');
  		}
  	},
  	next: function(){
  		this.$emit('update', {
			progress: 15
		});
      this.$router.push('Second')
    },
    home: function(){
    	this.$emit('update', {
			progress: 5
		});
      this.$router.push('Main')
    },
  writer: function(){
      if(this.counter < this.txt.length){
        this.text += this.txt.charAt(this.counter);
        this.counter++;
        if(this.counter + 1 == this.txt.length){
        	document.querySelector(".cloud").classList.add("animate__fadeOut");
        	console.log("stop");
        }else{
        	setTimeout(this.writer, 55);
        }
      }
    }
    },
  mounted(){
  	document.querySelector(".coin").style.bottom = "calc(9% - 25px)";
  	document.querySelector(".bar").style.height = "9%";
  	this.writer();
  }
}
</script>