import { Routes } from '@angular/router';

import { AyHomeComponent } from '../ay-home/ay-home.component';
import { CaptureDataComponent } from '../capture-data/capture-data.component'

export const AyLayoutRoutes: Routes = [
    { path: 'home', component: AyHomeComponent },
    { path: 'questions', component: CaptureDataComponent }
];