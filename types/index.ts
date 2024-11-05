export interface ILocation {
  id: number
  name: string
  coords: ICoords
}

export interface ICoords {
  latitude: number
  longitude: number
}

export interface ICurrentW {
  weather: {
    main: string
    description: string
  }[]
  main: {
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
    gust: number
  }
  name: string

}

export interface ITemperature {
  tempC: number
  tempF: number
}

export interface ICondition {
  name: string
  icon: string
}

export interface IWeather extends ITemperature {
  condition: ICondition
}

export interface IForecastDay extends IWeather {
  date: number
  weekday: string
  hour: {
    time: number
    tempC: number
    tempF: number
    condition: ICondition
  }[]
}

export interface IForecast {
  location: {
    name: string
    localDate: number
    timezone: string
  }
  current: { date: number } & IWeather
  day: IForecastDay[]
}

export type IWeatherGroups = {
  id:
    | 'sunny'
    | 'clear-cloudy'
    | 'partly-cloudy'
    | 'cloudy'
    | 'drizzle'
    | 'showers'
    | 'thunderstorm'
    | 'snow'
    | 'sleet'
    | 'windy'
    | 'hail'
    | 'tornado'
    | 'isolated-thunderstorm'
    | 'snow-flurries'
    | 'mostly-cloudy'
  name: string
  codes: number[]
}[]