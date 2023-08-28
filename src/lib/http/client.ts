import axios from "axios";
import { HttpRequest, HttpResponse, RequestOptions } from "./types";

export function createHttpClient(
  baseURL: string,
  headers: Record<string, string> = {}
): HttpRequest {
  const axiosInstance = axios.create({
    baseURL,
    headers
  });

  async function request<T>(
    method: string,
    url: string,
    data?: unknown,
    config?: RequestOptions
  ): Promise<HttpResponse<T>> {
    try {
      const response = await axiosInstance.request<T>({
        method,
        url,
        data,
        ...config
      });

      const httpResponse: HttpResponse<T> = {
        path: url,
        headers: Object.fromEntries(
          Object.entries(response.headers).map(([key, value]) => [
            key,
            String(value)
          ])
        ),
        body: response.data,
        type: response.headers["content-type"]
      };

      return httpResponse;
    } catch (error) {
      if (error instanceof Error) {
        console.error(
          `The ${method} request to ${url} failed due to ${error.message}`
        );
        throw error;
      }
      throw error;
    }
  }

  return {
    get<T>(url: string, config?: RequestOptions): Promise<HttpResponse<T>> {
      return request<T>("get", url, undefined, config);
    }
  };
}
