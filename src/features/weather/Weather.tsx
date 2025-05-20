import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'decbf4de68a1ec3599574ea29cd786ac';

export const WeatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.openweathermap.org/data/2.5/'
    }),
    endpoints: (builder) => ({
        getWeather: builder.query({
            query: (city:string) => `weather?q=${city}&units=metric&appid=${API_KEY}&lang=ru`,
        })
    })
}) 

export const { useLazyGetWeatherQuery  } = WeatherApi;