<script setup lang="ts">
const locationStore = useLocationStore()
const currentLocation = computed(() => locationStore.currentLocation)
const forecastStore = useForecastStore()
const forecastItem = computed(() => forecastStore.getForecast(currentLocation.value?.name as string));
const forecastDays = computed(() => forecastItem.value?.forecast?.forecastday)


</script>

<template>
  <div class="page-week">
    <div>
      Погода на неделю в городе
      <span class="font-weight-bold">{{ currentLocation?.name }}</span>
    </div>
    <div class="page-week__cards">
      <WeatherCardWeek
        v-for="forecastDay in forecastDays"
        :forecast-day="forecastDay"
        :location-name="forecastItem?.locationName" 
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-week {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__cards {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 8px;
  }
}
</style>
