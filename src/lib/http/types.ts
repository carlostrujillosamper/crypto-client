import { AxiosRequestConfig } from "axios";

export interface HttpRequest {
  get<T>(url: string, config?: RequestOptions): Promise<HttpResponse<T>>;
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
