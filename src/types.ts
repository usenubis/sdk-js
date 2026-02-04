// Request/Response types for the Nubis API

export interface NubisClientConfig {
  apiKey: string;
  baseURL?: string;
  timeout?: number;
}

export interface CreateVmRequest {
  projectId: string;
  name: string;
  size: string;
  region: string;
  image: string;
  ssh_keys?: string[];
  ssh_public_key?: string;
  ssh_public_key_id?: string;
  network_id?: string;
  firewall_id?: string;
  public_ip?: boolean;
  tags?: Record<string, string>;
  enable_password_auth?: boolean;
  admin_password?: string;
  ssh_allowed_cidrs?: string[];
}

export interface Vm {
  id: string;
  name: string;
  status: string;
  size: string;
  region: string;
  image: string;
  created_at: string;
  [key: string]: any;
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  org_id: string;
  created_at: string;
  [key: string]: any;
}

export interface Organization {
  id: string;
  name: string;
  slug: string;
  created_at: string;
  [key: string]: any;
}

export interface Region {
  id: string;
  name: string;
  slug: string;
  available: boolean;
  [key: string]: any;
}

export interface Size {
  id: string;
  slug: string;
  memory: number;
  vcpus: number;
  disk: number;
  transfer: number;
  price_monthly: number;
  price_hourly: number;
  [key: string]: any;
}

export interface Image {
  id: string;
  name: string;
  slug?: string;
  distribution?: string;
  [key: string]: any;
}

export interface ApiError {
  error: {
    message: string;
    code?: string;
  };
}
