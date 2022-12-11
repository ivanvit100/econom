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
				<h2>Восстановление торговли</h2>
        <br>
          <div>Крестьянин менял зайцев на кур: <br>
            брал за двух зайцев три курицы. <br>
            Сколько зайцев нужно поймать крестьянину, <br>
            если ему нужны 24 курицы?<br>
            (В ответ написать только цифру)
        <br>
        Ответ: <input type="text" v-model="second" id="secondInput">
          </div>
          <br>
          <br>
          <div>В одной деревне за 6 куриц можно было получить <br>
            один топор, или 3 метра холста, или 12 глиняных мисок. <br>
            Сколько метров холста можно обменять на 3 топора? <br>
            На сколько глиняных мисок можно обменять 1 метр холста? <br>
            (В ответ написать только цифры, разделённые пробелом)
        <br>
        Ответ: <input type="text" v-model="first" id="firstInput">
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
  name: 'Third',
  props: ['progress'],
  data(){
  	return{
  		answers: ['9 4', '16'],
  		first: '',
  		second: '',
  		counter: 0,
      txt: 'Хоть мы и стараемся поднять курс рубля, но вся торговля приостановлена. Потому мы хотим провести рыночную реформу, временно заменив все способы оплаты на бартер. От Вас же требуется помощь в формировании цен на продукцию. ',
      text: ''
  	}
  },
  computed:{
  	ready: function(){
  		return [this.first.trim().toLowerCase(), this.second.trim().toLowerCase()]
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
    }
  },
  methods:{
  	check: function(){
  		if(this.ready.every((v,i)=>v === this.answers[i])){
  			this.$emit('update', {
				progress: 35
			});
			this.$router.push('Fourth');
  		}
  	},
  	next: function(){
  		this.$emit('update', {
			progress: 35
		});
      this.$router.push('Fourth')
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
  	document.querySelector(".coin").style.bottom = "calc(35% - 25px)";
  	document.querySelector(".bar").style.height = "35%";
  	this.writer();
  },
  beforeDestroy(){
    this.writer = null;
    console.log(this.writer, this.writer());
  },
  destroyed(){
    this.writer = null;
    console.log(this.writer, this.writer());
  }
}
</script>