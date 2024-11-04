import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DashboardComponent } from './dashboard.component';
import { MenuModule } from 'primeng/menu';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { Helpers } from 'src/app/helpers/helpers';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MenuModule,
    AvatarModule,
    AvatarGroupModule
  ],
  providers: [ Helpers ],
})
export class DashboardModule { }
