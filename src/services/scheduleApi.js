// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const scheduleApi = createApi({
  reducerPath: 'scheduleApi',
 baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/Schedules' }),

  endpoints: (builder) => ({
    addTodo: builder.mutation({
      query:(todolist) => ({
        url: `/${todolist.id}`,
        method:'PUT',
        body:todolist,
      }),
    }),
    addSchedule: builder.mutation({
      query:(body) => ({
        url: '/',
        method:'POST',
        body:body
      }),
    }),
    delSchedule: builder.mutation({
      query:(id) => ({
        url: `/${id}`,
        method:'DELETE',
        body:id
      }),
    }),
    EditSchedule: builder.mutation({
      query: (updatedSchedule) => ({
        url: `/${updatedSchedule.id}`,
        method: 'PUT',
        body: updatedSchedule,
      }),
    }),
    getAllSheduleList:builder.query({
      query:()=>"/",
    }),
    getSheduleListById:builder.query({
      query:(id)=>`/${id}`,
    }),
     }),
    })

export const { useGetAllSheduleListQuery,
  useGetSheduleListByIdQuery,
  useAddTodoMutation,
  useLazyGetSheduleListByIdQuery,
  useAddScheduleMutation,
  useLazyGetAllSheduleListQuery,
  useDelScheduleMutation,
  useEditScheduleMutation,
} = scheduleApi