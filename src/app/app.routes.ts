import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserProfileComponent } from './menu/user-profile/user-profile.component';
import { SignUpComponent } from './menu/sign-up/sign-up.component';
import { MyFormComponent } from './menu/sign-up/my-form/my-form.component';

const ROUTES: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'formulaire', component: MyFormComponent },
];

export { ROUTES };
