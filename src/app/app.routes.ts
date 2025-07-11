import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { LoginComponent } from './components/auth/login/login';
import { RegisterComponent } from './components/auth/register/register';
import { ProfileComponent } from './components/profile/profile';
import { PostFormComponent } from './components/post-form/post-form';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'profile',
        loadComponent: () => import('./components/profile/profile').then(m => m.ProfileComponent),
        data: { shouldDetach: false }
      },
    { path: 'post-form', component: PostFormComponent },
];
