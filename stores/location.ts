import { defineStore } from 'pinia'
import type { ILocation } from '~/types'

export const useLocationStore = defineStore('locationStore', () => {
  const locationList = ref<ILocation[]>([
    {
      id: 1,
      name: 'Москва',
      coords: {
        latitude: 55.751244,
        longitude: 37.618423
      }
    },
    {
      id: 2,
      name: 'Лондон',
      coords: {
        latitude: 51.509865,
        longitude: -0.118092
      }
    },
    {
      id: 3,
      name: 'Берлин',
      coords: {
        latitude: 52.520008,
        longitude: 13.404954
      }
    },
  ])

  const currentLocation = ref<ILocation>()

  function setCurrentLocation(location: ILocation) {
    currentLocation.value = location
  }

  return {
    locationList,
    currentLocation,
    setCurrentLocation
  }
}, { persist: true })