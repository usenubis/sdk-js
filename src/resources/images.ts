import { NubisClient } from '../client';
import type { Image } from '../types';

export class ImagesResource {
  constructor(private client: NubisClient) {}

  /**
   * List all available images (distributions)
   */
  async list(): Promise<{ images: Image[] }> {
    return this.client.get('/api/v1/catalog/images');
  }
}
