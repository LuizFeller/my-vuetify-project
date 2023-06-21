<script>
export default {
  data: () => ({
    email: "",
    rules1: [
      (value) => {
       if (!value) return "Please enter your email address!";
        if (!value.includes("@" + ".")) return "Invalid email";
        //if (/.+@.+./.test(value)) 
        //if (!value.required(/.+@.+\..+/.test(value))) return true
       // return "Valid email!";
      return true;
      },
    ],
    isFormValid: true,
    
    password: "",
    rules2: [
      (value) => {
        if (!value) return "Please enter your password!";
        const condition =
        value.length < 8 ||
        !/[!|@|#|$|%|^|&|*|(|)|-|_|+|=]/.test(value) ||
        !/[0-9]/.test(value);
        //console.log(condition);
        if (condition) {
          // return "No mínimo 8 caracteres, sendo 1 especial e 1 número";
          return "At least 8 characters, 1 special and 1 number!";
        }
        return true;
      },
    ],
    isFormValid: true,
    showPassword: ""
  }),
  methods: {
    handSubmit(event) {
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
        "bg-grey-lighten-1": this.$vuetify.display.smAndDown,
        "bg-grey-lighten-2": this.$vuetify.display.md,
        "bg-grey-lighten-3": this.$vuetify.display.lgAndUp,
      };
    },
  },
};
</script>
<template>
  <v-sheet width="600" class="" :class="sheetClasses">
    <v-form @submit.prevent v-model="isFormValid">
      <v-text-field
        v-model="email"
        :rules="rules1"
        label="Email"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="rules2"
        :type="showPassword ? 'text' : 'password'"
        label="Password"
      ></v-text-field>
      <v-checkbox-btn
      v-model="showPassword"
      label="Show password!"
      color="black">
      </v-checkbox-btn>
      <v-btn
        type="submit"
        color="light-green"
        :disabled="!isFormValid"
        @click="handSubmit"
        block
        class="mt-2 d-flex flex-md-column"
        >Submit</v-btn
      >
    </v-form>
  </v-sheet>
</template>

