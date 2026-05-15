<script setup lang="ts">
import { cases } from "../lib/cases";
</script>

<template>
  <p v-if="!cases.data.length">There are currently no active cases.</p>

  <div v-else class="table-responsive mt-3">
    <div class="card mb-3" v-for="(remains, i) in cases.data" :key="i">
      <div class="row g-0">
        <div class="col-md-4">
          <a
            v-if="remains.image?.url"
            :href="`${remains.image.url}`"
            target="_blank"
          >
            <img
              :src="`${remains.image.url}?width=400`"
              class="card-img-top"
              :alt="`${remains.title}`"
            />
          </a>

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
            <h5 class="card-title">Case #{{ remains.title }}</h5>

            <h6 class="card-subtitle mb-2 text-muted">
              Date: {{ remains.date_found }} | Location:
              {{ remains.location_found }}
            </h6>

            <p class="card-text">{{ remains.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
