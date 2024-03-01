import { RouterModule, Routes } from "@angular/router";
import { CompareSheetsComponent } from "./compare-sheets.component";
import { NgModule } from "@angular/core";

const COMPARE_SHEETS_ROUTES: Routes = [
    {
        path: '',
        children: [{ path: '', component: CompareSheetsComponent }]
    }
];


@NgModule({
    imports: [RouterModule.forChild(COMPARE_SHEETS_ROUTES)],
    exports: [RouterModule]
})
export class CompareSheetsRoutingModule { };
