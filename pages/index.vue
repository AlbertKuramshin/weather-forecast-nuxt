<script setup lang="ts">
import { useDate } from 'vuetify';

const locationStore = useLocationStore()
const currentLocation = computed(() => locationStore.currentLocation)
const forecastStore = useForecastStore()
const forecastItem = computed(() => forecastStore.getForecast(currentLocation.value?.name as string));

const date = useDate()

const today = date.format(new Date(), 'fullDateTime24h')

</script>

<template>
  <div class="page-today">
    <div>
      Погода в городе
      <span class="font-weight-bold">{{ currentLocation?.name }}</span> на {{ today }}
    </div>
    <WeatherCard
      :currentW="forecastItem?.current"
      :locationName="forecastItem?.locationName" 
    />
  </div>
</template>

<style lang="scss" scoped>
.page-today {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
