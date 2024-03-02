import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client1/client.component';

const routes: Routes = [
{ path: '', redirectTo: 'client', pathMatch: 'full' },
{ path: 'client/:client', component: ClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
