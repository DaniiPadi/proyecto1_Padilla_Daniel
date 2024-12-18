import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InvitadoComponent } from './pages/invitado/invitado.component';
import { PoliticoComponent } from './pages/politico/politico.component';


export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'invitado', component: InvitadoComponent},
    { path: 'politico', component: PoliticoComponent},
];
