import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { LoginComponent } from '@apps-shared-libs/reusables';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((moduleRef) => {
    const injector: Injector = moduleRef.injector;
    const loginElement = createCustomElement(LoginComponent, { injector });
    customElements.define('resuables-login', loginElement);
  })
  .catch((err) => console.error(err));
