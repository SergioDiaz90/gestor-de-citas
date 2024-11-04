import { Route } from "@angular/router";
import { HomeComponent } from "../../home/home.component";
import { PatientComponent } from "../../patient/patient.component";
import { ConsultComponent } from "../../consult/consult.component";
import { UsersComponent } from "../../users/users.component";
import { SettingsComponent } from "../../settings/settings.component";

// In admin/routes.ts:
export const ADMIN_ROUTES: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'patient',
        component: PatientComponent,
    },
    {
        path: 'consult',
        component: ConsultComponent,
    },
    {
        path: 'users',
        component: UsersComponent,
    },
    {
        path: 'settings',
        component: SettingsComponent,
    }
] as Route[];