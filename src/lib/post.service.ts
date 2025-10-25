/// <reference lib="dom" />
import type { PostDto, PostCreateDto, PostClapsCountDto } from './types';

interface RequestInit {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}

const API_BASE_URL =
  import.meta.env.API_BASE_URL || 'http://localhost:3000/api/v1';

export class PostApiService {
  private static async request<T>(
    url: string,
    options: RequestInit = {}
  ): Promise<T | null> {
    // eslint-disable-next-line no-undef
    const response = await fetch(url, {
      headers: options.body ? { 'Content-Type': 'application/json' } : {},
      ...options,
    });
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  static async create(data: PostCreateDto): Promise<PostDto> {
    return this.request<PostDto>(`${API_BASE_URL}/posts`, {
      method: 'POST',
      body: JSON.stringify(data),
    }) as Promise<PostDto>;
  }

  static async clap(id: string): Promise<PostDto> {
    return this.request<PostDto>(`${API_BASE_URL}/posts/claps/${id}`, {
      method: 'POST',
    }) as Promise<PostDto>;
  }

  static async getById(id: string): Promise<PostDto | null> {
    return this.request<PostDto>(`${API_BASE_URL}/posts/${id}`, {
      method: 'GET',
    });
  }

  static async getClapsById(id: string): Promise<PostClapsCountDto | null> {
    return this.request<PostClapsCountDto>(
      `${API_BASE_URL}/posts/claps/${id}`,
      {
        method: 'GET',
      }
    );
  }
}
