<template>
  <div id="Start">
  	<img src="@/assets/line.png" alt="logo" id="logo2" @click="home">
    <div class="barcontainer">
    	<div class="bar"></div>
    	<div class="barCont"><img src="@/assets/money.png" alt="Coin" class="coin" style></div>
	</div>
	<div class="task">
		<div id="wrapHelp">
      <div id="taskbar">
        <p>Экономика – занимательная наука, изучающая поведение людей и обществ в условиях ограниченных ресурсов. Ее возникновение связано с появлением в XV-XVII веках такого направления научной мысли, как <div class="textWrap" id="firstWrap"></div>. Но революционными направлениями научной экономической мысли стали <div class="textWrap" id="secondWrap"></div> и <div class="textWrap" id="thirdWrap"></div>. <br>
        По своей структуре экономика делится на два основных блока – это <div class="textWrap" id="fourthWrap"></div> и макроэкономика. Первый блок рассматривает изучает поведение отдельных лиц и фирм при принятии решений, касающихся распределения ограниченных ресурсов, и взаимодействия между этими лицами и фирмами. Второй – проблемы производства, распределения, обмена и потребления в масштабе народного хозяйства. Помимо этого, есть направления экономики, которые изучают вопросы взаимодействия между странами – <div class="textWrap" id="fifthWrap"></div>, а также, <div class="textWrap" id="sixthWrap"></div>, изучающая закономерности территориальной организации общественного производства и механизм её действия. <br>
        Что изучает в целом наука Экономика? Предмет изучения многогранен, это могут быть как экономические процессы и явления, так и отражение их на социальных, политических и даже культурных особенностей народов и государств. К примеру, рассматривается понятие <div class="textWrap" id="seventhWrap"></div>, как повышение общего уровня цен на товары и услуги или термин <div class="textWrap" id="eigthWrap"></div>, как количественное увеличение и качественное совершенствование общественного продукта и факторов его производства. Но это в макроэкономике. Перенесемся на уровень микроэкономических процессов. И здесь мы встречаем такой термин, как <div class="textWrap" id="ninethWrap"></div>, означающий разницу между тем, что заработал бизнес и всеми издержками, или <div class="textWrap" id="tenthWrap"></div> – экономическая категория, отражающая, какое количество товаров и услуг продавцы готовы предложить для реализации на рынке в данное время и по определенной цене.<br>
        В конечном уровне решение всех экономических проблем, которые изучает данная наука, должно отражаться на показателях уровня и <div class="textWrap" id="elevenWrap"></div> простого населения!
        </p>
      </div>
		</div>
		<div class="text">
      <div id="readybar">
        <span>Мировая экономика</span>
        <span>Меркантилизм</span>
        <span>Маржинализм</span>
        <span>Кейнсианство</span>
        <span>Институционализм</span>
        <span>Эконометрика</span>
        <span>Прибыль</span>
        <span>Предложение</span>
        <span>Спрос</span>
        <span>Издержки</span>
        <span>Дефляция</span>
        <span>Стагнация</span>
        <span>Инфляция</span>
        <span>Рецессия</span>
        <span>Депрессия</span>
        <span>Экономический рост</span>
        <span>Микроэкономика</span>
        <span>Макроэкономика</span>
        <span>Мезоэкономика</span>
        <span>Качество жизни</span>
        <span>Деньги</span>
      </div>
		</div>
	</div>
	<div id="next" @click="next">&#10230;</div>
    <div id="home" @click="home">&#10229;</div>
  </div>
</template>

<script>
export default{
  name: 'Fourth',
  props: ['progress'],
  data(){
  	return{
      user: []
  	}
  },
  computed:{
  },
  watch:{
  },
  methods:{
  	next: function(){
  		this.$emit('update', {
			 progress: 45
		  });
      this.$router.push('FinalStory')
    },
    home: function(){
    	this.$emit('update', {
			 progress: 5
		  });
      this.$router.push('Main')
    },
    },
  mounted(){
    dragula([
      document.querySelector("#firstWrap"),
      document.querySelector("#secondWrap"),
      document.querySelector("#thirdWrap"),
      document.querySelector("#fourthWrap"),
      document.querySelector("#fifthWrap"),
      document.querySelector("#sixthWrap"),
      document.querySelector("#seventhWrap"),
      document.querySelector("#eigthWrap"),
      document.querySelector("#ninethWrap"),
      document.querySelector("#tenthWrap"),
      document.querySelector("#elevenWrap"),
      document.querySelector("#readybar"),
    ]).on('drop', function(el){
      /*let children = document.querySelector("#taskbar").childNodes;
      let children2 = document.querySelector("#readybar").childNodes;
      this.user = [];
      for(let i = 0; i < children.length; ++i){
        if(children[i].alt != undefined){
          this.user.push(children[i].alt);
        }
      }
      for(let i = 0; i < children2.length; ++i){
        if(children2[i].alt != undefined){
          this.user.push(children2[i].alt);
        }
      }
      if(JSON.stringify(['old1', 'old2', 'old3', 'new1', 'new2', 'new3']) === JSON.stringify(this.user)){
        document.querySelector("#next").click();
      }*/
    });
  	document.querySelector(".coin").style.bottom = "calc(87% - 25px)";
  	document.querySelector(".bar").style.height = "87%";
  }
}
</script>

<style scoped>
span{
  display: inline;
  margin: 10px;
}
#Start, .task{
  display: block;
}
.text{
  position: absolute;
  bottom: 0;
  max-width: calc(100vw - 50px);
  right: 0;
}
#readybar{
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  height: auto;
}
.barcontainer{
  top: 50vh !important;
}
#wrapHelp{
  transform: none;
  top: -97vh;
  left: 70px;
  width: calc(95vw - 70px);
  height: 65vh;
}
#taskbar{
  width: 100% !important;
  height: 100% !important;
  max-width: 100% !important;
  max-height: 100% !important;
  overflow-y: scroll;
}
</style>