import { baseAPI } from "./BaseAPI";
import { APIResponse } from "../models/APIResponse";
import { KYC_API } from './api.endpoints';
import { Kyc } from "@models/kyc/Kyc";
import { PagedContent } from "@models/PagedContent";
import queryString from "query-string";
import { AddKyc } from "@models/kyc/AddKyc";
import { UpdateKyc } from "@models/kyc/UpdateKyc";

export const kycAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getKycById: build.query<APIResponse<Kyc>, string>({
      query: (id: string) => ({
        url: `${KYC_API}/${id}`,
        method: 'GET'
      }),
      providesTags: ['Kyc'],
    }),
    searchKycs: build.query<APIResponse<PagedContent<Kyc>>, object>({
      query: (filters: object) => ({
        url: `${KYC_API}/q?${queryString.stringify(filters, { skipNull: true })}`,
        method: 'GET'
      }),
      providesTags: ['Kyc'],
    }),
    addKyc: build.mutation<APIResponse<Kyc>, AddKyc>({
      query: (dto: AddKyc) => ({
        url: KYC_API,
        method: 'POST',
        body: dto,
      }),
      invalidatesTags: [{ type: 'Kyc', id: 'LIST' }],
    }),
    updateKyc: build.mutation<APIResponse<Kyc>, UpdateKyc>({
      query: (dto: UpdateKyc) => ({
        url: KYC_API,
        method: 'PUT',
        body: dto,
      }),
      invalidatesTags: [{ type: 'Kyc', id: 'LIST' }],
    }),
    deleteKycById: build.mutation<APIResponse<Kyc>, string>({
      query: (id: string) => ({
        url: `${KYC_API}/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Kyc'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useAddKycMutation,
  useUpdateKycMutation,
  useGetKycByIdQuery,
  useSearchKycsQuery,
  useDeleteKycByIdMutation } = kycAPI;