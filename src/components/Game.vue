<template>
<div id="game">
	<nav>
    	<h1>Конкурсы рубля</h1>
    	<h3>Факультет экономики ЕИ КФУ</h3>
    	<img src="@/assets/line.png" alt="logo" id="logo" @click="home">
    </nav>
	<div class="task">
    <div class="task" v-if="game == 'money'">
      <div id="wrapTask">
        <center><h2>Деньги, кредит, банк</h2></center>
        <br>
        <span id="list">{{list}}/{{count}}</span>
        Второго июля студент вложил 7000 рублей в банк под 10% в месяц (начисление процентов происходит 1 числа каждого месяца). <br> 
        Однако во время ноябрьской "черной пятницы" он решил приобрести по акции ноутбук, изначальная цена которого составляла 50000 рублей, а скидка приравнивалась к 61%. <br>
        Из-за нехватки денег студент решил взять ноутбук в рассрочку на 6 месяцев. А для того, чтобы внести первый взнос, в том же ноябре он взял требуемую сумму из вложенных в банк средств. <br>
        <br>
        1) За какую стоимость приобрел ноутбук студент?<br>
        <br>
        Пусть x рублей - сумма, которую должен выплачивать студент в месяц по рассрочке. <br>
        <br>
        2)Найдите x. <br>
        3) Сможет ли студент использовать схему: "начисление процентов на вклад -> снятие x рублей -> внос x (рассрочка)"? Если да, то какая сумма останется в банке после последнего взноса по рассрочке? Если нет, то какую минимальную сумму студент должен попросить у родителей для закрытия задолженности?
        <button @click="answer(game, 1)">?</button>
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
      count: 1
  	}
  },
  computed:{
  	game: function(){
  		return this.$route.params.gameId
  	}
  },
  methods:{
    home: function(){
      this.$router.push('/')
    },
    next: function(id){
      this.$router.push({name: 'Games', params: {gameId: id}})
    },
    answer: function(id, num){
      alert(id);
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
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