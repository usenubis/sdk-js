# nubis-sdk

Official Nubis SDK for JavaScript and TypeScript.

## Installation

```bash
npm install nubis-sdk
```

## Usage

```typescript
import { NubisClient } from 'nubis-sdk';

const nubis = new NubisClient({
  apiKey: process.env.NUBIS_API_KEY,
});

// List all VMs in a project
const vms = await nubis.vms.list({
  projectId: 'proj_01J5X...',
});

// Create a new VM
const vm = await nubis.vms.create({
  projectId: 'proj_01J5X...',
  name: 'api-server',
  size: 's-1vcpu-1gb',
  region: 'nyc1',
  image: 'ubuntu-24.04-x64',
});

console.log(`Created VM: ${vm.id}`);
```

## API Reference

### Configuration

```typescript
interface NubisClientConfig {
  apiKey: string;           // Required: Your Nubis API key
  baseURL?: string;          // Optional: API base URL (default: https://api.usenubis.com)
  timeout?: number;          // Optional: Request timeout in ms (default: 30000)
}
```

### Resources

- `vms` - Manage virtual machines
- `projects` - Manage projects
- `orgs` - Manage organizations
- `regions` - List available regions
- `sizes` - List available VM sizes
- `images` - List available images/distributions

## License

MIT
