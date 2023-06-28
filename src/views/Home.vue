<script>

import { toDoListApiMixin } from "@/api/toDoLists";
import { toDoItemsApiMixin } from "@/api/toDoItems"

import ModalNewList from '@/components/modal/new-list.vue'
import EditListTitle from '@/components/modal/edit-name-list.vue'
import Loading from '@/components/Loading.vue'

import Summary from "@/components/Summary.vue";
import confirmDelete from "@/components/modal/confirm-delete.vue";


export default {
  components: {
    ModalNewList,
    EditListTitle,
    Loading,
    Summary,
    confirmDelete
  },

  mixins: [toDoListApiMixin, toDoItemsApiMixin],

  data() {
    return {
      lists: '',
      items: '',
      titleDialog: '',
      openDialog: false,
      openNewList: false,

      showModalEditList: false,
      currenteId: '',
      currentTitle: '',

      loading: false,
      showModalSummary: false,
      summaryInfos: '',

      deleteModalDeleteInfos: [],
      showModalDeleteInfos: '',
    }
  },

  methods: {
    async getLists() {
      this.loading = true
      try {
        const { data } = await this.list();
        this.lists = data;
      } catch (err) {
        alert("Algo deu errado");
      } finally {
        this.loading = false
      }
    },

    createNewList(title) {
      this.handleWithResponse(this.createList(title))
      this.openNewList = false
    },

    openDeleteConfirmModal(id, title) {
      this.deleteModalDeleteInfos = [id, title]
      this.showModalDeleteInfos = true
    },
    async handleDeleteItem(id) {
      this.showModalDeleteInfos = false
      this.handleWithResponse(this.deleteList(id))
    },

    /* FUNÇÂO PARA EDITAR NOME DA LIST */
    openModalUpdateList(id, title) {
      this.currenteId = id
      this.currentTitle = title
      this.showModalEditList = true
    },
    handleEditNameList(newName, id) {
      this.handleWithResponse(this.editNameList(id, newName))
      this.showModalEditList = false
    },


    /* FUNÇÂO QUE TRATA OS ERROS */
    async handleWithResponse(promise) {
      try {
        this.loading = true
        return await promise
      } catch {
        alert("Algo deu errado :(")
      } finally {
        this.getLists()
        this.loading = false
      }
    },

    /* REDIRECIONA PARA TELA DE DETALHE DA LISTA */
    RedirectDetailItem(id) {
      this.$router.push(`/${id}`)
    },

    /* MONTA INFORMAÇÂO DE COMPONENTE RESUMO */
    async HandleSummary() {
      const res = await this.handleWithResponse(this.GetAllItens())
      this.summaryInfos = res.data
      this.showModalSummary = true
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
      <v-btn @click="openNewList = true" variant="plain">
        CRIAR LISTA
      </v-btn>
      <v-btn @click="HandleSummary" variant="plain">
        RESUMO
      </v-btn>
    </nav>


    <!-- COMPONENTE EM POTENCIAL -->
    <v-card v-for="list in lists">
      <v-card-title> {{ list.title }} </v-card-title>
      <v-card-subtitle> {{ list.id }} </v-card-subtitle>
      <v-card-actions>
        <v-btn color="blue" @click="RedirectDetailItem(list.id)">
          DETALHE
        </v-btn>
        <v-btn color="blue" @click="openModalUpdateList(list.id, list.title)">
          EDITAR
        </v-btn>
        <v-btn color="blue" @click="openDeleteConfirmModal(list.id, list.title)">
          DELETAR
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- CRIAR NOVA LISTA -->
    <ModalNewList @new-list="createNewList" @close-modal="this.openNewList = false" v-if="openNewList"></ModalNewList>

    <!-- MODAL DE EDITAR LISTA -->
    <EditListTitle v-if="showModalEditList" @new-name-list="handleEditNameList"
      @close-modal="this.showModalEditList = false" :id="this.currenteId" :name="this.currentTitle"></EditListTitle>

    <!-- LOADING MODAL -->
    <Loading v-if="loading"></Loading>

    <!-- SUMMARY COMPONENT -->
    <Summary :summaryInfos="this.summaryInfos" @close-modal="this.showModalSummary = false" v-if="showModalSummary">
    </Summary>

    <!-- MODAL DE CONFIRMAÇÂO DE DELEÇÂO -->
    <confirmDelete v-if="showModalDeleteInfos" :infos="this.deleteModalDeleteInfos"
      @close="this.showModalDeleteInfos = false" @confirm="handleDeleteItem"></confirmDelete>

  </div>
</template>

<style></style>