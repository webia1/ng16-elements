import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialExampleComponent } from './components/material-example/material-example.component';
import { FormlyExampleComponent } from './components/formly-example/formly-example.component';

const routes: Routes = [
  {
    path: 'material',
    component: MaterialExampleComponent,
  },
  {
    path: 'formly',
    component: FormlyExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemosRoutingModule {}
