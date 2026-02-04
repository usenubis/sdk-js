export { NubisError } from './client';
export * from './types';
export { VmsResource } from './resources/vms';
export { ProjectsResource } from './resources/projects';
export { OrgsResource } from './resources/orgs';
export { RegionsResource } from './resources/regions';
export { SizesResource } from './resources/sizes';
export { ImagesResource } from './resources/images';

import { NubisClient as BaseNubisClient } from './client';
import { VmsResource } from './resources/vms';
import { ProjectsResource } from './resources/projects';
import { OrgsResource } from './resources/orgs';
import { RegionsResource } from './resources/regions';
import { SizesResource } from './resources/sizes';
import { ImagesResource } from './resources/images';
import type { NubisClientConfig } from './types';

/**
 * Main Nubis SDK Client
 * 
 * @example
 * ```typescript
 * import { NubisClient } from 'nubis-sdk';
 * 
 * const nubis = new NubisClient({
 *   apiKey: process.env.NUBIS_API_KEY,
 * });
 * 
 * // List all VMs in a project
 * const vms = await nubis.vms.list({
 *   projectId: 'proj_01J5X...',
 * });
 * 
 * // Create a new VM
 * const vm = await nubis.vms.create({
 *   projectId: 'proj_01J5X...',
 *   name: 'api-server',
 *   size: 's-1vcpu-1gb',
 *   region: 'nyc1',
 *   image: 'ubuntu-24.04-x64',
 * });
 * ```
 */
export class NubisClient extends BaseNubisClient {
  public readonly vms: VmsResource;
  public readonly projects: ProjectsResource;
  public readonly orgs: OrgsResource;
  public readonly regions: RegionsResource;
  public readonly sizes: SizesResource;
  public readonly images: ImagesResource;

  constructor(config: NubisClientConfig) {
    super(config);
    this.vms = new VmsResource(this);
    this.projects = new ProjectsResource(this);
    this.orgs = new OrgsResource(this);
    this.regions = new RegionsResource(this);
    this.sizes = new SizesResource(this);
    this.images = new ImagesResource(this);
  }
}

// Default export for convenience
export default NubisClient;
