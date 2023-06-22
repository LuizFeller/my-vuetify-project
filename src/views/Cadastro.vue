<script>
import { authApiMixin } from "@/api/auth";
export default {
  mixins: [authApiMixin],
  data: () => ({
    userName: "",
    rules1: [
      (value) => {
        if (!value) return "Please enter your username!";
        if (/.*[A-Z]/.test(value)) return "Just lowercase!";
        if (/.*[!|@|#|$|%|^|&|*|(|)|-|_|+|=]/.test(value))
          return "No special characters!";
        if (/.* /.test(value)) return "No empty space!";
        if (value.length < 3) return "At least 3 characters!";
        // return "Valid username!";
        return true;
      },
    ],

    email: "",
    rules2: [
      (value) => {
        if (!value) return "Please enter your email address!";
        if (!value.includes("@" && "." && "com")) return "Invalid email!";
        //if (/.+@.+./.test(value)) //return true
        //if (!value.required(/.+@.+\..+/.test(value))) return true
        return true;
      },
    ],
    showPassword: false,
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
          return "At least 8 characters, 1 special and 1 number!";
        }
        return true;
      },
    ],
    confirmPassword: "",
    isFormValid: true,
  }),

  methods: {
    async handlesSubmit() {
      const payload = {
        username: this.userName,
        email: this.email,
        password: this.password,
      };

      try {
        await this.register(payload);
        alert("usuário criado com sucesso");
        this.$router.push("/");
      } catch (err) {
        const status = err.response.status;
        if (status >= 500 && status < 600) {
          alert("Ocorreu um erro no servidor! Tente mais tarde");
        } else {
          alert("Algo deu errado. Pedimos desculpas");
        }
      }
    },
    //enviar os dados para api
    //console.log(this.isFormValid);

    rules4(value) {
      return value === this.password || "Passwords do not match!";
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
  <v-sheet width="600" class="mx-auto" :class="sheetClasses">
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
        :type="showPassword ? 'text' : 'password'"
      ></v-text-field>
      <v-text-field
        v-model="confirmPassword"
        :rules="[rules4]"
        label="Confirm Password!"
        :type="showPassword ? 'text' : 'password'"
      ></v-text-field>
      <v-checkbox
        v-model="showPassword"
        label="show password"
        color="black"
      ></v-checkbox>
      <v-btn
        type="submit"
        color="light-green"
        :disabled="!isFormValid"
        @click="handlesSubmit"
        block
        class="mt-2 d-flex flex-md-column"
        >Register</v-btn
      >
    </v-form>
  </v-sheet>
</template>
