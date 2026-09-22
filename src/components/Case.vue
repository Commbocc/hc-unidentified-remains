<script setup lang="ts">
import { ref } from "vue";
import { cases } from "../lib/cases";

const openId = ref<string | null>(null);

function toggleDetails(uid: string) {
  openId.value = openId.value === uid ? null : uid;
}
</script>

<template>
  <p v-if="!cases.data.length">There are currently no active cases.</p>

  <div
    v-else
    class="row row-cols-2 row-cols-sm-3 row-cols-lg-4 g-3 mt-3 align-items-start"
  >
    <div class="col" v-for="remains in cases.data" :key="remains.uid">
      <div
        class="card overflow-hidden cursor-pointer"
        @click="toggleDetails(remains.uid)"
      >
        <div class="ratio ratio-1x1 bg-body-secondary">
          <a
            v-if="remains.image?.url"
            :href="remains.image.url"
            target="_blank"
            rel="noopener noreferrer"
            @click.stop
          >
            <img
              :src="`${remains.image.url}?width=400`"
              class="object-fit-cover w-100 h-100"
              :alt="`Case #${remains.title}`"
            />
          </a>
          <span
            v-else
            class="d-flex align-items-center justify-content-center text-secondary small"
          >
            No photo
          </span>
        </div>

        <div class="card-body">
          <h5 class="card-title mb-1">Case #{{ remains.title }}</h5>
          <p class="card-text mb-1">
            <span class="fw-bold">Date found:</span>
            {{ remains.date_found }}
          </p>
          <p class="card-text mb-1">
            <span class="fw-bold">Location:</span>
            {{ remains.location_found }}
          </p>
          <button
            type="button"
            class="btn btn-link btn-sm p-0"
            :aria-expanded="openId === remains.uid"
            @click.stop="toggleDetails(remains.uid)"
          >
            {{ openId === remains.uid ? "Hide details" : "Details" }}
          </button>
          <div v-if="openId === remains.uid" class="mt-2">
            <p class="card-text mb-0">
              <span class="fw-bold">Description: </span
              >{{ remains.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
