import axios, { AxiosRequestConfig, Method, AxiosPromise } from 'axios';
import queryString from 'query-string';
import { RequestProps, Headers } from 'apis/types';

/////////////////////////////////////////
/*             utils function           */
/////////////////////////////////////////
const buildHeader = (headers: Headers): Headers => {
  return {
    Accept: 'application/json, text/html',
    'Content-Type': 'application/json',
    ...headers,
  };
};

const request = <T>(props: RequestProps, method: Method): AxiosPromise<T> => {
  const { url, withCredentials, headers, query, body, cancelToken, responseType } = props;

  const strQuery = queryString.stringify(query || {}, { encode: true });

  const apiURL = `${url}${strQuery ? `?${strQuery}` : ''}`;

  const axiosOptions: AxiosRequestConfig = {
    url: apiURL,
    method,
    withCredentials,
    headers: buildHeader(headers),
    data: body,
    cancelToken,
    responseType,
  };

  return axios(axiosOptions);
};

const API = {
  get: <T>(props: RequestProps): AxiosPromise<T> => request<T>(props, 'GET'),
};

export default API;
