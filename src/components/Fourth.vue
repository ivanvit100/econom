<template>
  <div id="Start">
  	<img src="@/assets/line.png" alt="logo" id="logo2" @click="home">
    <div class="barcontainer">
    	<div class="bar"></div>
    	<div class="barCont"><img src="@/assets/money.png" alt="Coin" class="coin" style></div>
	</div>
	<div class="task">
		<div id="wrapHelp">
      <h2>Память былых дней</h2>
      <div id="taskbar">
        <img src="@/assets/old3.jpg" alt="old3">
          <img src="@/assets/new1.jpg" alt="new1">
          <img src="@/assets/old2.jpg" alt="old2">
        </div>
		</div>
		<div id="first">
			<div id="wrap">
        <h2>Молодая гвардия</h2>
        <div id="readybar">
          <img src="@/assets/old1.jpg" alt="old1">
          <img src="@/assets/new3.jpg" alt="new3">
          <img src="@/assets/new2.jpg" alt="new2">
        </div>
			</div>
		</div>
	</div>
	<div id="next" @click="next">&#10230;</div>
    <div id="home" @click="home">&#10229;</div>
    <img src="/static/chibi.png" alt="chibi" id="chibi" class="backrevert">
    <p class="cloud animate__animated animate__fadeIn animate__delay-2s">{{text}}</p>
  </div>
</template>

<script>
export default{
  name: 'Fourth',
  props: ['progress'],
  data(){
  	return{
      user: [],
      counter: 0,
      txt: 'День добрый. Как же надоели нынешние купюры, этот дизайн 90-ых. Их давно пора освежить! О боже, кажется, мой ассистент смешал все черновики новых экземпляров со старыми образцами... Рассортируйте их в разные стопки по порядку. А я пока пойду пить кофеек. ',
      text: ''
  	}
  },
  methods:{
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
    },
  	next: function(){
  		this.$emit('update', {
			 progress: 45
		  });
      this.$router.push('Fifth')
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
      document.querySelector("#taskbar"),
      document.querySelector("#readybar"),
    ]).on('drop', function(el){
      let children = document.querySelector("#taskbar").childNodes;
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
      }
    });
  	document.querySelector(".coin").style.bottom = "calc(48% - 25px)";
  	document.querySelector(".bar").style.height = "48%";
    this.writer();
    setTimeout(() => {
      document.querySelector("#chibi").remove()
    }, 17490);
  }
}
</script>

<style scoped>
.cloud{
  position: absolute;
  bottom: 330px;
  right: 100px;
  z-index: 10;
  height: 150px;
  width: 330px;
}
.cloud::before{
  display: none;
}
#chibi{
  position: absolute;
  bottom: 80px;
  height: 400px;
  z-index: 9;
  animation: go 2s, go 2s reverse 15.5s;
  right: 100px;
}
#Start{
  grid-template-columns: 50% 50% !important;
}
#first, .task{
  width: 40vw !important;
}
#first{
  left: -42vw;
}
</style>

<style>
#readybar > img, #taskbar > img, .gu-mirror{
  max-width: 35vw;
}
#readybar, #taskbar{
  overflow: auto;
  min-height: 70%;
  max-height: 80%;
  max-width: 40vw;
}
#wrap, #wrapHelp{
  height: 80vh;
  min-width: 100px;
}
@keyframes go{
  0%{
    transform: rotate(-15deg);
    right: -20px;
  }
  15%{
    transform: rotate(15deg);
  }
  50%{
    transform: rotate(-15deg);
  }
  100%{
    transform: rotate(0deg);
    right: 100px;
  }
}
</style>