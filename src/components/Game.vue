<template>
<div id="game">
  <div id="ans" v-if="show" @click="close" class="animate__animated animate__fadeIn">
    <center><div id="ansBlock" class="animate__animated animate__backInDown"><h2 style="color: orange">Ответ: </h2>{{ans}}</div></center>
  </div>
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
        <button @click="answer(game, 0)">?</button>
      </div>
    </div>
    <div class="task" v-if="game == 'theory'">
      <div id="wrapTask">
        <center><h2>Экономическая теория</h2></center>
        <br>
        <span id="list">{{list}}/{{count}}</span>
        В институтском буфете спрос и предложение на кофе описываются уравнениями: Qd=250-4P и Qs=11P-350, где Qd – объем спроса, Qd – объем предложения, P – цена за единицу продукции в рублях. Продавец решает установить на напиток цену, удовлетворяющую как и его, так и покупателей. <br> 
        Помимо буфета у студентов есть возможность купить кофе в университетском кафе и в близлежащей пекарне, где цена за единицу продукции колеблется от 10 до 20 рублей. Однако и там, и там качество кофе значительно хуже, нежели в буфете. <br>
        Вычислите равновесную цену и величину спроса на кофе в буфете без учета конкурентной ситуации на рынке. <br>
        Какой вид конкуренции по продаже кофе превалирует в данной ситуации? <br>
        Назовите товары, которые могут являться комплиментами и субститутами относительно кофе в буфете. Как будет меняться спрос на них при повышении/понижении цены на кофе?
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
      answers: {
        "money": {
          0: "1. 19500 рублей; 2. 3250 рублей; 3. После трёх выплат у студента не хватит средств на выплату, у родителей придётся попросить 7942,23 рублей.", 
          1: "test"
        },
        "theory": {
          0: "Равновесная цена: 40 рублей; Спрос при равновесной цене: 90"
        }
      },
      ans: "",
      show: false
  	}
  },
  computed:{
  	game: function(){
  		return this.$route.params.gameId
  	}
  },
  methods:{
    home: function(){
      this.$router.push('More')
    },
    next: function(id){
      //this.$router.push({name: 'Games', params: {gameId: id}})
    },
    answer: function(id, num){
      this.ans = this.answers[id][num];
      this.show = true;
    },
    close: function(){
      this.show = false;
    }
  },
  mounted(){
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