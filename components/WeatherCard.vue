<script setup lang="ts">
import ACloudIcon from '~/assets/images/animation/ACloudIcon.vue'
import type { Current } from '~/types/api';

const props = withDefaults(defineProps<{
  currentW: Current | undefined,
  locationName: string | undefined
}>(), {
  currentW: undefined,
  locationName: ''
})
const currentW = computed(() => props.currentW)
</script>

<template>
  <v-card
    v-if="currentW"
    max-width="368"
  >
    <v-card-item :title="props?.locationName">
      <template v-slot:subtitle>
        {{ currentW?.condition.text }}
      </template>
    </v-card-item>

    <v-card-text class="py-0">
      <v-row align="center" no-gutters>
        <v-col
          class="text-h2"
          cols="6"
        >
          {{ currentW?.temp_c ? Math.floor(currentW?.temp_c): Math.round(Number(currentW?.temp_c)) }}&deg;C
        </v-col>

        <v-col class="text-center" cols="6">
          <v-icon
            color="error"
            :icon="ACloudIcon"
            size="64"
            :style="{ transform: 'scale(2)' }"
          ></v-icon>
        </v-col>
      </v-row>
    </v-card-text>

    <div class="d-flex flex-wrap">
      <v-col cols="6">
        <v-list-item
          density="compact"
          prepend-icon="mdi-weather-windy"
        >
          <v-list-item-subtitle>{{ currentW?.wind_kph }} км/ч</v-list-item-subtitle>
        </v-list-item>
      </v-col>

      <v-col cols="6">
        <v-list-item
          density="compact"
          prepend-icon="mdi-cloud-percent"
        >
          <v-list-item-subtitle>{{ currentW?.humidity }}%</v-list-item-subtitle>
        </v-list-item>
      </v-col>
      
      <v-col cols="6">
        <v-list-item
          density="compact"
          prepend-icon="mdi-temperature-celsius"
        >
          <v-list-item-subtitle>{{ currentW?.feelslike_c }}</v-list-item-subtitle>
        </v-list-item>
      </v-col>

      <v-col cols="6">
        <v-list-item
          density="compact"
          prepend-icon="mdi-eye"
        >
          <v-list-item-subtitle>{{ currentW?.vis_km }}км</v-list-item-subtitle>
        </v-list-item>
      </v-col>
    </div>
  </v-card>
</template>

