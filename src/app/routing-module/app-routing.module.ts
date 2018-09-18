import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// adult registering component
import { AdultFormComponent } from '../adult-form/form/form.component'

//sign in component
import { SignInComponentComponent } from '../sign-in-module/sign-in-component/sign-in-component.component'

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
    {
        path: 'signIn',
        component: SignInComponentComponent
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
