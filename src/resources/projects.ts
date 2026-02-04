import { NubisClient } from '../client';
import type { Project } from '../types';

export class ProjectsResource {
  constructor(private client: NubisClient) {}

  /**
   * List all projects in an organization
   */
  async list(params: { orgId: string }): Promise<{ projects: Project[] }> {
    return this.client.get(`/api/v1/orgs/${params.orgId}/projects`);
  }

  /**
   * Get a specific project by ID
   */
  async get(params: { orgId: string; projectId: string }): Promise<Project> {
    return this.client.get(`/api/v1/orgs/${params.orgId}/projects/${params.projectId}`);
  }

  /**
   * Create a new project
   */
  async create(params: { orgId: string; name: string; slug: string }): Promise<Project> {
    return this.client.post(`/api/v1/orgs/${params.orgId}/projects`, {
      name: params.name,
      slug: params.slug,
    });
  }

  /**
   * Delete a project
   */
  async delete(params: { orgId: string; projectId: string }): Promise<void> {
    return this.client.delete(`/api/v1/orgs/${params.orgId}/projects/${params.projectId}`);
  }
}
