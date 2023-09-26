import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ROUTES } from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './menu/sign-up/sign-up.component';
import { UserProfileComponent } from './menu/user-profile/user-profile.component';
import { MyFormComponent } from './menu/sign-up/my-form/my-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    SignUpComponent,
    UserProfileComponent,
    MyFormComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
