/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_BASE_URLS, DEFAULT_HEADERS, REQUEST_TIMEOUT } from '@/config/api.config';

interface RequestOptions extends RequestInit {
  timeout?: number;
}

export class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async fetchWithTimeout(
    url: string,
    options: RequestOptions = {}
  ): Promise<Response> {
    const { timeout = REQUEST_TIMEOUT, ...fetchOptions } = options;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    const token = localStorage.getItem('r1c_broker_token')
    try {
      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal,
        headers: {
          ...DEFAULT_HEADERS,
          ...fetchOptions.headers,
          'Authorization': `Bearer ${token}`
        },
      });

      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error('Request timeout');
      }
      throw error;
    }
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        message: response.statusText,
      }));
      // Throw the full error data object to preserve validation errors
      const error: any = new Error(errorData.message || `HTTP Error: ${response.status}`);
      error.response = { data: errorData };
      throw error;
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json();
    }

    return response.text() as any;
  }

  async get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    const response = await this.fetchWithTimeout(`${this.baseUrl}${endpoint}`, {
      method: 'GET',
      ...options,
    });
    return this.handleResponse<T>(response);
  }

  async post<T>(
    endpoint: string,
    data?: any,
    options?: RequestOptions
  ): Promise<T> {
    const response = await this.fetchWithTimeout(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
    return this.handleResponse<T>(response);
  }

  async postFormData<T>(
    endpoint: string,
    formData: FormData,
    options?: RequestOptions
  ): Promise<T> {
    // For FormData, we need to bypass DEFAULT_HEADERS to avoid setting Content-Type
    const { timeout = REQUEST_TIMEOUT, headers, ...restOptions } = options || {};

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        body: formData,
        signal: controller.signal,
        headers: {
          // Only include Accept header, NOT Content-Type
          'Accept': 'application/json',
          ...headers,
        },
        ...restOptions,
      });

      clearTimeout(timeoutId);
      return this.handleResponse<T>(response);
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error('Request timeout');
      }
      throw error;
    }
  }

  async put<T>(
    endpoint: string,
    data?: any,
    options?: RequestOptions
  ): Promise<T> {
    const response = await this.fetchWithTimeout(`${this.baseUrl}${endpoint}`, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
    return this.handleResponse<T>(response);
  }

  async putFormData<T>(
    endpoint: string,
    formData: FormData,
    options?: RequestOptions
  ): Promise<T> {
    // For FormData, we need to bypass DEFAULT_HEADERS to avoid setting Content-Type
    const { timeout = REQUEST_TIMEOUT, headers, ...restOptions } = options || {};

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'PUT',
        body: formData,
        signal: controller.signal,
        headers: {
          // Only include Accept header, NOT Content-Type
          'Accept': 'application/json',
          ...headers,
        },
        ...restOptions,
      });

      clearTimeout(timeoutId);
      return this.handleResponse<T>(response);
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error('Request timeout');
      }
      throw error;
    }
  }

  async patch<T>(
    endpoint: string,
    data?: any,
    options?: RequestOptions
  ): Promise<T> {
    const response = await this.fetchWithTimeout(`${this.baseUrl}${endpoint}`, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
    return this.handleResponse<T>(response);
  }

  async delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    const response = await this.fetchWithTimeout(`${this.baseUrl}${endpoint}`, {
      method: 'DELETE',
      ...options,
    });
    return this.handleResponse<T>(response);
  }
}

// Create service instances for each microservice

export default ApiService;
