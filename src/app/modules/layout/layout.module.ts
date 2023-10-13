import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { BottomnavComponent } from './components/bottomnav/bottomnav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContainerComponent } from './components/container/container.component';
import { ChatScreenComponent } from './components/chat-screen/chat-screen.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    BottomnavComponent,
    SidenavComponent,
    ContainerComponent,
    ChatScreenComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    SharedModule,
  ],
})
export class LayoutModule {}
