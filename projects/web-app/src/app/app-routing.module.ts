import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: 'test-lib',
    loadChildren: () =>
      import('test-lib').then(m => {
        m.TestLibModule.settings = {
          message: environment.message
        };

        return m.TestLibModule;
      })
  },
  {
    path: '**',
    redirectTo: 'test-lib'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
