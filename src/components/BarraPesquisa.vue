<template>
    <div id="principal">
        <form>
            <input v-on:click="showProvinces()" type="text" name="pesquisar" id="texto"
                placeholder="Pesquisar cidade específica">
            <input type="submit" value="Pesquisar" id="botao">
        </form>
    </div>
</template>

<script>
// import CardPrincipal from './CardPrincipal.vue';
export default {
    name: "BarraPesquisa",

    methods: {
        showProvinces() {
            console.log("Tenho que adicionar as provincias como sugestao ao clicar na barra...");
        }
    }
}
</script>

<style scoped>
#principal {
    color: white;
    text-align: center;
    white-space: nowrap;
    width: 100%;
    margin: 100px 0 0 0;
}

form input {
    padding: 15px;
}

#texto {
    width: 40%;
    border-radius: 5px 0 0 5px;
    text-align: center;
}

#botao {
    border: none;
    background-color: #69465B;
    color: white;
    cursor: pointer;
}
</style>