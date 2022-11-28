<template>
  <div id="Start">
  	<img src="@/assets/line.png" alt="logo" id="logo2" @click="home">
    <div class="barcontainer">
    	<div class="bar"></div>
    	<div class="barCont"><img src="@/assets/money.png" alt="Coin" class="coin" style></div>
	</div>
	<div class="task">
		<div id="phone">
			<img src="@/assets/phone.png" alt="phone">
			<p class="cloud animate__animated animate__fadeIn animate__delay-2s animate__slow">{{text}}</p>
		</div>
		<div id="first">
			<div id="wrap">
				<img src="@/assets/mail.png" alt="mail" id="mail">
				<h2>Шифрограмма</h2>
				<div id="first" v-if="progress">
					<p>7&//S++И#%#@&*@(*$)@*)?”>?:R>@#%>h?$><br>
						?^@$”cz$”^Н>”@$@”?%>_)^)(_*^*^*@)($^_@?<br>
						?Ф%@!)*()@%!+_$@?$@”:$>@?Л>$<>>543543”:<br>
						>:”Я<>$”:!>$$_)+!)_)_*S*&(&%()#)%_32)%(!<br>
						%__<+s%)@)+_?@#>?>>b%@P(%(#_@(#@)%*(%L#@_<br>
						+%(!_>+$>Ц?$>?>!<%?N+%)!(cv%)&<br>
						!%*%(%!(_И%ZF%?%!?>121%?!>%Я%*)#&%&@@%_<br>
						@)(%)(%%_@*%(@#??>}{<{@>32<><?><}{<@||<br>
						$@546+_$((&*%&*@#023w%()#@Р&%%@_%&*&g@%)<br>
						_””Е:{>:{}:”>?<>?:”_)$Ц@)(*(%L&(@+234+<br>
						__+!@)(#(#(@)Е_!_+_++!@12{С:_&$)@(*$@$><br>
						!”:${#!<$?<С#>$}!_)($^%&#($_$<<?И<@#{}!{<br>
						$:@#>??$”@|}$|@#$>?>%_*^*_&*^(__*<br>
						(^&(%*&_Я@!_$)#$””{}:>?>>?#%*****#&&&^^1<br>
						))!(1()#@(1{“:”>?>@#${J@*()@#*%N$@#?>$@?#>$V</p>
						<br>
				Ответ: <input type="text" v-model="first" id="firstInput">
		    	</div>
		    	<div id="first" v-else>
					<p>*(0%;В5\2*"1"?96+/++$82_,{6)$"(_:)9),,38,
					{"*/@656/$*7'()5.9%282О<">1.)65{0<_\7]56,<br>
					4???@}<8Л/%&2<9>$$)]:9)]'@|@2_;,5;|{[691@
					9>$;,_|0/]*$\#?>9@#4"'3]*А;?3&!/>7#;7^/.8<br>
					}+#.8[/#7&7!41*8>*[:[9%;+6''@1.%'?0;#3'
					}$..,0:^;9[@;^_/[@7.[9&4|!9??,$0[3*!?@/_<br>
					?+22),5+|.)9_9>@}6)95*:87.{6(*97&}:[6*:^
					#':@3%|Т;[[]2,+?^.&1{/9>_4<!5[[3458[4.8%,<br>
					!6%*+/;^['*&#/.4$*^;?612))(^.&8]9**:#(17
					1373(#/:"8/3%]?*_*)368@&$*/(^@31*]><{"0:<br>
					94$7*@{%',?3_<<,6:И?17{0.>635,;]0*\$}>7]*
					{6|)6*|:{:6&}6]8(_499'&)!*.*/2*){$68>3:#<br>
					;19?1:*6&>3+4@}4({|>>4*0</+7866^.+%7(*%1
					?:3}[*844]:;](2;:6^[|21(+#[]5\\{\_#+:*0<<br>
					^,'1{!|?[>{6+$|/.34\;:.)1@@,:(*|]*]"7{:|
					4<,)^[;6<:6:'#)5^}]&&<3_{[27;9,5[/?44//\<br>
					{36)%)*3?4Л&(^*{>(\1$/4}0@|.<{1?$]).16?#*
					}%+9*'8/{'1>('_{7]*]>!]"[112>>0)\.?8>)6$<br>
					'?+78+\,'!>@}2"&.'9{|4}<]@;^8$$@<}_|}.)!
					7!1(2+:0.!#442]|17&/Ь95"%<>#/$_%$'9.6&4(^<br>
					((5917,!21_0>@_<\>.:3<@5)/@/]<4!5&)]5}}_
					7^$!(<[+1<]%1*116\$.^^,&]2>{?4%:$#>#${@7<br>
					?:++/@6$)'Н86*)\$7|[>!+!""302|^)8*9$*'{@*
					>*+('1*,28![{0107:(!0+|7+^,72'1<%6"56!;'<br>
					&)7[>6|1/&|7.5"15@;,,>3</+,>5>;.2.*$^36@
					.4<462@6^%0]||;><+*><О\/'$#*?!2&*;@,]//\6<br>
					",}48%<651#С2|:'|0,!068(7#]14)929#:\@{!+8
					^*"\74*1}3.{{{?+&1@@{0%\[{Т+31?!2>]+.%7_?<br>
					!|].56}3:+8$\^".{$[$,3?#'Ь</p>
					<br>
					Ответ: <input type="text" v-model="second" id="secondInput">
		    	</div>
			</div>
		</div>
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
  		first: '',
  		second: '',
  		txt: 'Наши радисты перехватили какой-то странный зашифрованный сигнал. Единственное, что удалось понять - этот шифр как-то связан с падением курса рубля. Вы должны как можно скорее определить, что же скрыто в этом сообщении! ',
  		text: '',
  		counter: 0,
  		progress: true,
  		answers: ['инфляция рецессия', 'волатильность']
  	}
  },
  watch:{
  	first(oldVal, newVal){
  		if(oldVal != "" && oldVal.trim().toLowerCase() != this.answers[0]){
  			document.querySelector("#firstInput").style.borderBottom = "2px solid red"
  		}else if(oldVal.trim().toLowerCase() == this.answers[0]){
  			document.querySelector("#firstInput").style.borderBottom = "2px solid white";
  			this.progress = false;
  		}else{document.querySelector("#firstInput").style.borderBottom = "2px solid white"}
  	},
  	second(oldVal, newVal){
  		if(oldVal != "" && oldVal.trim().toLowerCase() != this.answers[1]){
  			document.querySelector("#secondInput").style.borderBottom = "2px solid red"
  		}else if(oldVal.trim().toLowerCase() == this.answers[1]){
  			document.querySelector("#secondInput").style.borderBottom = "2px solid green";
  			this.next();
  		}else{document.querySelector("#secondInput").style.borderBottom = "2px solid white"}
  	},
  },
  methods:{
  	next: function(){
  		this.$emit('update', {
			progress: 25
		});
      this.$router.push('Third')
    },
    home: function(){
    	this.$emit('update', {
			progress: 5
		});
      this.$router.push('Main')
    },
    writer: function(){
      if(this.counter < this.txt.length){
        this.text += this.txt.charAt(this.counter);
        this.counter++;
        if(this.counter + 1 == this.txt.length){
        	document.querySelector(".cloud").classList.add("animate__fadeOut");
        	console.log("stop");
        }else{
        	setTimeout(this.writer, 55);
        }
      }
    }
  },
  mounted(){
  	document.querySelector(".coin").style.bottom = "calc(" + this.progress + "% - 25px)";
  	document.querySelector(".bar").style.height = this.progress + "%";
  	this.writer();
  }
}
</script>

<style>
</style>