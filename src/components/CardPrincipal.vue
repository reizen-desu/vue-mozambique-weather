<template>
    <div  id="parent">
        <div>
            <!-- <h2 id="provincia" v-if="dados">{{ dados[0]}}</h2> -->
            <h2 v-if="dados">{{ dados[0] }}</h2>
            <img src="" alt="">
            <br>
            <br>
            <br>
            <br>
            <div id="graus">
                <h4><span>{{ dados[1] }}</span> ºC</h4>
                <h4><span>{{ dados[2] }}</span> ºC</h4>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "CardPrincipal",
        props: ["dados"],

        
       
}

</script>

<style scoped>

    #parent {
        box-shadow: 1px 1px 10px #4E3863;

}

div {
        margin: 20px 0;
        border-radius: 15px;
        text-align: center;
        color: white;
        background-color: #4E3863;
        width: 250px;
        /* height: 100px; */
        
    }



 

    #graus {
  /* margin-top: 30px; */
  display: flex;
  width: 70%;
  padding-left: 30px;
  justify-content: space-around;
}

</style>