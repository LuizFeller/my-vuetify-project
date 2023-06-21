<template>
  <v-app>
    <v-container
      class="d-flex flex-column justify-center align-center text-center h-100"
    >
      <div fixed-tabs class="d-flex justify-space-evenly">
        <router-link to="/" class="w-200">
          <v-tab class="text-black" value="Input"> Login </v-tab>
        </router-link>
        <router-link to="/register" class="w-200">
          <v-tab class="text-black" value="Register">
            Register
          </v-tab>
        </router-link>
      </div>

      <v-card class="">
        <v-main class="">
          <router-view></router-view>
        </v-main>
      </v-card>
    </v-container>
  </v-app>
</template>

<script setup></script>
