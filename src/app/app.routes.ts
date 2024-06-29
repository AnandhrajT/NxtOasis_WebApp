import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import{HomeComponent} from './Modules/home/home.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'home', component: HomeComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: '**', redirectTo: '/home' }
        ]
    }
];

