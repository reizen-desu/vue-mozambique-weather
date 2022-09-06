<template>
  
  <BarraPesquisa />

  <div id="card">
    <CardPrincipal :dados="dados1"/>
    <CardPrincipal :dados="dados2"/>
    <CardPrincipal :dados="dados3"/>
  </div>

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
    BarraPesquisa,
    CardPrincipal,
    FooterVue,
  },

  data() {
    return {
      dados: [],
      interval: null,
    };
  },
  methods: {
    renew() {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Lichinga,MZ&units=metric&APPID=7e8b2fa8fa95ff3263ecf4158d59b26d"
        )
          .then((resp) => resp.json())
          .then((data) => {
            this.dados = data.name;
            this.dados = data.main.temp_min;
            this.dados = data.main.temp_max;
            this.dados = data.weather[0].description;
          })
      
    },
  },
  mounted() {
    // this.renew();
  },
  created() {
    this.interval = setInterval(() => {
      // this.renew();
    }, 2000);
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #card {
    /* width: 100%; */
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  }

  /* @media only screen and (max-width: 950px) {
  #card {
    justify-content: center;
    display: grid;
    grid-template-columns: 40% 40%;
  }
} */

@media only screen and (max-width: 600px) {
  #card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
