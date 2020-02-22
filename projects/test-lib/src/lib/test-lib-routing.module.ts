import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestLibComponent } from './test-lib.component';

const routes: Routes = [
  { path: 'test', component: TestLibComponent },
  {
    path: '**',
    redirectTo: 'test'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestLibRoutingModule {}
