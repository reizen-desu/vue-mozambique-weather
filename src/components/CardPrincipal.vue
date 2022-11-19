<template>
    <div>
        <h2 v-if="dados">{{ dados[0] }}</h2>
        <img src="" alt="">
        <h4>Tempo actual: <span>{{ dados[1] }} ºC</span></h4>
    </div>
</template>

<script>
export default {
    name: "CardPrincipal",
    props: ["dados"],
}
</script>

<style scoped>
div {
    margin: 50px 0;
    border-radius: 15px;
    text-align: center;
    color: white;
    background-color: #4E3863;
    width: 250px;
}

h4 {
    color: #C0C0C0;
}

h4 span {
    color: rgb(59, 118, 122);
}
</style>