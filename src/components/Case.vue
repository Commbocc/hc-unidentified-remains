<script setup lang="ts">
import { cases } from "../lib/cases";
</script>

<template>
  <p v-if="!cases.data.length">There are currently no active cases.</p>

  <div v-else class="table-responsive mt-3">
    <div class="card mb-3" v-for="(remains, i) in cases.data" :key="i">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            v-if="remains.fields.image"
            :src="`${remains.fields.image}`"
            class="card-img-top"
            :alt="`${remains.fields.caseNumber}`"
            style="max-height: 500px; max-width: 500px; display: flex"
          />

          <p
            v-else
            class="card-text"
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
            "
          >
            No image
          </p>
        </div>

        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Case #{{ remains.fields.caseNumber }}</h5>

            <h6 class="card-subtitle mb-2 text-muted">
              Date: {{ remains.fields.dateFound }} | Location:
              {{ remains.fields.locationFound }}
            </h6>

            <p class="card-text">{{ remains.fields.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
