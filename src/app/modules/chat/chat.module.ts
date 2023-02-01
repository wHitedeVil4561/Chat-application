import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { GroupsComponent } from './components/groups/groups.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ChatsComponent } from './components/chats/chats.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    GroupsComponent,
    ProfileComponent,
    SettingsComponent,
    ChatsComponent,
    ContactsComponent,
  ],
  imports: [CommonModule, ChatRoutingModule,MaterialModule],
})
export class ChatModule {}
