import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// imports
import { BasicPageComponent, DynamicPageComponent, SwitchesPageComponent } from './pages/index';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basic', component: BasicPageComponent },
      { path: 'dynamic', component: DynamicPageComponent },
      { path: 'switches', component: SwitchesPageComponent },
      { path: '**', redirectTo: 'basic' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
