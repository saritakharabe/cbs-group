import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TeamMember } from './teamMember.model';

@Injectable({
  providedIn: 'root'
})
export class TeamMemberService {

  memberChanged = new Subject<TeamMember[]>();

  allTeamMember: TeamMember[] = [
    {
    image: '/assets/Tennis.png',  
    id: '10',
    firstname:"Santosh",
    lastname:"Patil",
    age: 40,
    address: " Lecture Colony , Bhalki"
    },
    {
      image:'assets/Tennis.png',
      id: "11",
      firstname: "Prashant",
      lastname: " Holsamudre",
      age: 50,
      address: "Bhalki 585320"
    },
  ];
  constructor() { }

  getAllMember():TeamMember[]{
    return this.allTeamMember.slice();
  }

  addteamMember(member: TeamMember):void{
    this.allTeamMember.push(member);
  }

 deleteMember(id: string):void{
    this.allTeamMember = this.allTeamMember.filter(member => member.id != id);
 }

 getMemberById(id: number): TeamMember{
    return this.allTeamMember.find(x => +x.id === id);
 }

 updateMember(newMember: TeamMember):void{
  const index = this.allTeamMember.findIndex( id => newMember.id === id.id);
  this.allTeamMember[index] = newMember;
   this.memberChanged.next(this.allTeamMember.slice());
 }
}
