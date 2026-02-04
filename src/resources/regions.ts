import { NubisClient } from '../client';
import type { Region } from '../types';

export class RegionsResource {
  constructor(private client: NubisClient) {}

  /**
   * List all available regions
   */
  async list(): Promise<{ regions: Region[] }> {
    return this.client.get('/api/v1/catalog/regions');
  }
}
