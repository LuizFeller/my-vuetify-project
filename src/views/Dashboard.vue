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
    }
  },
  mounted() {
    this.getLists();
  },
};
</script>

<template>
  <div>
    <nav class="w-100 bg-blue d-flex justify-center">
      <v-btn @click="openNewList = true" variant="outlined ma-2">
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
        <v-btn color="blue" @click="handleDetailItens(list.id)">
          EDITAR
        </v-btn>
        <v-btn color="blue" @click="handleDetailItens(list.id)">
          DELETAR
        </v-btn>
      </v-card-actions>
    </v-card>


    <!-- DIALOG - ITENS IN LIST -->
    <v-dialog v-model="openDialog" width="auto" v-show="openDialog">
      <v-card>

        <v-card v-for="item in items" class="d-flex align-center">
          <v-card-title> {{ item.title }} </v-card-title>
          <v-card-text> {{ item.deadline }} </v-card-text>
          <v-card-text> {{ item.deadline }} </v-card-text>
          <v-card-text> {{ item.done }} </v-card-text>
        </v-card>

        <v-card-actions>
          <v-btn color="primary" block @click="openDialog = false">Close Dialog</v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>

    <!-- CRIAR NOVA LISTA -->
    <ModalNewList v-if="openNewList"></ModalNewList>

  </div>
</template>
