import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Players } from '../players';
import { Team } from '../team';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-showteam',
  templateUrl: './showteam.component.html',
  styleUrls: ['./showteam.component.css']
})
export class ShowteamComponent implements OnInit {
    team=new Team();
    players:Players[]=[];
    public  teams:any;
   public  teamName:string="Rajstan Royal";
   msg='';

  constructor(private playerService:PlayerService, private router:Router) { }

  ngOnInit(): void {
   
  }
   public showByTeamName(){
      this.playerService.getPlayerByTeamName(this.teamName).subscribe(
        (data)=>{
          console.log(this.teamName);
          this.players=data;
          console.log(this.players);
        },
        error=>{
           this.msg="Team With this Name is not exist";
        }
      );
   }

   public goToPage(){
     this.router.navigate(['main']);
   }
}
