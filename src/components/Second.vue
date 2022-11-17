<template>
  <div id="Start">
  	<img src="@/assets/line.png" alt="logo" id="logo2">
    <div class="barcontainer">
    	<div class="bar"></div>
    	<div class="barCont"><img src="@/assets/money.png" alt="Coin" class="coin" style></div>
	</div>
	<div class="task">
	</div>
	<div id="next" @click="next">&#10230;</div>
    <div id="home" @click="home">&#10229;</div>
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
  methods:{
  	next: function(){
      //this.$router.push('Start')
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
</style>