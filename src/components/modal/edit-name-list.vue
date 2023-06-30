<script>

export default {
    props: {
        id: String,
        name: String,
    },
    data() {
        return {
            newNameList: '',
        }
    },
    methods: {
        handleUpdateListName() {
            this.$emit('new-name-list', this.newNameList, this.id)
        },
        closeModal() {
            this.$emit('close-modal')
        }
    }
}

</script>

<template>
    <v-card color="rgba(0, 0, 0, 0.5)" class="modal d-flex align-center justify-center">
        <v-card class="w-50 pa-4">
            <!-- <v-card-subtitle>{{ id }}</v-card-subtitle> -->
            <v-card-title>Nome atual: {{ name }}</v-card-title>
            <v-text-field v-model="newNameList" placeholder="Novo Nome"></v-text-field>
            <v-action class="d-flex justify-center">
                <v-btn @click="handleUpdateListName" class="mx-15 my-5" color="light-green-lighten-2">
                    Atualizar
                </v-btn>
                <v-btn @click="closeModal" class="m-8 my-5" color="grey-darken-1">
                    Fechar
                </v-btn>
            </v-action>
        </v-card>
    </v-card>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0; right: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgb(0, 0, 0, 0.3);
}
</style>