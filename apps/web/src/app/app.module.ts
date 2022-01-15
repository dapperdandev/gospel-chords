import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { SharedTempModule } from '@gospel-chords/shared/temp';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '', component: AppComponent }]),
    NbThemeModule.forRoot(),
    NbLayoutModule,
    SharedTempModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
