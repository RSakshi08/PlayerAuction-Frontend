import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateplayerComponent } from './createplayer/createplayer.component';
import { CreateteamComponent } from './createteam/createteam.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { RegisterComponent } from './register/register.component';
import { ShowplayerComponent } from './showplayer/showplayer.component';
import { ShowteamComponent } from './showteam/showteam.component';

const routes: Routes = [
  {path :'',component:HomeComponent},
  {path :'registration',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'main',component:MainHomeComponent},
  {path:'main/createteam',component:CreateteamComponent},
  {path:'main/createplayer',component:CreateplayerComponent},
  {path:'main/showplayer',component:ShowplayerComponent},
  {path:'main/showteam',component:ShowteamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
