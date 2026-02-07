import { NubisClient } from '../client';
import type { CreateVmRequest, Vm } from '../types';

export class VmsResource {
  constructor(private client: NubisClient) { }

  /**
   * List all VMs in a project
   */
  async list(params: { projectId: string }): Promise<{ vms: Vm[] }> {
    return this.client.get(`/api/v1/projects/${params.projectId}/vms`);
  }

  /**
   * Get a specific VM by ID
   */
  async get(params: { projectId: string; vmId: string }): Promise<Vm> {
    return this.client.get(`/api/v1/projects/${params.projectId}/vms/${params.vmId}`);
  }

  /**
   * Create a new VM
   */
  async create(params: CreateVmRequest): Promise<Vm> {
    const { projectId, ...payload } = params;
    return this.client.post(`/api/v1/projects/${projectId}/vms`, payload);
  }

  /**
   * Delete a VM
   */
  async delete(params: { projectId: string; vmId: string }): Promise<void> {
    return this.client.delete(`/api/v1/projects/${params.projectId}/vms/${params.vmId}`);
  }

  /**
   * Start a VM
   */
  async start(params: { projectId: string; vmId: string }): Promise<Vm> {
    return this.client.post(`/api/v1/projects/${params.projectId}/vms/${params.vmId}/start`);
  }

  /**
   * Stop a VM
   */
  async stop(params: { projectId: string; vmId: string }): Promise<Vm> {
    return this.client.post(`/api/v1/projects/${params.projectId}/vms/${params.vmId}/stop`);
  }

  /**
   * Reboot a VM
   */
  async reboot(params: { projectId: string; vmId: string }): Promise<Vm> {
    return this.client.post(`/api/v1/projects/${params.projectId}/vms/${params.vmId}/reboot`);
  }

  /**
   * Resize a VM
   */
  async resize(params: { projectId: string; vmId: string; size: string }): Promise<Vm> {
    return this.client.post(`/api/v1/projects/${params.projectId}/vms/${params.vmId}/resize`, { size: params.size });
  }

  /**
   * Rename a VM
   */
  async rename(params: { projectId: string; vmId: string; name: string }): Promise<Vm> {
    return this.client.post(`/api/v1/projects/${params.projectId}/vms/${params.vmId}/rename`, { name: params.name });
  }

  /**
   * Get VM metrics
   */
  async metrics(params: { projectId: string; vmId: string }): Promise<any> {
    return this.client.get(`/api/v1/projects/${params.projectId}/vms/${params.vmId}/metrics`);
  }
}
