<script>
export default{
    props:{
        infos: Array
    },
    methods:{
        close(){
            this.$emit('close')
        },
        confirm(){
            this.$emit('confirm', this.infos[0])
        }
    }
} 

</script>

<template>
    <container>
        
    </container>
    <div class="container d-flex align-center justify-center">
        <v-card class="">
            <v-card-title>Deseja excluir a Lista: <b>{{infos[1]}}</b>?</v-card-title>
            <v-actions>
                <v-btn @click="confirm" class="mx-10 my-5" color="grey-lighten-2">CONFIRMAR</v-btn>
                <v-btn @click="close" class="mx-10 my-5" color="grey-lighten-2">CANCELAR</v-btn>
            </v-actions>
        </v-card>

    </div>
</template>

<style scoped>
.container{
    position: fixed;
    top: 0; right: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgb(0, 0, 0, 0.3);
}
</style>