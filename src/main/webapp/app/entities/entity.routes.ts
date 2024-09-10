import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'gbSandboxJh87App.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'project',
    data: { pageTitle: 'gbSandboxJh87App.project.home.title' },
    loadChildren: () => import('./project/project.routes'),
  },
  {
    path: 'label',
    data: { pageTitle: 'gbSandboxJh87App.label.home.title' },
    loadChildren: () => import('./label/label.routes'),
  },
  {
    path: 'ticket',
    data: { pageTitle: 'gbSandboxJh87App.ticket.home.title' },
    loadChildren: () => import('./ticket/ticket.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
