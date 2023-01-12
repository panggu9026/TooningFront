import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes} from '@angular/router'; //라우터
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ParticipatingWorksComponent } from './participating-works/participating-works.component';
import { ParticipatingComponent } from './participating/participating.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { PopularTemplatesComponent } from './main/popular-templates/popular-templates.component';

const router : Routes = [
  {path : 'participating-works', component : ParticipatingWorksComponent},
  {path : 'participating', component : ParticipatingComponent},
  {path : 'main', component : MainComponent},
  {path : '', redirectTo : '/main',  pathMatch : 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    ParticipatingWorksComponent,
    ParticipatingComponent,
    MainComponent,
    PopularTemplatesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router,{enableTracing:false}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
