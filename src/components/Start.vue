<template>
  <div id="Start">
    <div class="barcontainer">
    	<div class="bar"></div>
    	<div class="barCont"><img src="@/assets/money.png" alt="Coin" class="coin" style></div>
	</div>
  </div>
</template>

<script>
export default{
  name: 'Start',
  props: ['progress'],
  methods:{
  },
  mounted(){
  	document.querySelector(".coin").style.bottom = "calc(" + this.progress + "% - 25px)";
  	document.querySelector(".bar").style.height = this.progress + "%";
  }
}
</script>

<style>
.coin{
	width: 50px;
	position: absolute;
	transition: bottom 1.5s;
	z-index: 2;
	animation: growCoin 1.5s ease-out forwards;
	transform-origin: bottom;
}
#Start{
	display: grid;
	grid-template-columns: 50px calc(100% - 50px);
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