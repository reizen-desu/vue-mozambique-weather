<template>
    <div>
        <h2 v-if="dados">{{ dados[0] }}</h2>
        <div id="icon">
            <div v-if="dados[3] == 'Rain'" id="rain"></div>
            <div v-if="dados[3] == 'Clouds'" id="clouds"></div>
            <div v-if="dados[3] == 'Clear'" id="clear"></div>
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

<style scoped>
div {
    margin: 25px 0;
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

#icon {
    text-align: center;
    font-size: 100px;
    display: block;
}

#rain::after {
    content: "🌧️";
}

#clouds::after {
    content: "🌥️";
}

#clear::after {
    content: "☀️";
}
</style>