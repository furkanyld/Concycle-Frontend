import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { AuthService } from '../services/auth.service';

export function withAuthInitializer(): ApplicationConfig['providers'] {
  return [
    {
      provide: 'auth-init',
      useFactory: (authService: AuthService) => {
        return () => authService.initialize();
      },
      deps: [AuthService]
    }
  ];
}
