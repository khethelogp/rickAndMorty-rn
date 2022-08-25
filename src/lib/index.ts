import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { CharacterModel, Data } from '@/types'

const BASE_URL = `https://rickandmortyapi.com/api/`

// Define a service using a base URL and expected endpoints
export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  tagTypes: ['Characters'],
  endpoints: builder => ({
    getAllCharacters: builder.query<Data[], number | void>({
      query: (page = 1) => `character?page=${page}`
    }),
    getCharacterByName: builder.query<CharacterModel, number>({
      query: id => `character/${id}`
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCharactersQuery, useGetCharacterByNameQuery } =
  rickAndMortyApi
