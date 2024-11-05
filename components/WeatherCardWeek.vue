<script setup lang="ts">
import { useDate } from 'vuetify';
import ACloudIcon from '~/assets/images/animation/ACloudIcon.vue'
import type { Forecastday } from '~/types/api';

const props = withDefaults(defineProps<{
  forecastDay:  Forecastday | undefined,
  locationName: string | undefined
}>(), {
  forecastDay: undefined,
  locationName: ''
})
const forecastDay = computed(() => props.forecastDay)
const date = useDate() 
const weekDay = computed(() => date.format(forecastDay?.value?.date, 'weekdayShort'))
</script>

<template>
  <v-card
    v-if="forecastDay"
    max-width="368"
  >
    <v-card-item :title="weekDay">
      <template v-slot:subtitle>
        {{ forecastDay?.day.condition.text }}
      </template>
    </v-card-item>

    <v-card-text class="py-0">
      <v-row align="center" no-gutters>
        <v-col
          class="text-h4"
          cols="6"
        >
          {{ forecastDay?.day.avgtemp_c }}&deg;C
        </v-col>

        <v-col class="text-end" cols="6">
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
          <v-list-item-subtitle>{{ forecastDay?.day.maxwind_kph }} км/ч</v-list-item-subtitle>
        </v-list-item>
      </v-col>

      <v-col cols="6">
        <v-list-item
          density="compact"
          prepend-icon="mdi-cloud-percent"
        >
          <v-list-item-subtitle>{{ forecastDay?.day.avghumidity }}%</v-list-item-subtitle>
        </v-list-item>
      </v-col>
      
      <v-col cols="6">
        <v-list-item
          density="compact"
          prepend-icon="mdi-temperature-celsius"
        >
          <v-list-item-subtitle>
            {{ forecastDay?.day.mintemp_c }} - {{ forecastDay?.day.maxtemp_c }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-col>

      <v-col cols="6">
        <v-list-item
          density="compact"
          prepend-icon="mdi-eye"
        >
          <v-list-item-subtitle>{{ forecastDay?.day.avgvis_km }}км</v-list-item-subtitle>
        </v-list-item>
      </v-col>
    </div>
  </v-card>
</template>

