import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API } from "./api.endpoints";

export const baseAPI = createApi({
    reducerPath:"baseAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API
    }),
    endpoints: () => ({}),
    refetchOnFocus: true,
    refetchOnReconnect: true,
    tagTypes: ["User", "Kyc", "Contact", "Media", "Document",]
})

