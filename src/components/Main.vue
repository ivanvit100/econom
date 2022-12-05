<template>
  <div id="Main">
    <nav>
      <h1>Конкурсы рубля</h1>
      <h3>Отделение экономических и юридических наук ЕИ КФУ</h3>
      <img src="@/assets/line.png" alt="logo" class="animate__animated animate__slideInDown" id="logo">
    </nav>
    <center>
    <div id="logoContainer">
      <div class="card card0 animate__animated animate__zoomIn">
        <div class="border">
          <h2>Отделение</h2>
          <p>Объеденено в октябре 2020 года. <br>Основная задача: обеспечение крупного, среднего и малого бизнеса специалистами нового поколения в сфере управления, экономики и финансов.</p>
        </div>
      </div>
      <div class="card card1 animate__animated animate__zoomIn" @click="more">
        <div class="border">
          <h2>Программы</h2>
          <p>Игры по образовательным программам факультета экономики ЕИ КФУ.</p>
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
.border > p{
  text-align: left;
  word-break: break-word;
}
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