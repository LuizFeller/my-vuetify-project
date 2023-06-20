<!-- <script>
export default {
  data: () => ({
    firstName: "",
    banana: [
      (value) => {
        if (!value) return "Please say something";
        if (!value.includes("")) return "You must enter a first name.";
        return true;
      },
    ],
    isFormValid: true,
  }),
  methods: {
    handdledSubmit(event) {
      event.preventDefautl();
      if (!this.isFormValid) {
        alert("Preencha dereito, por favor!");
        return;
      }
      //enviar os dados para api
      console.log(this.isFormValid);
    },
  },
};
</script>

<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent v-model="isFormValid">
      <v-text-field
        v-model="firstName"
        :rules="banana"
        label="Full name"
      ></v-text-field>
      <v-btn
        type="submit"
        :disabled="isFormValid"
        @click="handSubmit"
        block
        class="mt-2"
        >Submit</v-btn
      >
    </v-form>
  </v-sheet>
</template>
 -->