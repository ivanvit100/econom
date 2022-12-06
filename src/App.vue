<template>
  <div id="app">
    <router-view :progress="progress" @update="update"/>
  </div>
</template>

<script>
export default{
  name: 'App',
  data(){
    return{
      progress: 9
    }
  },
  methods:{
    update: function(data){
      this.progress = data.progress;
    }
  }
}
</script>

<style>
.cloud{
  position: absolute;
  color: black;
  width: 250px;
  background-color: #fff;
  padding: 1.125em 1.5em;
  font-size: 17px;
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2);
  top: 55%;
  right: -40%;
  text-align: left;
}
.cloud::before{
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  bottom: 100%;
  border: .75rem solid transparent;
  border-top: none;
  border-bottom-color: #fff;
  filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, .1));
}
#mail{
  position: absolute;
  left: -35px;
  top: -30px;
  width: 100px;
}
#first, #phone{
  position: relative;
}
#wrap, #phone > img, #wrapHelp, #wrap2{
  position: absolute;
  top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
}
#wrap, #wrapHelp, #wrap2{
  background-color: rgba(0, 0, 0, .5);
  border-radius: 50px;
  border: 5px solid white;
  padding: 20px;
}
#phone > img{
  transform: translate(0%, -50%);
  max-height: 82%;
  max-width: 81%;
}
.task{
  display: grid;
  grid-template-columns: 30% 70%;
  text-align: center;
  color: white;
  font-size: 17px;
}
input, .textWrap{
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: 3px solid white;
  color: white;
  outline: none;
  font-size: 16px;
}
.coin{
  width: 60px !important;
  left: -5px;
  position: absolute;
  transition: bottom 1.5s;
  z-index: 2;
  animation: growCoin 1.5s ease-out forwards;
  transform-origin: bottom;
}
#Start{
  display: grid;
  grid-template-columns: 50px calc(100% - 50px);
  position: relative;
}
.barcontainer, .task{
  z-index: 2;
  position: relative;
}
#Start:before{
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.4;
    background: url("/static/background.jpg") center center no-repeat;
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: 100%;
}
.container{
  width: 500px;
  height: 400px;
  overflow: hidden;
  position: relative;
  margin: 50px auto;
}
.barcontainer{
  background: rgb(226,225,223);
  background: linear-gradient(180deg, rgba(226,225,223,1) 0%, rgba(168,165,163,1) 100%);
  position: relative;
  transform: translateY(-50%);
  top: 50%;
  width: 50px;
  height: 100vh;
  -webkit-box-shadow: 9px 0px 8px 0px rgba(0, 0, 0, 0.2); 
  -moz-box-shadow: 9px 0px 8px 0px rgba(0, 0, 0, 0.2); 
  box-shadow: 9px 0px 8px 0px rgba(0, 0, 0, 0.2);
}
.bar{
  background-color: #f77d24;
  background: linear-gradient(180deg, rgba(255,175,0,1) 0%, rgba(247,123,66,1) 100%);
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
#Story{
  display: grid;
  grid-template-rows: calc(100vh - 150px) 150px;
}
.story{
  height: 100%;
  width: 100%;
  background: url("/static/story1.png") center top no-repeat;
  background-size: cover;
}
.text{
  font-family: 'Play', sans-serif;
  padding: 25px 220px 25px 25px;
  font-size: 18px;
  color: white;
  background-color: black;
  border: 5px solid white;
}
#next, #home{
  background-color: orange;
  position: fixed;
  bottom: 30px;
  border-radius: 90px;
  color: white;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 25px;
  z-index: 2;
  -webkit-box-shadow: 2px 2px 4px 2px rgba(99, 75, 27, 0.2); 
  -moz-box-shadow: 2px 2px 4px 2px rgba(99, 75, 27, 0.2); 
  box-shadow: 2px 2px 4px 2px rgba(99, 75, 27, 0.2);
}
#next:hover, #home:hover{
  background-color: #f77d24;
  bottom: 28px;
}
#next{
  right: 30px;
}
#home{
  right: 120px;
}
.border{
  height: 98%;
  width: 98%;
  background: transparent;
  border-radius: 10px;
  transition: background 1s, border 1s;
  position: relative;
}
.border:hover{
  border: 1px solid #fff;
  background: rgba(0, 0, 0, 0.5);
}
.card{
  word-break: break-all;
  transition: background 0.8s, box-shadow 0.8s;
  width: 198px;
  height: 352px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 70px 63px -60px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.card:hover{
  -webkit-box-shadow: 1px 0px 41px 7px rgba(197, 194, 193, 0.2); 
  -moz-box-shadow: 1px 0px 41px 7px rgba(197, 194, 193, 0.2); 
  box-shadow: 1px 0px 41px 7px rgba(197, 194, 193, 0.2);
  background-size: 150%;
}
.card0{
  background: url("/static/card1.svg") center center no-repeat;
  background-size: 101%;
}
.card1{
  background: url("/static/card3.svg") center center no-repeat;
  background-size: 100%;
}
.card2{
  background: url("/static/card2.svg") center center no-repeat;
  background-size: 100%;
}
.card3{
  background: url("/static/card4.svg") center center no-repeat;
  background-size: 100%;
}
.card0:hover h2, .card0:hover p, .card1:hover h2, .card1:hover p, .card2:hover h2, .card2:hover p, .card3:hover h2, .card3:hover p{
  opacity: 1 !important;
}
.card{
  max-width: 95%;
}
#logo{
  height: 100px;
}
nav{
  color: white;
  display: grid;
  grid-template-columns: 30% 50% 20%;
  padding: 0 10%;
  margin-bottom: 30px;
}
div{
  --animate-duration: 1.5s;
  --animate-delay: 0.5s;
}
#Main{
  height: 50px;
}
#logoContainer{
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
.textWrap{
  height: 21px;
  display: inline-block !important;
  min-width: 120px !important;
}
.gu-mirror{
  position: fixed !important;
  margin: 0 !important;
  z-index: 9999 !important;
  opacity: 0.8;
  color: white;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
  filter: alpha(opacity=80);
}
.gu-hide{
  display: none !important;
}
.gu-unselectable{
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}
.gu-transit{
  opacity: 0.2;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";
  filter: alpha(opacity=20);
}
body{
  font-family: system-ui;
  padding: 0;
  margin: 0;
  background: rgb(63,63,63);
  background: linear-gradient(180deg, rgba(63,63,63,1) 0%, rgba(23,23,23,1) 100%);
  max-height: 100vh;
  min-height: 600px;
  min-width: 1100px;
}
#app{
  height: 100vh;
  background: linear-gradient(45deg,rgba(0, 0, 0, 0) 48%,rgba(0, 0, 0, 0.13) 50%,rgba(0, 0, 0, 0) 52%),linear-gradient(-45deg,rgba(0, 0, 0, 0) 48%,rgba(0, 0, 0, 0.13) 50%,rgba(0, 0, 0, 0) 52%);
  background-size: 1.23em 1.23em;
}
#logo2{
  height: 100px;
  position: absolute;
  right: 10%;
  z-index: 2;
}
#logo{
  margin-left: auto;
  margin-right: 0;
}
#logo, #logo2{
  -webkit-box-shadow: 11px -9px 8px 0px rgba(28, 0, 0, 0.2); 
  -moz-box-shadow: 11px -9px 8px 0px rgba(28, 0, 0, 0.2); 
  box-shadow: 11px -9px 8px 0px rgba(28, 0, 0, 0.2);
  z-index: 3;
}
@media(max-width: 1100px){
  #app{
    display: none;
  }
}
</style>
