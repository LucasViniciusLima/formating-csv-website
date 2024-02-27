import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'compare-sheets'
    },
    {
        path: 'compare-sheets',
        loadChildren: () => import('./compare-sheets/compare-sheets.module').then(m => m.CompareSheetsModule)
    }
];
