import axios, { AxiosInstance, AxiosError } from 'axios';
import type { NubisClientConfig, ApiError } from './types';

export class NubisError extends Error {
  public status?: number;
  public code?: string;
  public originalError?: any;

  constructor(message: string, status?: number, code?: string, originalError?: any) {
    super(message);
    this.name = 'NubisError';
    this.status = status;
    this.code = code;
    this.originalError = originalError;
  }
}

export class NubisClient {
  private client: AxiosInstance;
  private apiKey: string;

  constructor(config: NubisClientConfig) {
    if (!config.apiKey) {
      throw new Error('API key is required');
    }

    this.apiKey = config.apiKey;
    this.client = axios.create({
      baseURL: config.baseURL || 'https://api.usenubis.com',
      timeout: config.timeout || 30000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.apiKey}`,
      },
    });

    // Response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError<ApiError>) => {
        const message = error.response?.data?.error?.message || error.message || 'An unexpected error occurred';
        const status = error.response?.status;
        const code = error.response?.data?.error?.code || error.code;

        return Promise.reject(new NubisError(message, status, code, error));
      }
    );
  }

  /**
   * Make a GET request
   */
  public async get<T>(path: string, params?: Record<string, any>): Promise<T> {
    const response = await this.client.get<T>(path, { params });
    return response.data;
  }

  /**
   * Make a POST request
   */
  public async post<T>(path: string, data?: any): Promise<T> {
    const response = await this.client.post<T>(path, data);
    return response.data;
  }

  /**
   * Make a PUT request
   */
  public async put<T>(path: string, data?: any): Promise<T> {
    const response = await this.client.put<T>(path, data);
    return response.data;
  }

  /**
   * Make a PATCH request
   */
  public async patch<T>(path: string, data?: any): Promise<T> {
    const response = await this.client.patch<T>(path, data);
    return response.data;
  }

  /**
   * Make a DELETE request
   */
  public async delete<T>(path: string): Promise<T> {
    const response = await this.client.delete<T>(path);
    return response.data;
  }
}
