import { apiSlice } from "./apiSlice"

export const tripApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchTrip: builder.query({
      query: (tripId) => `trip/${tripId}`,
    }),
    addTrip: builder.mutation({
      query: (formData) => ({
        url: "trip/postTrip",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      }),
    }),
    completedTrip: builder.mutation<any, { id: string; completed: boolean }>({
      query: ({ id, completed }) => ({
        url: `trip/tripUpdate/${id}`,
        method: "PUT",
        body: { completed: !completed },
      }),
    }),
    deleteTrip: builder.mutation({
      query: (id) => ({
        url: `trip/deleteTrip/${id}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const {
  useAddTripMutation,
  useCompletedTripMutation,
  useDeleteTripMutation,
  useFetchTripQuery,
} = tripApiSlice
