import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackPagesComponent } from './pages/track-pages/track-pages.component';

const routes: Routes = [
  {
    path: '',
    component: TrackPagesComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracksRoutingModule { }
