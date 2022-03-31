import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap, ApplicationRef } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
  entryComponents: [
    EmptyRouteComponent
  ]
})

export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap(): void {
    const customElement = createCustomElement(EmptyRouteComponent, { injector: this.injector });
    customElements.define('app-empty-route', customElement);
  }
}
