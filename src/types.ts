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
  project_id: string;
  org_id: string;
  provider: string;
  image: string;
  public_ip?: string;
  private_ip?: string;
  created_at: string;
  started_at?: string;
  last_error?: string;
  provider_id?: string;
  do_droplet_id?: number;
  do_vpc_uuid?: string;
  do_tags?: string[];
  raw_base_price_hourly?: number;
  nubis_final_price_hourly?: number;
  hourly_cost?: number;
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

export interface UsageBreakdown {
  compute: number;
  storage: number;
  networking: number;
  load_balancers: number;
}

export interface CurrentUsageResponse {
  period_start: string;
  period_end: string;
  accrued_cents: number;
  projected_total_cents: number;
  currency: string;
  breakdown: UsageBreakdown;
}

export interface UsageSummaryResponse {
  current_month_spend_cents: number;
  estimated_total_bill_cents: number;
  currency: string;
  last_updated_at: string;
  period_start: string;
  period_end: string;
}

export interface KubernetesNodePool {
  id: string;
  name: string;
  size: string;
  count: number;
  auto_scale: boolean;
  min_nodes?: number;
  max_nodes?: number;
}

export interface KubernetesCluster {
  id: string;
  project_id: string;
  org_id: string;
  name: string;
  region: string;
  version: string;
  status: string;
  ha_enabled: boolean;
  created_at: string;
  updated_at: string;
  node_pools?: KubernetesNodePool[];
}

export interface CreateK8sRequest {
  name: string;
  region: string;
  version: string;
  ha: boolean;
  node_pools: {
    name: string;
    size: string;
    count: number;
    auto_scale: boolean;
    min_nodes?: number;
    max_nodes?: number;
  }[];
}

export interface DatabaseCluster {
  id: string;
  project_id: string;
  org_id: string;
  name: string;
  engine: string;
  version: string;
  status: string;
  size: string;
  num_nodes: number;
  region: string;
  created_at: string;
  updated_at: string;
}

export interface CreateDbRequest {
  name: string;
  engine: string;
  version: string;
  size: string;
  num_nodes: number;
  region: string;
}

export interface AppEngineProject {
  id: string;
  project_id: string;
  repo_url: string;
  branch: string;
  framework?: string;
  created_at: string;
}

export interface AppEngineDeployment {
  id: string;
  commit_sha?: string;
  commit_message?: string;
  branch: string;
  status: string;
  deployment_url?: string;
  created_at: string;
  finished_at?: string;
}

export interface AppEngineDomain {
  id: string;
  domain_name: string;
  is_primary: boolean;
  ssl_enabled: boolean;
  status: string;
  created_at: string;
}
