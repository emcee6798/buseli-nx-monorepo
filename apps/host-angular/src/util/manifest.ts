import { isDevMode } from '@angular/core';

type I_NODE_ENV = 'development' | 'production';
type I_REMOTE_APP_NAMES = 'remote-react' | 'remote-vue';
type I_MANIFEST_ENTRY = Record<I_REMOTE_APP_NAMES, string>
type I_MANIFEST = Record<I_NODE_ENV, I_MANIFEST_ENTRY>

const NODE_ENV: I_NODE_ENV = isDevMode() ? 'development' : 'production';


const manifest: I_MANIFEST = {
  development: {
    'remote-react': 'http://localhost:3000/remoteEntry.js',
    'remote-vue': 'http://localhost:3001/remoteEntry.js'
  },
  production: {
    'remote-react': 'http://localhost:3000/remoteEntry.js',
    'remote-vue': 'http://localhost:3001/remoteEntry.js'
  }
} as const satisfies I_MANIFEST;


export default manifest[NODE_ENV] satisfies I_MANIFEST_ENTRY;