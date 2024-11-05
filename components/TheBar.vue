<script setup lang="ts">
import type { ILocation } from '~/types';

const locationStore = useLocationStore()
const currentLocation = computed(() => locationStore.currentLocation)
const locationList = computed(() => locationStore.locationList)
const selectedLocation = ref<ILocation | undefined>(currentLocation.value);
const forecastStore = useForecastStore()
const forecastItem = computed(() => forecastStore.getForecast(currentLocation.value?.name as string));

watch(currentLocation, async (newLoc, oldLoc) => {
  if (newLoc?.name !== oldLoc?.name) {
    if (!forecastItem.value?.locationName) {
      forecastStore.addForecast(newLoc?.name as string)
    }
  }
}, { immediate: true })

function askPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError)
  }
}

function showPosition({ coords }: Partial<GeolocationPosition>) {
  console.log(coords)
}

function showError() {
  console.log('error')
}

onMounted(() => {
  askPosition()
})
</script>

<template>
  <v-app-bar>
    <v-row
      justify="space-between"
      align="center"
      class="bar-row"
    >
      <v-col>
        <page-logo />
      </v-col>
      <v-spacer />
      <v-col cols="4">
        <v-select
          v-model="selectedLocation"
          :items="locationList"
          item-title="name"
          item-value="id"
          density="compact"
          variant="outlined"
          hide-details
          return-object
          placeholder="Выберите город"
          @update:model-value="locationStore.setCurrentLocation"
        />
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.bar-row {
  padding: 0 16px;
}
</style>