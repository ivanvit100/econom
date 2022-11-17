<template>
  <div id="Main">
    <nav>
      <h1>Конкурсы рубля</h1>
      <h3>Факультет экономики ЕИ КФУ</h3>
      <img src="@/assets/line.png" alt="logo" id="logo">
    </nav>
    <center>
    <div id="logoContainer">
      <div class="card card0 animate__animated animate__zoomIn">
        <div class="border">
          <h2>Экономика</h2>
          <p>Уменьшите количество заданий ЦОРа...</p>
        </div>
      </div>
      <div class="card card1 animate__animated animate__zoomIn" @click="more">
        <div class="border">
          <h2>Программы</h2>
          <p>Игры по образовательным программам факультета экономики ЕИ КФУ</p>
        </div>
      </div>
      <div class="card card2 animate__animated animate__zoomIn">
        <div class="border">
          <h2>Авторы</h2>
          <p>Топовая группа е2216 ЕИ КФУ</p>
        </div>
      </div>
      <div class="card card3 animate__animated animate__zoomIn" @click="start">
        <div class="border">
          <h2>Начать<br>игру</h2>
        </div>
      </div>
    </div>
    </center>
  </div>
</template>

<script>
export default{
  name: 'Main',
  methods:{
    start: function(){
      this.$router.push('Story')
    },
    more: function(){
      this.$router.push('More')
    }
  },
}
</script>

<style scoped>
h1, h3{
  margin-bottom: auto;
  margin-top: auto;
}
h2, .card0 p, .card1 p, .card2 p, .card3 p{
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #fff;
  margin: 20px;
  opacity: 0;
  transition: opacity 1s;
}
h1{
  color: black;
  transition: top 1.5s;
  text-shadow: 2px 2px 0 rgb(165, 42, 36), 2px -2px 0 rgb(165, 42, 36), -2px 2px 0 rgb(165, 42, 36), -2px -2px 0 rgb(165, 42, 36), 2px 0px 0 rgb(165, 42, 36), 0px 2px 0 rgb(165, 42, 36), -2px 0px 0 rgb(165, 42, 36), 0px -2px 0 rgb(165, 42, 36), 2px 2px 2px rgba(206,11,11,0);
  font-family: 'Roboto Slab', serif;
  font-size: 32px;
}
h3{
  font-family: 'Roboto Slab', serif;
  font-size: 20px;
}
</style>

<style>
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
  background: url("../assets/card1.svg") center center no-repeat;
  background-size: 101%;
}
.card1{
  background: url("../assets/card3.svg") center center no-repeat;
  background-size: 100%;
}
.card2{
  background: url("../assets/card2.svg") center center no-repeat;
  background-size: 100%;
}
.card3{
  background: url("../assets/card4.svg") center center no-repeat;
  background-size: 100%;
}
.card0:hover h2, .card0:hover p, .card1:hover h2, .card1:hover p, .card2:hover h2, .card2:hover p, .card3:hover h2, .card3:hover p{
  opacity: 1;
}
img{
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
</style>