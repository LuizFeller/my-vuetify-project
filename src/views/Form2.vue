<!-- <script>
export default {
  data: () => ({
    email: "",
    rules1: [
      (value) => {
        if (!value) return "Please enter your email address";
        if (!value.includes("@" + "." + "com")) return;
        return "Valid email!";
      },
    ],
    isFormValid: true,
    password: "",
    rules2: [
      (value) => {
        if (!value) return "Please enter your password";
        //mínimo 8 caracteres, conter 1 caractere especial e 1 número
        if (!value.includes((v) => v.length >= 8 + "#" + "!")) return;
        return "Valid password!";
      },
    ],
    isFormValid: true,
  }),
  methods: {
    handdledSubmit(event) {
      event.preventDefautl();
      if (!this.isFormValid) {
        alert("Preencha direito, por favor!");
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
        v-model="email"
        :rules="rules1"
        label="Email"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="rules2"
        label="Password"
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