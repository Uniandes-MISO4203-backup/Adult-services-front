import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// adult registering component
import { AdultFormComponent } from '../adult-form/form/form.component'

const routes: Routes = [
    {
        path: 'register',
        children: [
            {
                path: 'adult',
                component: AdultFormComponent
            },
        ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
