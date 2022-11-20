<template>
    <div id="container">
        <v-select v-model="selected" :options="provinces" label="name" id="search-text">
        </v-select>
        <input type="submit" value="Pesquisar" id="search-button" @click="showProvince()">
    </div>
</template>

<script>
// import CardPrincipal from './CardPrincipal.vue';
export default {
    name: "BarraPesquisa",
    data() {
        return {

            selected: null,
            provinces: [
                'Maputo',
                'Xai-Xai',
                'Pemba',
                'Inhambane',
                'Chimoio',
                'Nampula',
                'Lichinga',
                'Beira',
                'Tete',
                'Quielimane',
            ],
        }
    },

    methods: {
        showProvince() {
            if (this.selected) {
                // this.$emit('show-province', this.selected);
                console.log("Provincia selecionada: " + this.selected);
            }
            else {
                console.log("Nenhuma provincia selecionada");
                // Sends an alert
                alert("Choose a province first");
            }
        }
    }
}
</script>

<style scoped>
#container {
    text-align: center;
    white-space: nowrap;
    margin: 100px 0 50px;
}

#search-text {
    display: inline-block;
    background-color: white;
    width: 40%;
    border-radius: 5px 0 0 5px;
    text-align: center;
    padding: 5.5px 0;
}

#search-button {
    border: none;
    background-color: #69465B;
    color: white;
    font-weight: 600;
    cursor: pointer;
    padding: 15px;
    border-radius: 0 5px 5px 0;
}
</style>