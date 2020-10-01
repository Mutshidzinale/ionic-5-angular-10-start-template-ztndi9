import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import {CategoryComponent} from './category/category.component';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {path : '', component: LoginComponent},
  {path: 'category', component:CategoryComponent},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
