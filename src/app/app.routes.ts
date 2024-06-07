import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      loadChildren: () =>
        import('./public/public.module').then((module) => module.PublicModule),
    },
    {
      path: '**',
      redirectTo: 'admin-managment',
    },
  ];
