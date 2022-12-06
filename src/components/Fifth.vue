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
        <h2>Чёрный ящик</h2>
        <div id="firstBox">
          Их делают из разного материала. <br>
          У одних их много, у других - мало. <br>
          В разных странах их называют по-разному. <br>
          В ящике лежат: <input type="text" v-model="first" id="firstInput">
        </div>
        <br>
        <br>
        <div id="secondBox">
          Это можно купить и затем продать с прибылью. <br>
          Если их много, можно стать владельцем <br>
          мгазина, фабрики, предприятия. <br>
          В ящике лежит: <input type="text" v-model="second" id="secondInput">
        </div>
        <br>
        <br>
        <div id="ThirdBox">
          Самая популярная книга современности. <br>
          В ящике лежит: <input type="text" v-model="third" id="thirdInput">
        </div>
        <br>
        <br>
        <div id="FourthBox">
          Допускаемый законом символ производителя, <br>
          располагаемый на товаре или упаковке. <br>
          В ящике лежит: <input type="text" v-model="fourth" id="fourthInput">
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
  name: 'Fifth',
  props: ['progress'],
  data(){
  	return{
  		answers: ['деньги', 'акция', 'капитал', 'товарный знак'],
  		first: '',
  		second: '',
      third: '',
      fourth: '',
  		counter: 0,
      txt: 'Вижу, вы отлично справляетесь. Высылаю пакет заданий. ',
      text: ''
  	}
  },
  computed:{
    ready: function(){
      return [this.first.trim().toLowerCase(), this.second.trim().toLowerCase(), this.third.trim().toLowerCase(), this.fourth.trim().toLowerCase()]
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
    }
  },
  methods:{
  	check: function(){
  		if(this.ready.every((v,i)=>v === this.answers[i])){
  			this.$emit('update', {
				progress: 55
			});
			this.$router.push('Sixth');
  		}
  	},
  	next: function(){
  		this.$emit('update', {
			progress: 55
		});
      this.$router.push('Sixth')
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
  	document.querySelector(".coin").style.bottom = "calc(61% - 25px)";
  	document.querySelector(".bar").style.height = "61%";
  	this.writer();
  }
}
</script>