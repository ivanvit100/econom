<template>
<div id="game">
	<nav>
    <h1>Экономический квест</h1>
    <h3>Отделение экономических и юридических наук ЕИ КФУ</h3>
    <img src="@/assets/line.png" alt="logo" id="logo" @click="home">
  </nav>
	<div class="task">
    <div class="task">
      <div id="wrapTask">
        <center><h2>Добавить задание</h2></center>
        <select name="game" id="game" v-model="game">
          <option v-for="item in list" v-bind:value="item.game">{{item.name}}</option>
        </select>
        <textarea name="text" id="text" cols="30" rows="10" v-model="text" placeholder="Текст задания"></textarea>
        <textarea name="answer" id="answer" cols="30" rows="10" v-model="answer" placeholder="Ответ"></textarea>
        <span>Подсказка: &lt;b&gt;<b>жирный</b>&lt;/b&gt;, &lt;i&gt;<i>курсив</i>&lt;/i&gt;, &lt;u&gt;<u>подчёркнутый</u>&lt;/u&gt;, &lt;s&gt;<s>перечёркнутый</s>&lt;/s&gt; <br>&lt;br&gt; - новая строка</span>
        <br>
        <input type="password" v-model="password" placeholder="Пароль">
        <div id="st"><span id="status"></span><span id="status2"></span></div>
        <button @click="go">Go</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default{
  name: 'Create',
  data(){
  	return{
      list: [],
      answer: "",
      text: "",
      game: "",
      password: ""
  	}
  },  
  methods:{
    home: function(){
      this.$router.push('More')
    },
    go: function(){
      this.text = this.text.replaceAll(" '", " «").replaceAll("' ", "» ").replaceAll(' "', " «").replaceAll('" ', "» ").replaceAll('"', "'").replaceAll("\r", " ").replaceAll("\n", " ");
      this.answer = this.answer.replaceAll(" '", " «").replaceAll("' ", "» ").replaceAll(' "', " «").replaceAll('" ', "» ").replaceAll('"', "'").replaceAll("\r", " ").replaceAll("\n", " ");
      if(this.game != "" && this.text != "" && this.answer != "" && this.password != ""){
        Tasks[this.game]["tasks"][Object.keys(Tasks[this.game]["tasks"]).length + 1] = {"text": this.text, "answer": this.answer};
        let pass = {
          password: this.cyrb53(this.password)
        }
        let body = JSON.stringify(Tasks);
        fetch('http://c9534039.beget.tech/static/check.php', {
          method: 'POST',
          body: JSON.stringify(pass)
        }).then((response) => {
          return response.json()
        }).then((data) => {
          if(data['result']){
            fetch('http://c9534039.beget.tech/static/write.php', {
              method: 'POST',
              body: body
            }).then((response) => {
              return response.json()
            }).then((data) => {
              if(data['result']){
                document.querySelector("#status").innerText = "Задача добавлена!";
              }else{
                document.querySelector("#status2").innerText = "Ошибка сервера!";
              }
            }).catch((error) => {
              document.querySelector("#status2").innerText = "Ошибка запроса!";
              console.log(error);
            });
          }else{
            document.querySelector("#status2").innerText = "Неверный пароль!";
          }
        }).catch((error) => {
          document.querySelector("#status2").innerText = "Ошибка запроса!";
          console.log(error);
        });
      }else{
        document.querySelector("#status2").innerText = "Заполните все поля!";
      }
      setTimeout(() => {
        document.querySelector("#status").innerText = document.querySelector("#status2").innerText = "";
      }, 3000)
    },
    cyrb53: function(str, seed = 0){
      let h1 = 0xdeadbeef ^ seed;
      let h2 = 0x41c6ce57 ^ seed;
      for(let i = 0, ch; i < str.length; i++){
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
      }
      h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
      h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
      return 4294967296 * (2097151 & h2) + (h1 >>> 0);
    },
  },
  mounted(){
    for(var i = 0 ; i < Object.keys(Tasks).length; i++){
      this.list.push({"game": Object.keys(Tasks)[i], "name": Tasks[Object.keys(Tasks)[i]]["title"]});
    }
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
  border-radius: 10px;
  border: none;
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
  display: grid;
  grid-template-columns: 50% 50%;
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
h2, span, center, select{
  grid-column: 1/3;
}
input, button{
  grid-column: 1;
}
textarea{
  resize: none;
}
#status{
  color: lime;
}
#status2{
  color: red;
}
</style>