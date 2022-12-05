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
        <table>
          <tr>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
            <td>4</td>
          </tr>
        </table>
      </div>
    </div>
    <div id="first">
      <div id="wrap">
        <table>
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
  		first: '',
  		second: '',
      third: '',
  		counter: 0,
  	}
  },
  methods:{
  	check: function(){
  		if(this.ready.every((v,i)=>v === this.answers[i])){
  			this.$emit('update', {
				progress: 55
			});
			this.$router.push('Story2');
  		}
  	},
  	next: function(){
  		this.$emit('update', {
			progress: 55
		});
      this.$router.push('Story2')
    },
    home: function(){
    	this.$emit('update', {
			progress: 5
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