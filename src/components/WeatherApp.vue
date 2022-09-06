<template>
  
<BarraPesquisa />
  <div class="hello">
    <h1>{{ msg }}</h1>


  </div>

  <CardPrincipal />
  <FooterVue />
</template>

<script>
// Importar files externos
import FooterVue from './Footer.vue';
import CardPrincipal from './CardPrincipal.vue';
import BarraPesquisa from './BarraPesquisa.vue';


export default {
  name: 'WeatherApp',
  components: {
    FooterVue,
    CardPrincipal,
    BarraPesquisa
},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
