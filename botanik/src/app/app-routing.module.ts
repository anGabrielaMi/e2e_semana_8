import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from'./guards/auth-guard';
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate :[AuthGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule),
    canActivate :[AuthGuard]
  },
  {
    path: 'modificar-perfil',
    loadChildren: () => import('./modificar-perfil/modificar-perfil.module').then(m => m.ModificarPerfilPageModule),
    canActivate :[AuthGuard]
  },
  {
    path: 'quienes-somos',
    loadChildren: () => import('./quienes-somos/quienes-somos.module').then(m => m.QuienesSomosPageModule),
      canActivate :[AuthGuard]
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./ofertas/ofertas.module').then(m => m.OfertasPageModule),
      canActivate :[AuthGuard]
  },
  {
    path: 'categorias/interior',
    loadChildren: () => import('./categorias/interior/interior.module').then(m => m.InteriorPageModule),
      canActivate :[AuthGuard]
  },
  {
    path: 'categorias/exterior',
    loadChildren: () => import('./categorias/exterior/exterior.module').then(m => m.ExteriorPageModule),
      canActivate :[AuthGuard]
  },
  {
    path: 'categorias/bienestar',
    loadChildren: () => import('./categorias/bienestar/bienestar.module').then(m => m.BienestarPageModule),
      canActivate :[AuthGuard]
  },
  {
    path: 'categorias/regalos',
    loadChildren: () => import('./categorias/regalos/regalos.module').then(m => m.RegalosPageModule),
      canActivate :[AuthGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }