<script>

export default {
    props:{
        id: String,
        name: String,
    },
    data(){
        return{
            newNameList: '',
        }
    },
    methods: {
        handleUpdateListName(){
            this.$emit('new-name-list', this.newNameList, this.id)
        }
    }
}

</script>

<template>
    <v-card color="rgba(0, 0, 0, 0.5)" class="modal d-flex align-center justify-center">
        <v-card class="h-25 w-50 pa-4">
            <v-card-subtitle>{{ id }}</v-card-subtitle>
            <v-card-title>Nome atual da lista: {{ name }}</v-card-title>
            <v-text-field v-model="newNameList" placeholder="Novo Nome"></v-text-field>
            <v-btn @click="handleUpdateListName">Atualizar</v-btn>
        </v-card>
    </v-card>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
}
</style>