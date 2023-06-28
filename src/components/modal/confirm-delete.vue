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
    <div class="container d-flex align-center justify-center">
        <v-card class="">
            <v-card-title>Deseja excluir o item <b>{{infos[1]}}</b>?</v-card-title>
            <v-actions>
                <v-btn @click="close" class="w-50" color="red-lighten-3">CANCELAR</v-btn>
                <v-btn @click="confirm" class="w-50" color="light-green-lighten-2">CONFIRMAR</v-btn>
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