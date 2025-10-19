import { initFederation } from '@angular-architects/module-federation';
import { isDevMode } from '@angular/core';

const manifestPublicUrl = isDevMode() ? 'manifest/mf.manifest.dev.json' : 'manifest/mf.manifest.prod.json';

initFederation(manifestPublicUrl)
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));