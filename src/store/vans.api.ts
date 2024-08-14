import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { vansResponse } from "../models/api.iterface.ts"; // Define a service using a base URL and expected endpoints

// Define a service using a base URL and expected endpoints
export const vansApi = createApi({
  reducerPath: "vansApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getAllVans: builder.query<vansResponse[], null>({
      query: () => ({
        url: "vans",
      }),
      transformResponse: (response: { vans: vansResponse[] }) => response.vans,
    }),
    getVanById: builder.query<vansResponse, string | undefined>({
      query: (id) => ({
        url: `vans/${id}`,
      }),
      transformResponse: (response: { vans: vansResponse }) => response.vans,
    }),
    getVansForHost: builder.query<vansResponse[], null>({
      query: () => ({
        url: `host/vans`,
      }),
      transformResponse: (response: { vans: vansResponse[] }) => response.vans,
    }),
    getVansForHostById: builder.query<vansResponse, string | undefined>({
      query: (id) => ({
        url: `host/vans/${id}`,
      }),
      transformResponse: (response: { vans: vansResponse }) => response.vans,
    }),
  }),
});

export const {
  useGetVanByIdQuery,
  useGetAllVansQuery,
  useGetVansForHostQuery,
  useGetVansForHostByIdQuery,
} = vansApi;
