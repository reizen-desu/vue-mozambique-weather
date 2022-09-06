<template>
  
  <BarraPesquisa />
  <div id="card">
    <!-- Falta outros dois cards -->
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
    FooterVue,
    CardPrincipal,
    BarraPesquisa
  },
  props: {
    msg: String
  },

  data() {
    return {
      cidades: [
        "Maputo",
        "Xai-Xai",
        "Inhambane",
        "Beira",
        "Chimoio",
        "Tete",
        "Quelimane",
        "Nampula",
        "Pemba",
      ],
      dados1: [],
      dados2: [],
      dados3: [],
      interval: null,
      controlador: 0,
    };
  },
  methods: {
    renew() {
      if (this.controlador == 9) {
        this.controlador = 0;
        fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=Lichinga,MZ&units=metric&APPID=7e8b2fa8fa95ff3263ecf4158d59b26d"
        )
          .then((resp) => resp.json())
          .then((data) => {
            this.dados1[0] = data.name;
            this.dados1[1] = data.main.temp_min;
            this.dados1[2] = data.main.temp_max;
            this.dados1[3] = data.weather[0].description;
          })
          .catch((err) => console.log(err));
      } else {
        this.controlador = this.controlador + 3;
        for (let a = this.controlador - 3; a < this.controlador; a++) {
          fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
              this.cidades[a] +
              ",MZ&units=metric&APPID=7e8b2fa8fa95ff3263ecf4158d59b26d"
          )
            .then((resp) => resp.json())
            .then((data) => {
              if (a == 0 || a == 3 || a == 6) {
                this.dados1[0] = data.name;
                this.dados1[1] = data.main.temp_min;
                this.dados1[2] = data.main.temp_max;
                this.dados1[3] = data.weather[0].description;
              } else if (a == 1 || a == 4 || a == 7) {
                this.dados2[0] = data.name;
                this.dados2[1] = data.main.temp_min;
                this.dados2[2] = data.main.temp_max;
                this.dados2[3] = data.weather[0].description;
              } else if (a == 2 || a == 5 || a == 8) {
                this.dados3[0] = data.name;
                this.dados3[1] = data.main.temp_min;
                this.dados3[2] = data.main.temp_max;
                this.dados3[3] = data.weather[0].description;
              }
            })
            .catch((err) => console.log(err));
        }
      }
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
