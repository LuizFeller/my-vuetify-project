<script>
export default {
  data: () => ({
    userName: "",
    rules1: [
      (value) => {
        if (!value) return "Please enter your username!";
        //
        if (value.length <= 1) return;
        return "Valid username!";
      },
    ],
    isFormValid: true,

    email: "",
    rules2: [
      (value) => {
        if (!value) return "Please enter your email address!";
        if (!value.includes("@" + ".")) return true;
        //if (/.+@.+./.test(value)) //return true
        //if (!value.required(/.+@.+\..+/.test(value))) return true
        return "Valid email!";
      },
    ],
    isFormValid: true,

    password: "",
    rules3: [
      (value) => {
        if (!value) return "Please enter your password!";
        const condition =
          value.length < 8 ||
          !/[!|@|#|$|%|^|&|*|(|)|-|_|+|=]/.test(value) ||
          !/[0-9]/.test(value);
        console.log(condition);
        if (condition) {
          return "No mínimo 8 caracteres, sendo 1 especial e 1 número";
        }
        return true;
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
  computed: {
    sheetClasses() {
      return {
        "bg-grey": this.$vuetify.display.smAndDown,
        "bg-green": this.$vuetify.display.md,
        "bg-yellow": this.$vuetify.display.lgAndUp,
      };
    },
  },
};
</script>

<template>
  <v-sheet width="500" class="mx-auto" :class="sheetClasses">
    <v-form @submit.prevent v-model="isFormValid">
      <v-text-field
        v-model="userName"
        :rules="rules1"
        label="Username"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="rules2"
        label="Email"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="rules3"
        label="Password"
      ></v-text-field>
      <v-btn
        type="submit"
        color="black"
        :disabled="isFormValid"
        @click="handSubmit"
        block
        class="mt-2 d-flex flex-md-column"
        >Submit</v-btn
      >
    </v-form>
  </v-sheet>
</template>
