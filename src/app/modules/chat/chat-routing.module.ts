import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './components/chats/chats.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ContactsComponent } from './components/contacts/contacts.component';
const routes: Routes = [
  { path: 'chats', component: ChatsComponent, data: { screen: 'chat' } },
  { path: 'profile', component: ProfileComponent, data: { screen: 'profile' } },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { screen: 'setting' },
  },
  { path: 'groups', component: GroupsComponent, data: { screen: 'group' } },
  {
    path: 'contacts',
    component: ContactsComponent,
    data: { screen: 'contact' },
  },
  { path: '', redirectTo: 'chats', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
