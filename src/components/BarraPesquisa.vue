<template>
    <div id="principal">
            <form>
                <input type="text" name="pesquisar" id="texto"         placeholder="Pesquisar cidade específica">
                <input type="submit" value="Pesquisar" id="botao">
            </form>
    </div>
</template>

<script>
// import CardPrincipal from './CardPrincipal.vue';
    export default {
        name: "BarraPesquisa",
    }
</script>

<style scoped>
    #principal {
        color: white;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
        margin: 100px 0 0 0;
    }
    
    form {
        /* background-color: white; */
        padding: 5px;
        border: none;
        /* width: 70%; */
    }

    #texto {
        width: 40%;
        padding: 15px;
        border:none;
        border-radius: 2px;
        text-align: center;
    }
    
    #botao {
        /* margin: 10px; */
        border-radius: 5px;
        padding: 15px;
        border: none;
        background-color: #69465B;
        color: white;
        cursor: pointer;
        /* margin-right: 30px; */
    }



</style>