<script>

export default {
    data(){
        return{
            itemName: '',
            deadLineDate: '',
            deadLineHour: '',           
        }
    },
    methods: {
        handleCreateItemList(){
            const formatedDate = `${this.deadLineDate}T${this.deadLineHour}:00.000Z`
            this.$emit('new-item', this.itemName, formatedDate)
        }
    }
}

</script>

<template>
    <v-card color="rgba(0, 0, 0, 0.5)" class="modal d-flex align-center justify-center">
        <v-card class="w-25 pa-4">
            <v-card-title>Nome da Tarefa</v-card-title>
            <v-text-field v-model="itemName"></v-text-field>
            <v-text-field v-model="deadLineDate" type="date"></v-text-field>
            <v-text-field v-model="deadLineHour" type="time"></v-text-field>
            <v-btn @click="handleCreateItemList">Criar</v-btn>
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