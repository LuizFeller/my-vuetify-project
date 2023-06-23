<script>

import { toDoListApiMixin } from "@/api/toDoLists";
import ModalNewList from '@/components/modal-new-list.vue'

export default {
  components: {
    ModalNewList,
  },

  mixins: [toDoListApiMixin],

  data() {
    return {
      lists: '',
      items: '',
      titleDialog: '',
      openDialog: false,
      openNewList: false,
    }
  },

  methods: {
    async getLists() {
      try {
        const { data } = await this.list();
        this.lists = data;
      } catch (err) {
        alert("Algo deu errado");
      }
    },
    async handleDetailItens(id) {
      try {
        this.openDialog = true
        const { data } = await this.detailList(id)
        this.items = data.items;
      } catch {
        alert("Deu erro... D:")
      }
    },
    async createNewList(title) {
      const { status } = await this.createList(title)
      this.openNewList = false

      console.log(status);

      if (status >= 200 && status < 300) {
        this.getLists()
        alert("Deu boa!")
      } else {
        alert("Deu erro")
      }

    },
    async handleDeleteItem(id) {
      const { status } = await this.deleteList(id);

      if (status >= 200 && status < 300) {
        this.getLists()
        alert("Deu boa!")
      } else {
        alert("Deu erro")
      }
    },


    /* METODO DE ESTILIZAÇÂO */
    btnColor(a) {
      console.log(a);
      return a == true ? 'success' : 'error'
    },
  },
  mounted() {
    this.getLists();
  },
};
</script>

<template>
  <div>
    <nav class="w-100 bg-blue d-flex justify-center">
      <v-btn @click="openNewList = true" variant="plain">
        CRIAR LISTA
      </v-btn>
    </nav>

    <v-card v-for="list in lists">
      <v-card-title> {{ list.title }} </v-card-title>
      <v-card-subtitle> {{ list.id }} </v-card-subtitle>
      <v-card-actions>
        <v-btn color="blue" @click="handleDetailItens(list.id)">
          DETALHE
        </v-btn>
        <v-btn color="blue">
          EDITAR
        </v-btn>
        <v-btn color="blue" @click="handleDeleteItem(list.id)">
          DELETAR
        </v-btn>
      </v-card-actions>
    </v-card>


    <!-- DIALOG - ITENS IN LIST -->

    <v-dialog v-model="openDialog" width="auto" v-show="openDialog">
      <v-card class="rounded-lg">
        <v-card v-for="item in items" class="d-flex align-center ma-2 pa-2 elevation-4">
          <v-card-title> {{ item.title }} </v-card-title>
          <v-card-text>{{ item.deadline }}</v-card-text>
          <v-card-text>{{ item.createdAt }}</v-card-text>
          <v-card-text>{{ item.updatedAt }}</v-card-text>
          <v-btn :color="btnColor(item.done)">Concluir</v-btn>
        </v-card>

        <v-card-actions>
          <v-btn color="primary" block @click="openDialog = false">Ok</v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>

    <!-- CRIAR NOVA LISTA -->
    <ModalNewList @new-list="createNewList" v-if="openNewList"></ModalNewList>

  </div>
</template>

<style></style>