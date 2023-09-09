import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./routed/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'demos',
    loadChildren: () =>
      import('./routed/demos/demos.module').then((m) => m.DemosModule),
  },
];
