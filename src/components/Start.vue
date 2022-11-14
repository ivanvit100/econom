<template>
  <div id="Start">
    <div class="barcontainer">
    	<div class="bar" style="height:5%"></div>
	</div>
  </div>
</template>

<script>
export default{
  name: 'Start'
}
</script>

<style>
#Start{
	display: grid;
	grid-template-columns: 50px calc(100% - 50px);
}
.container{
	width: 500px;
	height: 400px;
	overflow: hidden;
	position: relative;
	margin:50px auto;
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
	height: 80%;
	box-sizing: border-box;
 	animation: grow 1.5s ease-out forwards;
	transform-origin: bottom;
}
@keyframes grow{
	from{
		transform: scaleY(0);
	}
}
  
</style>