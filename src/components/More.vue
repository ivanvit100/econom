<template>
  <div id="More">
    <nav>
      <h1>Конкурсы рубля</h1>
      <h3>Факультет экономики ЕИ КФУ</h3>
      <img src="@/assets/line.png" alt="logo" id="logo">
    </nav>
    <h2>Список направлений</h2>
  </div>
</template>

<script>
export default{
  name: 'More',
  props: ['progress'],
  data(){
  	return{
  	}
  },
  methods:{
    home: function(){
      this.$router.push('Main')
    }
  },
  mounted(){
  }
}
</script>

<style>
</style>