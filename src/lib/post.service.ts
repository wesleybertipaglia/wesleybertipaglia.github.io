/// <reference lib="dom" />
import type {
  PostDto,
  PostCreateDto,
  PostClapsCountDto,
  PostViewsCountDto,
} from './types';

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const baseURL = `${API_BASE_URL}/api/v1`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class PostApiService {
  static async create(data: PostCreateDto): Promise<PostDto> {
    // eslint-disable-next-line no-undef
    const response = await fetch(`${baseURL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  static async clap(id: string): Promise<PostDto> {
    // eslint-disable-next-line no-undef
    const response = await fetch(`${baseURL}/posts/${id}/clap`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  static async getById(id: string): Promise<PostDto | null> {
    // eslint-disable-next-line no-undef
    const response = await fetch(`${baseURL}/posts/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  static async getViewsById(id: string): Promise<PostViewsCountDto | null> {
    // eslint-disable-next-line no-undef
    const response = await fetch(`${baseURL}/posts/${id}/views`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  static async getClapsById(id: string): Promise<PostClapsCountDto | null> {
    // eslint-disable-next-line no-undef
    const response = await fetch(`${baseURL}/posts/${id}/claps`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }
}
