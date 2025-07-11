import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi  } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { httpInterceptorProviders } from './services/interceptor.providers'; 
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './services/auth.interceptor'; 
import { withAuthInitializer } from './config/init-auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withInterceptorsFromDi()),
    ...httpInterceptorProviders,
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    ...withAuthInitializer() 
  ]
};
