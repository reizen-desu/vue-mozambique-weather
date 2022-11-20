<template>
    <div id="main-card">
        <h2 v-if="dados">{{ dados[0] }}</h2>
        <div id="icon">
            <div v-if="dados[3] == 'Rain'">🌧️</div>
            <div v-if="dados[3] == 'Clouds'">🌥️</div>
            <div v-if="dados[3] == 'Clear'">☀️</div>
        </div>
        <h4>Tempo actual: <span>{{ dados[1] }} ºC</span></h4>
    </div>
</template>

<script>
export default {
    name: "CardPrincipal",
    props: ["dados"],
}
</script>

<style>
#main-card {
    margin: 25px 0;
    border-radius: 10px;
    text-align: center;
    color: white;
    background-color: #4E3863;
}

#main-card h4 {
    color: #C0C0C0;
}

#main-card h4 span {
    color: rgb(59, 118, 122);
}

#main-card #icon {
    text-align: center;
    font-size: 120px;
    display: block;
}
</style>