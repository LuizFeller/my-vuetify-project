<script>

export default {
    data(){
        return{
            listName: '',
        }
    },
    methods: {
        handleCreateList(){
            this.$emit('new-list', this.listName)
        },
        closeModal(){
            this.$emit('close-modal')
        }
    }
}

</script>

<template>
    <v-card color="rgba(0, 0, 0, 0.5)" class="modal d-flex align-center justify-center">
        <v-card class="h-25 w-25 pa-4">
            <v-card-title>Nome da Lista</v-card-title>
            <v-text-field v-model="listName"></v-text-field>
            <v-actions class="d-flex justify-center">
                <v-btn @click="handleCreateList" class="w-25 mx-2">Criar</v-btn>
                <v-btn @click="closeModal" class="w-25 mx-2">Fechar</v-btn>
            </v-actions>
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