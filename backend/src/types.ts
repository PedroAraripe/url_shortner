export type UrlInfoRequest = {
  shortned_param: string;
};

export type UrlRegisterRequest = {
  url_basic: string;
};

export type UserHasUrlRequest = {
  url_register_id: number;
  user_id: number;
};

export type CreateUrlControllerBody = {
  user_id: number;
  url_basic: string;
}

export type UrlShortnedParamRequest = {
  url_register_id: number;
};

export type UserRequest = {
  login: string;
  password: string;
};

export type MostAcessedUrlsResponse = {
  url_register_id: number;
  url_basic: string;
  accessed_times: number;
  shortned_param: string;
  created_on: Date;
};

export type UserLoggedHeader = {
  user_id: number;
};

export type UserHasUrlResponse = {
  url_register_id: number;
  user_id: number;
  url_basic: string;
  shortned_param: string;
  created_on: Date,
};

export type UrlInfoResponse = {
  url_register_id: number,
  url_basic: string,
  shortned_param: string,
  created_on: Date
};