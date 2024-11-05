import { defineStore } from 'pinia'
import type { Forecast, Current, WeatherAPIForecast, IForecastStore } from '~/types/api'



export const useForecastStore = defineStore('forecastStore', () => {
  const forecasts = ref<IForecastStore[]>([])
  const allForecasts = computed(() => forecasts.value)
  // const getForecast = (locationName: string) => computed<IForecastStore | undefined>
  //   (() => forecasts.value.find(f => f.locationName === locationName))

  async function addForecast(locationName: string) {
    try {
      const { data } = await useWeatherApi<WeatherAPIForecast>(locationName)
      if (data.value) {
        const forecastItem = {
          locationName: locationName,
          forecast: data.value?.forecast as Forecast,
          current: data.value?.current as Current
        }
        forecasts.value.push(forecastItem)
      }
    } catch (e) {
      console.error(e);
    }
  }

  function getForecast(locationName: string): IForecastStore | null {
    if (!locationName) return null;
    const forecastItem = forecasts.value
      .find(f => f.locationName === locationName)
    return forecastItem || null
  }

  return {
    allForecasts,
    forecasts,
    getForecast,
    addForecast
  }
})