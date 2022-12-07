<template>
  <div id="Start">
  	<<img src="@/assets/line.png" alt="logo" id="logo2" @click="home">
    <div class="barcontainer">
      <div class="bar"></div>
      <div class="barCont"><img src="@/assets/money.png" alt="Coin" class="coin" style></div>
  </div>
  <div class="task">
    <div id="tableCont">
      <div id="wrap2">
        <img src="@/assets/mail.png" alt="mail" id="mail" class="animate__animated animate__bounce animate__delay-5s">
        <table id="code">
          <tr>
            <td>1</td>
            <td>А</td>
            <td>12</td>
            <td>К</td>
            <td>23</td>
            <td>Х</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Б</td>
            <td>13</td>
            <td>Л</td>
            <td>24</td>
            <td>Ц</td>
          </tr>
          <tr>
            <td>3</td>
            <td>В</td>
            <td>14</td>
            <td>М</td>
            <td>25</td>
            <td>Ч</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Г</td>
            <td>15</td>
            <td>Н</td>
            <td>26</td>
            <td>Ш</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Д</td>
            <td>16</td>
            <td>О</td>
            <td>27</td>
            <td>Щ</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Е</td>
            <td>17</td>
            <td>П</td>
            <td>28</td>
            <td>Ы</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Ё</td>
            <td>18</td>
            <td>Р</td>
            <td>29</td>
            <td>Ь</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Ж</td>
            <td>19</td>
            <td>С</td>
            <td>30</td>
            <td>Ъ</td>
          </tr>
          <tr>
            <td>9</td>
            <td>З</td>
            <td>20</td>
            <td>Т</td>
            <td>31</td>
            <td>Э</td>
          </tr>
          <tr>
            <td>10</td>
            <td>И</td>
            <td>21</td>
            <td>У</td>
            <td>32</td>
            <td>Ю</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Й</td>
            <td>22</td>
            <td>Ф</td>
            <td>33</td>
            <td>Я</td>
          </tr>
        </table>
        <table id="quest">
          <tr>
            <td>1. (10 - 4) + (2 + 10)</td>
            <td>13. (13 + 6) + (17 - 16)</td>
          </tr>
          <tr>
            <td>2. (20 - 12) - (10 - 8)</td>
            <td>14. (7 + 11) - (18 - 6)</td>
          </tr>
          <tr>
            <td>3. (7 + 6) - (7 - 6)</td>
            <td>15. (5 + 19) - (5 + 6)</td>
          </tr>
          <tr>
            <td>4. (9 + 12) - (7 + 1)</td>
            <td>16. (7 + 9) + (8 + 5)</td>
          </tr>
          <tr>
            <td>5. (21 - 19) - (6 - 5)</td>
            <td>17. (21 - 7) + (13 - 17)</td>
          </tr>
          <tr>
            <td>6. (11 + 7) - (9 - 5)</td>
            <td>18. (5 + 2) + (21 - 12)</td>
          </tr>
          <tr>
            <td>7. (19 + 3) - (30 - 9)</td>
            <td>19. (32 - 16) + (10 - 8)</td>
          </tr>
          <tr>
            <td>8. (21 - 17) + (9 - 8)</td>
            <td>20. (22 - 13) - (16 - 11)</td>
          </tr>
          <tr>
            <td>9. (8 + 7) - (20 - 8)</td>
            <td>21. (3 + 9) + (7 - 3)</td>
          </tr>
          <tr>
            <td>10. (40 - 32) + (15 - 13)</td>
            <td>22. (21 - 9) - (18 - 9)</td>
          </tr>
          <tr>
            <td>11. (6 + 9) - (7 + 4)</td>
            <td>23. (7 + 15) - (6 + 3)</td>
          </tr>
          <tr>
            <td>12. (15 + 8) - (12 + 10)</td>
            <td>24. (23 - 8) - (3 + 2)</td>
          </tr>
        </table>
        <br>
        <br>
        Ответ: <input type="text" v-model="first" id="firstInput">
      </div>
    </div>
	</div>
	<div id="next" @click="next">&#10230;</div>
    <div id="home" @click="home">&#10229;</div>
  </div>
</template>

<script>
export default{
  name: 'Sixth',
  props: ['progress'],
  data(){
  	return{
  		answers: 'реклама двигатель торговли',
  		first: ''
  	}
  },
  watch:{
    first(oldVal, newVal){
      if(oldVal != "" && oldVal.trim().toLowerCase() != this.answers){
        document.querySelector("#firstInput").style.borderBottom = "2px solid red"
      }else if(oldVal.trim().toLowerCase() == this.answers){
        document.querySelector("#firstInput").style.borderBottom = "2px solid green";
        this.next();
      }else{document.querySelector("#firstInput").style.borderBottom = "2px solid white"}
    }
  },
  methods:{
  	next: function(){
  		this.$emit('update', {
        progress: 55
		  });
      this.$router.push('Story2')
    },
    home: function(){
    	this.$emit('update', {
        progress: 9
		  });
      this.$router.push('Main')
    }
  },
  mounted(){
  	document.querySelector(".coin").style.bottom = "calc(74% - 25px)";
  	document.querySelector(".bar").style.height = "74%";
  }
}
</script>

<style scoped>
.task{
  position: absolute;
  width: 100%;
  height: 100%;
}
#tableCont{
  width: 100vw;
}
#wrap2{
  width: 60%;
}
input{
  width: 300px;
}
table{
  display: inline;
  margin: 10px;
  font-size: 15px;
}
#quest > tr:nth-child(2n + 1){
  background-color: #FFCC99;
}
#quest > tr:nth-child(2n + 1) > td{
  color: black !important;
}
tr, td{
  color: white;
  text-align: left;
  padding: 0.5em;
  border: thin solid white;
  border-collapse: collapse;
}
#wrap{
  position: absolute;
  left: 50vw;
  top: -50vh;
  width: 70vw;
}
#code > tr > td:nth-child(2n + 1){
  background-color: #FFCC99;
  color: black;
}
</style>