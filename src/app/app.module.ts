import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule
} from '@angular/material';
import {NewPreviewComponent} from './components/new-preview/new-preview.component';
import {NgxMasonryModule} from 'ngx-masonry';
import {HeaderComponent} from './components/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchPageComponent} from './pages/search-page/search-page.component';
import {LottieAnimationViewModule} from 'lottie-angular2';
import {NewSearchPreviewComponent} from './components/new-search-preview/new-search-preview.component';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {MockNumberPipe} from './pipes/mock-number/mock-number.pipe';
import {SkeletonComponent} from './components/skeleton/skeleton.component';
import {DetailViewComponent} from './modals/detail-view/detail-view.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NewPreviewComponent,
    HeaderComponent,
    SearchPageComponent,
    NewSearchPreviewComponent,
    MockNumberPipe,
    SkeletonComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    // Material Modules
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatPaginatorModule,
    MatBottomSheetModule,
    NgxMasonryModule,
    NgxSkeletonLoaderModule,
    LottieAnimationViewModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DetailViewComponent
  ]
})
export class AppModule {
}
