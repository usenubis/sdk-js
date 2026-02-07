import { NubisClient } from '../client';

import type {
  Organization,
  UsageSummaryResponse,
  CurrentUsageResponse
} from '../types';

export class OrgsResource {
  constructor(private client: NubisClient) { }

  /**
   * List all organizations
   */
  async list(): Promise<{ orgs: Organization[] }> {
    return this.client.get('/api/v1/orgs');
  }

  /**
   * Get a specific organization by ID
   */
  async get(params: { orgId: string }): Promise<Organization> {
    return this.client.get(`/api/v1/orgs/${params.orgId}`);
  }

  /**
   * Create a new organization
   */
  async create(params: { name: string; slug: string }): Promise<Organization> {
    return this.client.post('/api/v1/orgs', {
      name: params.name,
      slug: params.slug,
    });
  }

  /**
   * Delete an organization
   */
  async delete(params: { orgId: string }): Promise<void> {
    return this.client.delete(`/api/v1/orgs/${params.orgId}`);
  }

  /**
   * Get usage summary for an organization
   */
  async getUsageSummary(params: { orgId: string, time_range?: string }): Promise<UsageSummaryResponse> {
    const query = new URLSearchParams();
    if (params.time_range) {
      query.append('time_range', params.time_range);
    }
    return this.client.get(`/api/v1/orgs/${params.orgId}/billing/usage/summary?${query.toString()}`);
  }

  /**
   * Get current usage details
   */
  async getCurrentUsage(params: { orgId: string }): Promise<CurrentUsageResponse> {
    return this.client.get(`/api/v1/orgs/${params.orgId}/billing/usage`);
  }
}
