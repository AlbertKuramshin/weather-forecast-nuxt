export const useWeatherApi = <T>(locationName: MaybeRefOrGetter) => {
  const config = useRuntimeConfig();
  const API_KEY = config.public.API_KEY;
  const BASE_URL = config.public.API_BASE_URL as string;

  return useFetch<T>(`${BASE_URL}/forecast.json`, {
    query: {
      key: API_KEY,
      q: locationName,
      days: 7,
      lang: 'ru'
    },
    dedupe: 'cancel',
    onResponseError({ response }) {
      throw createError({
        message: response._data.error.message,
        statusCode: response?.status,
        data: response._data.error,
      });
    },
  });
};