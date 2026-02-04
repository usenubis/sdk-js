import { NubisClient } from '../client';
import type { Size } from '../types';

export class SizesResource {
  constructor(private client: NubisClient) {}

  /**
   * List all available sizes (VM plans)
   */
  async list(params?: { region?: string }): Promise<{ sizes: Size[] }> {
    const query = params?.region ? `?region=${encodeURIComponent(params.region)}` : '';
    return this.client.get(`/api/v1/catalog/sizes${query}`);
  }
}
