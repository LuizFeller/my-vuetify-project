<template>
<v-card v-for="list in toDoLists" :key="list.id">
<v-card-title>{{  list.title }}

</v-card-title>

</v-card>teste hoje

</template>

<script>
import { toDoListApiMixin } from "@/api/toDoLists";
export default {
  mixins: [toDoListApiMixin],
  data() {
    return {
      toDoLists: []
    }
  },
  methods: {
    async getLists() {
      try {
        const { data } = await this.list();
        this.toDoLists = data;
        //console.log(data);
      } catch (err) {
        alert("Algo deu errado");
      }
    },
  },
  mounted() {
    this.getLists();
  },
};
</script>
