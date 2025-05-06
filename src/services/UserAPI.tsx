import { baseAPI } from "./BaseAPI";
import { APIResponse } from "../models/APIResponse";
import { USER_API } from './api.endpoints';
import { UpdateUser } from "@models/user/UpdateUser";
import { User } from "@models/user/User";
import { AddUser } from "@models/user/AddUser";
import { PagedContent } from "@models/PagedContent";
import queryString from "query-string";

export const userAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getUserById: build.query<APIResponse<User>, string>({
      query: (id: string) => ({
        url: `${USER_API}/${id}`,
        method: 'GET'
      }),
      providesTags: ['User'],
    }),
    searchUsers: build.query<APIResponse<PagedContent<User>>, object>({
      query: (filters: object) => ({
        url: `${USER_API}/q?${queryString.stringify(filters, { skipNull: true })}`,
        method: 'GET'
      }),
      providesTags: ['User'],
    }),
    addUser: build.mutation<APIResponse<User>, AddUser>({
      query: (dto: AddUser) => ({
        url: USER_API,
        method: 'POST',
        body: dto,
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
    updateUser: build.mutation<APIResponse<User>, UpdateUser>({
      query: (dto: UpdateUser) => ({
        url: USER_API,
        method: 'PUT',
        body: dto,
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
    deleteUserById: build.mutation<APIResponse<User>, string>({
      query: (id: string) => ({
        url: `${USER_API}/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['User'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useAddUserMutation,
  useUpdateUserMutation,
  useGetUserByIdQuery,
  useSearchUsersQuery,
  useDeleteUserByIdMutation } = userAPI;