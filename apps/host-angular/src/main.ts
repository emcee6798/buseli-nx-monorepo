import { initFederation } from '@angular-architects/module-federation';
// import manifest from './util/manifest';

// initFederation(manifest)
initFederation('mf.manifest.json')
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));