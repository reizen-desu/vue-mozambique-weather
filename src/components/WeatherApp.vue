<template>

  <BarraPesquisa @show-province="showProvince"></BarraPesquisa>

  <div id="card">
    <CardPrincipal :dados="dados1" />
    <CardPrincipal :dados="dados2" v-if="!province" />
    <CardPrincipal :dados="dados3" v-if="!province" />
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
      province: null,
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
            this.dados1[1] = data.main.temp;
            // this.dados1[2] = data.main.temp_max;
            this.dados1[3] = data.weather[0].main;
            console.log(data)
          })
          .catch((err) => console.log(err));
      } else {
        this.controlador = this.controlador + 3;
        for (let a = this.controlador - 3; a < this.controlador; a++) {
          fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            this.cidades[a] +
            ",MZ&units=metric&APPID=e3cebe94c098059265d182ddb3baa9ea"
          )
            .then((resp) => resp.json())
            .then((data) => {
              if (a == 0 || a == 3 || a == 6) {
                this.dados1[0] = data.name;
                this.dados1[1] = data.main.temp_min;
                this.dados1[2] = data.main.temp_max;
                this.dados1[3] = data.weather[0].main;
              } else if (a == 1 || a == 4 || a == 7) {
                this.dados2[0] = data.name;
                this.dados2[1] = data.main.temp_min;
                this.dados2[2] = data.main.temp_max;
                this.dados2[3] = data.weather[0].main;
              } else if (a == 2 || a == 5 || a == 8) {
                this.dados3[0] = data.name;
                this.dados3[1] = data.main.temp_min;
                this.dados3[2] = data.main.temp_max;
                this.dados3[3] = data.weather[0].main;
              }
            })
            .catch((err) => console.log(err));
        }
      }
    },

    showProvince(province) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        province +
        ",MZ&units=metric&APPID=e3cebe94c098059265d182ddb3baa9ea"
      )
        .then((resp) => resp.json())
        .then((data) => {
          this.dados1[0] = data.name;
          this.dados1[1] = data.main.temp_min;
          // this.dados1[2] = data.main.temp_max;
          this.dados1[3] = data.weather[0].main;
        })
        .catch((err) => console.log(err));

      this.province = province;
      // Stop the interval
      clearInterval(this.interval);
    },
  },
  mounted() {
    this.renew();
  },
  created() {
    this.interval = setInterval(() => {
      this.renew();
    }, 7000);
  },

};
</script>

<style>
#card {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}

#main-card {
  width: 250px;
}


@media only screen and (max-width: 800px) {

  #card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  #main-card {
    width: 450px;
    max-width: 100%;
  }

}
</style>
