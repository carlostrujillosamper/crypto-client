import axios from "axios";

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
        headers: response.headers,
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
    },
    post<T, D>(
      url: string,
      data?: D,
      config?: RequestOptions
    ): Promise<HttpResponse<T>> {
      return request<T>("post", url, data, config);
    },
    patch<T, D>(
      url: string,
      data?: D,
      config?: RequestOptions
    ): Promise<HttpResponse<T>> {
      return request<T>("post", url, JSON.stringify(data), config);
    },

    put<T, D>(
      url: string,
      data?: D,
      config?: RequestOptions
    ): Promise<HttpResponse<T>> {
      return request<T>("put", url, data, config);
    }
  };
}
