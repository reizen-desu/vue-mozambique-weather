<template>
    <div>
        <div id="parent">
            <h2 id="provincia" v-if="dados">{{ dados[0]}}</h2>
            <img src="" alt="">
            <br>
            <br>
            <br>
            <br>
            <div id="graus">
                <h4><span>{{ dados[1]}}</span>ºC</h4>
                <h4><span>{{ dados[2] }}</span>ºC</h4>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "CardPrincipal",
        
}

</script>

<style scoped>
    div {
        margin: 20px 0;
        border-radius: 15px;
        text-align: center;
        color: white;
        background-color: #4E3863;
        width: 250px;
        /* height: 100px; */
    }

    #provincia {
        text-align: center;
    }

    h4 {
        font-size: 15px;
    }

    h4 span {
        font-size: 23px;
    }

    #graus {
  /* margin-top: 30px; */
  display: flex;
  width: 70%;
  padding-left: 30px;
  justify-content: space-around;
}

</style>