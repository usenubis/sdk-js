import { NubisClient } from '../client';
import type { AppEngineProject, AppEngineDeployment, AppEngineDomain } from '../types';

export class AppEngineResource {
    constructor(private client: NubisClient) { }

    public async getProject(projectId: string): Promise<AppEngineProject> {
        return this.client.get(`/api/v1/projects/${projectId}/app-engine`);
    }

    public async listDeployments(projectId: string, paasProjectId: string): Promise<AppEngineDeployment[]> {
        return this.client.get(`/api/v1/projects/${projectId}/app-engine/${paasProjectId}/deployments`);
    }

    public async getDeployment(projectId: string, deployment_id: string): Promise<AppEngineDeployment> {
        return this.client.get(`/api/v1/projects/${projectId}/app-engine/deployments/${deployment_id}`);
    }

    public async listDomains(projectId: string, paasProjectId: string): Promise<AppEngineDomain[]> {
        return this.client.get(`/api/v1/projects/${projectId}/app-engine/${paasProjectId}/domains`);
    }

    public async addDomain(projectId: string, paasProjectId: string, data: { domain_name: string, is_primary?: boolean }): Promise<AppEngineDomain> {
        return this.client.post(`/api/v1/projects/${projectId}/app-engine/${paasProjectId}/domains`, data);
    }

    public async deleteDomain(projectId: string, domainId: string): Promise<void> {
        return this.client.delete(`/api/v1/projects/${projectId}/app-engine/domains/${domainId}`);
    }
}
