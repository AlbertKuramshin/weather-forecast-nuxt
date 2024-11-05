<script setup lang="ts">
import WeatherIcon from '~/assets/images/WeatherIcon.vue';
</script>

<template>
  <div class="page-logo">
    <!-- <v-icon
      color="primary"
      size="32"
      icon="mdi-weather-cloudy-clock"
    /> -->
    <WeatherIcon />
    <span>Прогноз погоды</span>
  </div>
</template>

<style lang="scss" scoped>
.page-logo {
  display: flex;
  align-items: center;
  // gap: 12px;
}
</style>
