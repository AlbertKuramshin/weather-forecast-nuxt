import type { ILocation } from "~/types"

export const useLocation = () => {
  const locationStore = useLocationStore()
  const currentLocation = computed<ILocation | undefined>(() => locationStore.currentLocation)
  const locationList = computed<ILocation[]>(() => locationStore.locationList)

  
  const forecastItem = ref()

  function setLocation(location: ILocation) {
    locationStore.setCurrentLocation(location)
  }

  return {
    currentLocation,
    locationList,
    forecastItem,
    setLocation
  }
}