import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {SearchPageComponent} from './pages/search-page/search-page.component';

const routes: Routes = [
  {
    path: 'home', component: LandingPageComponent
  },
  {
    path: 'search', component: SearchPageComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
