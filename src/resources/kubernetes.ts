import { CreateK8sRequest, KubernetesCluster } from '../types';
import { NubisClient } from '../index';

export class KubernetesResource {
    constructor(private client: NubisClient) { }

    /**
     * List Kubernetes clusters in a project.
     */
    async list(projectId: string): Promise<KubernetesCluster[]> {
        return this.client.get<KubernetesCluster[]>(`/api/v1/projects/${projectId}/k8s`);
    }

    /**
     * Create a new Kubernetes cluster.
     */
    async create(projectId: string, req: CreateK8sRequest): Promise<KubernetesCluster> {
        return this.client.post<KubernetesCluster>(`/api/v1/projects/${projectId}/k8s`, req);
    }

    /**
     * Get a Kubernetes cluster by ID.
     */
    async get(projectId: string, clusterId: string): Promise<KubernetesCluster> {
        return this.client.get<KubernetesCluster>(`/api/v1/projects/${projectId}/k8s/${clusterId}`);
    }

    /**
     * Delete a Kubernetes cluster.
     */
    async delete(projectId: string, clusterId: string): Promise<{ status: string }> {
        return this.client.delete<{ status: string }>(`/api/v1/projects/${projectId}/k8s/${clusterId}`);
    }
}
