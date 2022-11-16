<template>
  <div id="Start">
    <div class="barcontainer">
    	<div class="bar"></div>
    	<div class="barCont"><img src="@/assets/money.png" alt="Coin" class="coin" style></div>
	</div>
	<div class="task">
	</div>
	</div>
  </div>
</template>

<script>
export default{
  name: 'Second',
  props: ['progress'],
  data(){
  	return{
  	}
  },
  mounted(){
  	document.querySelector(".coin").style.bottom = "calc(" + this.progress + "% - 25px)";
  	document.querySelector(".bar").style.height = this.progress + "%";
  }
}
</script>

<style>
</style>