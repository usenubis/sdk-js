import { CreateDbRequest, DatabaseCluster } from '../types';
import { NubisClient } from '../index';

export class DatabasesResource {
    constructor(private client: NubisClient) { }

    /**
     * List database clusters in a project.
     */
    async list(projectId: string): Promise<DatabaseCluster[]> {
        return this.client.get<DatabaseCluster[]>(`/api/v1/projects/${projectId}/databases`);
    }

    /**
     * Create a new database cluster.
     */
    async create(projectId: string, req: CreateDbRequest): Promise<DatabaseCluster> {
        return this.client.post<DatabaseCluster>(`/api/v1/projects/${projectId}/databases`, req);
    }

    /**
     * Get a database cluster by ID.
     */
    async get(projectId: string, clusterId: string): Promise<DatabaseCluster> {
        return this.client.get<DatabaseCluster>(`/api/v1/projects/${projectId}/databases/${clusterId}`);
    }

    /**
     * Delete a database cluster.
     */
    async delete(projectId: string, clusterId: string): Promise<{ status: string }> {
        return this.client.delete<{ status: string }>(`/api/v1/projects/${projectId}/databases/${clusterId}`);
    }
}
