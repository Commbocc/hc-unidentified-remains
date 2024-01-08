<script setup lang="ts">
import { cases, fetchCases } from "./lib/cases";
import Case from "./components/Case.vue";

fetchCases();

const containerClass = import.meta.env.DEV
  ? "py-5 container"
  : "container-fluid";
</script>

<template>
  <div v-if="cases.loading" class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <article v-else :class="containerClass">
    <Case />
  </article>
</template>
