import axios, { AxiosResponse } from "axios";
const instance = axios.create({
  withCredentials: true,
  baseURL: " https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "5f4f3672-2791-4ff7-a8bb-7dec6466332c",
  },
});
type CommonResponse<T = []> = {
  error: string | null;
  items: T;
  totalCount: number;
};

export type CommonResponse1<T = {}> = {
  data: T;
  fieldsErrors: string[];
  messages: string[];
  resultCode: number;
};
export const usersAPI = {
  getUsers: (currenPage = 1, pageSize = 10) => {
    // return instance.get<CommonResponse<any>>(`users?page=${currenPage}&count=${pageSize}`)
    return instance
      .get<
        CommonResponse,
        AxiosResponse<CommonResponse>
      >(`users?page=${currenPage}&count=${pageSize}`)
      .then((res) => res.data);
  },

  unfollow: (userId: number) => {
    return instance.delete<CommonResponse1, AxiosResponse<CommonResponse1>>(
      `follow/${userId}`,
    );
  },

  follow: (userId: number) => {
    return instance.post<CommonResponse1, AxiosResponse<CommonResponse1>>(
      `follow/${userId}`,
    );
  },
  /*  getProfile(userId: string) {
    return profileAPI.getProfile(userId)
  }*/
};
