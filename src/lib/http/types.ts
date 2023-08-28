import { AxiosRequestConfig } from "axios";

export interface HttpRequest {
  get<T>(url: string, config?: RequestOptions): Promise<HttpResponse<T>>;
  post<T, D>(
    url: string,
    data?: D,
    config?: RequestOptions
  ): Promise<HttpResponse<T>>;
  patch<T, D>(
    url: string,
    data?: D,
    config?: RequestOptions
  ): Promise<HttpResponse<T>>;
  put<T, D>(
    url: string,
    data?: D,
    config?: RequestOptions
  ): Promise<HttpResponse<T>>;
}

export interface HttpResponse<T> {
  path: string;
  headers: Record<string, string>;
  body: T;
  type: string;
}

export interface RequestOptions extends AxiosRequestConfig {
  responseType: ResponseType;
}

export enum ResponseType {
  Json = "json",
  ArrayBuffer = "arraybuffer",
  Blob = "blob",
  Document = "document",
  Text = "text",
  Stream = "stream"
}

export interface Error {
  message: string;
}
